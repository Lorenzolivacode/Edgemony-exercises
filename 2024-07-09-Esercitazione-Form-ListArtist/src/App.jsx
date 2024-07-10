import { useState } from "react";
import styles from "./App.module.css";

import { dataList } from "./dataList.js";

import Bg from "./assets/bg.jpg";

import { Layout } from "./Components/LayoutApp/Layout.jsx";
import { Card } from "./Components/Card/Card.jsx";
import { InputForm } from "./Components/Input/Input.jsx";

const listElement = {
  nome: "",
  cognome: "",
  anno: "",
  corrente: "",
  id: self.crypto.randomUUID(),
};

const tmpArrayKeys = Object.keys(listElement);

function App() {
  const [dataArtists, setDataArtists] = useState(dataList);
  const [inputValue, setInputValue] = useState(listElement);

  const [filterFor, setFilterForBtn] = useState("");
  const [filterForInput, setFilterForInput] = useState("");

  const handleDelete = (e) => {
    const filteredData = dataArtists.filter(
      (artist) => artist.id !== e.target.id
    );
    setDataArtists(filteredData);
  };

  const handleChangeFilter = (e) => {
    const value = e.target.value;
    if (value === "") {
      setFilterForBtn(e.target.innerText);
    } else {
      setFilterForInput(value);
    }
  };

  const handleResetFilterBtn = () => {
    setFilterForBtn("");
  };

  const handleResetFilterInput = () => {
    setFilterForInput("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataArtists([...dataArtists, inputValue]);
    setInputValue(listElement);
  };

  return (
    <>
      <Layout>
        <div className={styles.container}>
          <img className={styles.img__bg} src={Bg} alt="Image bg" />
          <div className={`${styles.container__cardList} ${styles.shape}`}>
            <div className={styles.container__cardList__form}>
              <input
                placeholder="Ricerca artista per cognome"
                value={filterForInput}
                type="text"
                onChange={handleChangeFilter}
              />
              <button onClick={handleResetFilterInput}>Svuota</button>
            </div>

            <div className={styles.container__cont_btn}>
              {dataArtists
                .filter(
                  (artist, i, dataA) =>
                    i === dataA.findIndex((a) => a.corrente === artist.corrente)
                )
                .map((artist) => (
                  <button
                    onClick={handleChangeFilter}
                    className={styles.cont_btn__btn}
                    key={artist.id}
                  >
                    {artist.corrente}
                  </button>
                ))}
              <button
                onClick={handleResetFilterBtn}
                className={styles.cont_btn__btn}
              >
                Tutti
              </button>
            </div>

            <div className={styles.container__cont_card}>
              {dataArtists
                .filter((artist) =>
                  artist.cognome
                    .toLowerCase()
                    .includes(filterForInput.toLowerCase())
                )
                .filter((artist) => artist.corrente.includes(filterFor))
                .map((artist) => (
                  <Card
                    key={artist.id}
                    artist={artist}
                    onClick={handleDelete}
                  />
                ))}
            </div>
          </div>
          <form
            className={`${styles.container__form} ${styles.shape}`}
            onSubmit={handleSubmit}
          >
            <h2>Inserisci un nuovo artista</h2>
            {tmpArrayKeys.map((keyEl) => {
              return keyEl === "id" ? null : (
                <InputForm
                  key={tmpArrayKeys.indexOf(keyEl)}
                  placeholder={`${keyEl} artista`}
                  name={keyEl}
                  value={inputValue.keyEl}
                  onChange={handleChange}
                />
              );
            })}
            <button type="submit">Inserisci</button>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default App;
