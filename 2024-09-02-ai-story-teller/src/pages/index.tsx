import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/(components)/(Molecules)/Header/Header";
import WindowBox from "@/(components)/(Organism)/WindowBox/WindowBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="AI based app to generate stories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main className={`${styles.main}`}>
        <Header title="AI story teller"></Header>
        <WindowBox title="Title Window Box" />
      </main>
    </>
  );
}
