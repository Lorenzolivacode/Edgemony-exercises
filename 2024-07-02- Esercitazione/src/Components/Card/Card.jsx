import { useEffect, useState } from "react";

import styles from "./card.module.css";
import { adviceList } from "../AdviceList";

import divider from "./../../assets/pattern-divider-desktop.svg";
import dice from "./../../assets/icon-dice.svg";

export function Card() {
  const [randomIndex, setRandomIndex] = useState(0);

  const getNumber = () => {
    setRandomIndex(Math.floor(Math.random() * adviceList.length));
    return randomIndex;
  };

  return (
    <div className={styles.card}>
      <h1>ADVICE #{randomIndex + 1}</h1>
      <p className={styles.advice}>{adviceList[randomIndex]}</p>
      <img className={styles.divider} src={divider} alt="Divisore" />
      <button onClick={getNumber} className={styles.button}>
        <img className={styles.dice} src={dice} alt="icona new advice" />
      </button>
    </div>
  );
}
