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
  const [aiDisabled, setAiDisabled] = useState(false);

  const [isPlayng, setIsPlayng] = useState(false);

  const [windowBurger, setWindowBurger] = useState(false);

  const [responsePrompt, setResponsePrompt] = useState<string[]>([]);

  const prompt = `Genera un racconto ${genere} per ${
    pegi18 ? "adulti" : "bambini"
  } ${
    numberWords && `di ${numberWords} parole`
  }, con il protagonista chiamato ${protagonista} e l'antagonista chiamato ${antagonista}. ${promptTxtArea}`;

  const handleGenerate = async () => {
    setLoading(true);
    console.log("Loading: ", loading);

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
        if (e instanceof Error) {
          setMessageError(e.message);
          console.log(typeof e.message);
        } // Ora TypeScript sa che e.message è una stringa
      }
    }

    setLoading(false);
    /* console.log("Loading: ", loading); */
  };

  useEffect(() => {
    if (messageError.includes("Key mancante")) {
      setAiDisabled(true);
      setTimeout(() => {
        setWindowBurger(true);
      }, 5000);
    }
  }, [messageError]);

  useEffect(() => {
    response.trim().length > 0 &&
      setResponsePrompt((prev) => [...prev, response]);
    /* console.log("Response: ", response);
    console.log("Response array: ", responsePrompt); */
  }, [response]);

  const handleVoice = () => {
    const utterance = new SpeechSynthesisUtterance(response);
    utterance.lang = "it-IT";
    setIsPlayng(true);
    speechSynthesis.speak(utterance);

    utterance.pitch = 1; //speed?

    utterance.onend = () => {
      setIsPlayng(false);
    };
  };

  const handleStopVoice = () => {
    speechSynthesis.cancel();
    setIsPlayng(false);
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
        <Header
          windowBurger={windowBurger}
          setWindowBurger={setWindowBurger}
          setDisabled={setAiDisabled}
          title="AI story teller"
        ></Header>
        <WindowBox title="Scrivi la tua storia">
          <div
            className={`${styles.windowMask} ${
              windowBurger ? styles.active : ""
            }`}
            /* onClick={() => setWindowBurger(false)} */
          >
            {windowBurger && (
              <aside
                className={`${styles.windowBurger} ${
                  windowBurger ? styles.activeB : ""
                }`}
              >
                <div className={styles.promptContainer}>
                  <h3>Il tuo prompt è:</h3>

                  {protagonista.trim().length > 0 &&
                  antagonista.trim().length > 0 &&
                  genere.trim().length > 0 ? (
                    <p>{prompt}</p>
                  ) : (
                    <Button
                      label="Crea una storia"
                      onClick={() => {
                        setWindowBurger(false);
                        setAiDisabled(false);
                      }}
                    />
                  )}
                </div>

                {aiDisabled && <h4>⚠️ L'Ai potrebbe essere disabilitata</h4>}

                {responsePrompt.length > 0 && (
                  <section className={styles.containerCarousel}>
                    <h3>Le tue storie in questa sessione</h3>
                    <ul className={styles.carousel}>
                      {responsePrompt.map((text, index) => (
                        <li key={index}>{text}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </aside>
            )}
          </div>

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
          <>
            <div className={styles.result}>
              <div className={styles.btn_play_container}>
                <Button label="▶️" onClick={handleVoice} disabled={isPlayng} />
                <Button
                  label="⏹️"
                  onClick={handleStopVoice}
                  disabled={!isPlayng}
                />
              </div>
              <p>{response}</p>
            </div>
          </>
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
