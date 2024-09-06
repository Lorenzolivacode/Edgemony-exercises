import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="it">
      <Head>
        <title>Ai Story teller</title>
        <link rel="icon" href="/icons-book.png" />{" "}
        {/* Modifica qui il percorso se necessario */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
