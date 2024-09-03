import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/(components)/(Molecules)/Header/Header";
import WindowBox from "@/(components)/(Organism)/WindowBox/WindowBox";
import InputBox from "@/(components)/(Molecules)/InputBox/InputBox";
import { useState } from "react";
import { listaGeneri } from "@/costants/common";
import Button from "@/(components)/(Atoms)/Button/Button";

export default function Home() {
  const [protagonista, setProtagonista] = useState("");
  const [antagonista, setAntagonista] = useState("");
  const [genere, setGenere] = useState("");

  const handleGenerate = () => {
    console.log({ protagonista, antagonista, genere });
  };
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
        <WindowBox title="Title Window Box">
          <div className={styles.container}>
            <InputBox
              label="Protagonista"
              value={protagonista}
              placeholder="protagonista"
              setValue={setProtagonista}
            />
            <InputBox
              label="Antagonista"
              value={antagonista}
              placeholder="antagonista"
              setValue={setAntagonista}
            />
            <InputBox label="Genere" setValue={setGenere} list={listaGeneri} />
            <Button
              label="Genera"
              onClick={handleGenerate}
              disabled={
                protagonista.trim().length <= 0 ||
                antagonista.trim().length <= 0 ||
                genere.trim().length <= 0
              }
            />
          </div>
        </WindowBox>
      </main>
    </>
  );
}
