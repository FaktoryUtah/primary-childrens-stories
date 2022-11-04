import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-MWNT839",
    });
    TagManager.initialize({
      gtmId: "GTM-PN62ZXM",
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Primary Children’s Hospital is recognized as one of the nation’s best children’s hospitals. For nearly a century, we’ve helped countless kids win."
        />
        <meta
          property="og:image"
          content="https://herekidswin.com/og-image.jpg"
        />
        <meta name="theme-color" content="#005eaa" />
        <link
          type="text/plain"
          rel="author"
          href="https://herekidswin.com/humans.txt"
        />
      </Head>
      <ToastContainer
        options={{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          newestOnTop: false,
          closeOnClick: true,
          pauseOnVisibilityChange: true,
          draggable: true,
          pauseOnHover: true,
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
