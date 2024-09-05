import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Header from "@/(components)/(Molecules)/Header/Header";
import WindowBox from "@/(components)/(Organism)/WindowBox/WindowBox";
import InputBox from "@/(components)/(Molecules)/InputBox/InputBox";
import { useEffect, useState } from "react";
import { listaGeneri } from "@/costants/common";
import Button from "@/(components)/(Atoms)/Button/Button";
import SwitchBox from "@/(components)/(Molecules)/SwitchBox/SwitchBox";
import Toast from "@/(components)/(Atoms)/ToastError/ToastError";

export default function Home() {
  const [protagonista, setProtagonista] = useState("");
  const [antagonista, setAntagonista] = useState("");
  const [genere, setGenere] = useState("");
  const [numberWords, setNumberWords] = useState("");
  const [pegi18, setPEgi18] = useState(true);
  const [promptTxtArea, setPromptTxtArea] = useState("");

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    console.log("Loading: ", loading);

    const prompt = `genera un racconto ${genere} per ${
      pegi18 ? "adulti" : "bambini"
    } ${
      numberWords && `di ${numberWords} parole`
    }, con il protagonista chiamato ${protagonista} e l'antagonista chiamato ${antagonista}. ${promptTxtArea}`;

    if (
      protagonista.trim().length > 0 &&
      antagonista.trim().length > 0 &&
      genere.trim().length > 0
    ) {
      try {
        const response = await fetch("/api/generate", {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({ prompt }),
        });
        const data = await response.json();
        if (!data.ok) {
          throw new Error(data.message);
        }

        setResponse(data.message);
      } catch (e) {
        console.log("Errore: ", e);
        setError(true);
        /* setMessageError(e.message);
        console.log(typeof e.message); */
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
            <textarea
              value={promptTxtArea}
              onChange={(e) => setPromptTxtArea(e.target.value)}
              placeholder="Inserisci qui ulteriori info sulla tua storia..."
            ></textarea>
            <div className={styles.btn_container}>
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
              <Button
                label="Azzera"
                onClick={() => {
                  setProtagonista("");
                  setAntagonista("");
                  setNumberWords("");
                  setGenere("");
                  setPromptTxtArea("");
                }}
                disabled={
                  protagonista.trim().length <= 0 &&
                  antagonista.trim().length <= 0 &&
                  genere.trim().length <= 0 &&
                  numberWords.trim().length <= 0 &&
                  promptTxtArea.trim().length <= 0 &&
                  loading
                }
              />
            </div>
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
        {!loading && response && (
          <div className={styles.result}>{response}</div>
        )}

        {error && (
          <Toast
            setAction={setError}
            message={`Errore: qualcosa è andato storto. ${messageError}`}
            type="error"
          />
        )}
      </main>
    </>
  );
}
