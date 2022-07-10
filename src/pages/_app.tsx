import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NoScript from "../components/NoScript";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Poppins:wght@200;300;400;500;600&family=Roboto:wght@100;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <noscript>
        <NoScript />
      </noscript>
    </>
  );
}

export default MyApp;
