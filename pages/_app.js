import "../styles/globals.css";
import NextNprogress from "nextjs-progressbar";
import { Router } from "next/router";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#FE595E"
        startPosition={0.3}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
