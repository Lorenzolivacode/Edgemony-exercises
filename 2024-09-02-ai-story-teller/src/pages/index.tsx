import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Header from "@/(components)/(Molecules)/Header/Header";
import WindowBox from "@/(components)/(Organism)/WindowBox/WindowBox";
import InputBox from "@/(components)/(Molecules)/InputBox/InputBox";
import { useState } from "react";
import { listaGeneri } from "@/costants/common";
import Button from "@/(components)/(Atoms)/Button/Button";
import SwitchBox from "@/(components)/(Molecules)/SwitchBox/SwitchBox";
import {
  GenerateContentCandidate,
  GoogleGenerativeAI,
} from "@google/generative-ai";

export default function Home() {
  const [protagonista, setProtagonista] = useState("");
  const [antagonista, setAntagonista] = useState("");
  const [genere, setGenere] = useState("");
  const [numberWords, setNumberWords] = useState("");
  const [pegi18, setPEgi18] = useState(true);

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    console.log("Loading: ", loading);

    const prompt = `genera un racconto ${genere} per ${
      pegi18 ? "adulti" : "bambini"
    } ${
      numberWords && `di ${numberWords} parole`
    }, con il protagonista chiamato ${protagonista} e l'antagonista chiamato ${antagonista}.`;

    if (process.env.NEXT_PUBLIC_GEMINI_KEY) {
      if (
        protagonista.trim().length > 0 &&
        antagonista.trim().length > 0 &&
        genere.trim().length > 0
      ) {
        const genAI = new GoogleGenerativeAI(
          process.env.NEXT_PUBLIC_GEMINI_KEY
        );
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);

        const output = (
          result.response.candidates as GenerateContentCandidate[]
        )[0].content.parts[0].text;

        if (output) {
          setResponse(output);
        }
      }
    }
    setLoading(false);
    console.log("Loading: ", loading);
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
            <InputBox
              label="N° parole"
              value={numberWords}
              setValue={setNumberWords}
              type="number"
            />
            <SwitchBox
              label={pegi18 ? "Per adulti" : "Per bambini"}
              value={pegi18}
              setValue={setPEgi18}
            />
            <Button
              label="Genera"
              onClick={handleGenerate}
              disabled={
                protagonista.trim().length <= 0 ||
                antagonista.trim().length <= 0 ||
                genere.trim().length <= 0 ||
                loading
              }
            />
          </div>
        </WindowBox>
        {loading && (
          <div className={`${styles.result} ${styles.loading}`}>
            <div className={styles.loader} />
            <div className={styles.loader_row}>
              <div className={styles.loader_row__color} />
            </div>
          </div>
        )}
        {response && <div className={styles.result}>{response}</div>}
      </main>
    </>
  );
}
