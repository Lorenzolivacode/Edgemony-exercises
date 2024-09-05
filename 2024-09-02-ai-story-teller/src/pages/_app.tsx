import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Il tuo titolo personalizzato</title>
        <link rel="icon" href="/icons-book.png" />{" "}
        {/* Modifica qui il percorso se necessario */}
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
