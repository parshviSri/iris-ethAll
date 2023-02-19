import packageJson from '../package.json'
import { classNames } from '../helpers'
import {
  LinkIcon,
  BookOpenIcon,
  UserGroupIcon,
  ChevronRightIcon,
  ArrowSmRightIcon,
} from '@heroicons/react/solid'
import { useAppStore } from '../store/app'

type IrisInfoRowProps = {
  icon: JSX.Element
  headingText: string
  subHeadingText: string
  onClick?: (() => void) | (() => Promise<void>)
  disabled?: boolean
}

type XmtpInfoPanelProps = {
  onConnect?: () => Promise<void>
}

const InfoRow = ({
  icon,
  headingText,
  subHeadingText,
  onClick,
  disabled,
}: IrisInfoRowProps): JSX.Element => (
  <a
    onClick={disabled ? undefined : onClick}
    className={disabled ? 'cursor-auto' : 'cursor-pointer'}
  >
    <div
      className={classNames(
        disabled ? 'opacity-40' : '',
        'flex py-4 border border-x-0 border-y-zinc-50 justify-between items-stretch text-left'
      )}
    >
      <div className="h-10 w-10 bg-l-300 rounded-lg text-white p-2">{icon}</div>
      <div className="ml-3 flex-col justify-center text-md flex-1">
        <div className="font-semibold text-n-600">{headingText}</div>
        <div className="text-n-300">{subHeadingText}</div>
      </div>
      <div className="w-10 flex justify-end items-center pr-2">
        <ChevronRightIcon className="h-5" />
      </div>
    </div>
  </a>
)

const IrisInfoPanel = ({ onConnect }: XmtpInfoPanelProps): JSX.Element => {
  const walletAddress = useAppStore((state) => state.address)
  const InfoRows = [
    {
      icon: <LinkIcon />,
      headingText: 'Connect your wallet',
      subHeadingText:
        'Verify your wallet on XMTP protocol to start using Iris',
      onClick: onConnect,
      disabled: !!walletAddress,
    },
    {
      icon: <BookOpenIcon />,
      headingText: 'Support Us @ GitHub',
      subHeadingText:
        'Check out the documentation for our app and find out how we build it',
      onClick: () => window.open('https://docs.xmtp.org', '_blank'),
    },
    {
      icon: <UserGroupIcon />,
      headingText: 'Help us to build the community',
      subHeadingText:
        'Tell us how we can improve and build the community',
      onClick: () => window.open('https://community.xmtp.org', '_blank'),
    },
  ]

  return (
    // The info panel is only shown in desktop layouts.
    <div className="hidden md:block m-auto w-[464px]">
      <div className="pb-6">
        <div className="text-xl text-n-600 font-semibold mb-1">
          Welcome to the IRIS
        </div>
        <div className="text-md text-n-300">
          Get started by connecting wallet or joining the community
        </div>
      </div>
      <div>
        {InfoRows.map((info, index) => {
          return (
            <InfoRow
              key={index}
              icon={info.icon}
              headingText={info.headingText}
              subHeadingText={info.subHeadingText}
              onClick={info.onClick}
              disabled={info.disabled}
            />
          )
        })}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-n-600 text-sm">
          xmtp-js v{packageJson.dependencies['@xmtp/xmtp-js'].substring(1)}
        </div>
        <a
          href="https://blog.xmtp.com/contact/"
          target="_blank"
          className="text-l-300 font-semibold text-md flex items-center"
          rel="noreferrer"
        >
          I need help <ArrowSmRightIcon className="h-5 fill-l-300" />
        </a>
      </div>
    </div>
  )
}

export default IrisInfoPanel
