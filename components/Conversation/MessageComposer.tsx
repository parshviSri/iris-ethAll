/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { classNames } from '../../helpers'
import messageComposerStyles from '../../styles/MessageComposer.module.css'
import upArrowGreen from '../../public/up-arrow-green.svg'
import upArrowGrey from '../../public/up-arrow-grey.svg'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {addFile} from '../../helpers/ipfs'
type MessageComposerProps = {
  onSend: (msg: string) => Promise<void>
}

const MessageComposer = ({ onSend }: MessageComposerProps): JSX.Element => {
  const [message, setMessage] = useState('');
  const [messageImage, setmessageImage] = useState('')
  const router = useRouter()

  useEffect(() => setMessage(''), [router.query.recipientWalletAddr])

  const onMessageChange = (e: React.FormEvent<HTMLInputElement>) =>
    setMessage(e.currentTarget.value)
  const onaddImage = async(e: React.FormEvent<HTMLInputElement>) =>{
    console.log(e?.currentTarget?.files[0]);
    
    const url = await addFile(e.currentTarget.files[0])
     setmessageImage(url);
     setMessage(url)
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!message) {
      return
    }
    setMessage('')
    await onSend(message)
  }

  return (
    <div className={classNames("bg-white", "flex", "items-center")}>
      <img src={messageImage} />
      <form
        className={classNames(
          "flex",
          "m-2",
          "w-full",
          "border",
          "py-2",
          "pl-4",
          "mr-3",
          "drop-shadow-xl",
          "mt-0",
          messageComposerStyles.bubble
        )}
        autoComplete="off"
        onSubmit={onSubmit}
      >

        <input
          type="text"
          placeholder="Type something..."
          className={classNames(
            "block",
            "w-full",
            "text-md",
            "md:text-sm",

            messageComposerStyles.input
          )}
          name="message"
          value={message}
          onChange={onMessageChange}
          required
        />
        <div>
          <input
            type="file"
            className="hidden"
            id="postImage"
            onChange={onaddImage}
          />
          <label htmlFor="postImage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <button type="submit" className={messageComposerStyles.arrow}>
          {!message ? (
            <Image src={upArrowGrey} alt="send" height={32} width={32} />
          ) : (
            <Image src={upArrowGreen} alt="send" height={32} width={32} />
          )}
        </button>
      </form>
    </div>
  );
}

export default MessageComposer
