import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
// lazy loading SSR : false means that server side rendering is stopped
const AppWithoutSSR = dynamic(() => import("../components/App"), {
  ssr: false,
});

function AppWrapper({ Component, pageProps }: AppProps) {
  return (
    <AppWithoutSSR>
      <Component {...pageProps} />
    </AppWithoutSSR>
  );
}

export default AppWrapper;
