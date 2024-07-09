import { useState } from "react";
import styles from "./App.module.css";

import { dataList } from "./dataList.js";

import Bg from "./assets/bg.jpg";

import { Card } from "./Components/Card/Card.jsx";

const listElement = {
  nome: "",
  cognome: "",
  anno: "",
  corrente: "",
  id: self.crypto.randomUUID(),
};

function App() {
  const [dataArtists, setDataArtists] = useState(dataList);

  const handleDelete = (e) => {
    const filteredData = dataArtists.filter(
      (artist) => artist.id !== e.target.id
    );
    setDataArtists(filteredData);
  };
  return (
    <>
      <h1>Your favourite artists</h1>
      <div className={styles.container}>
        <img className={styles.img__bg} src={Bg} alt="Image bg" />
        <div className={`${styles.container__cardList} ${styles.shape}`}>
          <form className={styles.container__cardList__form}>
            <input type="text" />
          </form>

          <div className={styles.container__cont_btn}>
            {dataArtists.map((artist) => (
              <button className={styles.cont_btn__btn} key={artist.id}>
                {artist.corrente}
              </button>
            ))}
          </div>

          <div className={styles.container__cont_card}>
            {dataArtists.map((artist) => (
              <Card key={artist.id} artist={artist} onClick={handleDelete} />
            ))}
          </div>
        </div>
        <form className={`${styles.container__form} ${styles.shape}`}>
          <input type="text" placeholder="Nome artista" name="nome" />
          <input type="text" placeholder="Cognome artista" name="cognome" />
          <input type="text" placeholder="Anno di nascita" name="anno" />
          <input type="text" placeholder="Corrente artistica" name="corrente" />
          <button type="submit">Inserisci</button>
        </form>
      </div>
    </>
  );
}

export default App;
