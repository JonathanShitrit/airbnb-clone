import "../styles/globals.css";
import NextNprogress from "nextjs-progressbar";
import { Router } from "next/router";

// const progress = new ProgressBar({
//   size: 4,
//   color: "#FE595E",
//   delay: 100,
// });

// sest;
// Router.events.on("routeChangeStart", progress.start());
// Router.events.on("routeChangeComplete", progress.finish());
// Router.events.on("routeChangeError", progress.finish());

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
