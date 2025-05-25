import Head from "next/head";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../public/demo/css/style.css";
import VideoState from "../src/context/video";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setPreloader(false);
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <VideoState>
      <Head>
        <title>Scoreway - Learn by Practice</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/demo/images/icons/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          href="/demo/images/icons/apple-touch-icon-152x152.png"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-5547PKSQEH`}
        />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5547PKSQEH', { page_path: window.location.pathname });
            `,
          }}
        /> */}
      </Head>
      {preloader && <PreLoader />}
      <Component {...pageProps} />
    </VideoState>
  );
}

export default MyApp;
