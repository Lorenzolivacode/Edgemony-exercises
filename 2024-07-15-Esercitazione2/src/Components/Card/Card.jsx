import { useEffect, useState } from "react";

import styles from "./card.module.css";
import { adviceList } from "../AdviceList";

import divider from "./../../assets/pattern-divider-desktop.svg";
import dice from "./../../assets/icon-dice.svg";

export function Card() {
  const randomNumber = Math.floor(Math.random() * 100);
  const [randomIndex, setRandomIndex] = useState(randomNumber);
  const [adviceListAPI, setAdviceListAPI] = useState({});

  const getNumber = () => {
    setRandomIndex(Math.floor(Math.random() * 100));

    return randomIndex;
  };

  const handleAdviceListAPI = async () => {
    try {
      const response = await fetch(
        `https://api.adviceslip.com/advice/${randomIndex}`
      );
      /* ${randomIndex} */
      const data = await response.json();

      setAdviceListAPI(data.slip);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAdviceListAPI();
    /* console.log(randomIndex);
    console.log(adviceListAPI.advice); */
  }, [randomIndex]);

  return (
    <div className={styles.card}>
      <h1>ADVICE #{randomIndex}</h1>
      <p className={styles.advice}>{adviceListAPI.advice}</p>
      <img className={styles.divider} src={divider} alt="Divisore" />
      <button onClick={getNumber} className={styles.button}>
        <img className={styles.dice} src={dice} alt="icona new advice" />
      </button>
    </div>
  );
}
