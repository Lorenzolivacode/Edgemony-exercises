import styles from "./card.module.css";
//import { dataList } from "./../../dataList";

export function Card({ artist, onClick }) {
  //const artist = dataList.dataList;
  //console.log(dataList);
  //const [nome, cognome, anno, corrente, id] = dataList;
  //const dataList1 = dataList.dataList;
  //console.log(dataList1);
  return (
    <div className={styles.container__card}>
      <h3>
        {artist.nome} {artist.cognome}
      </h3>
      <span>Anno di nascita: {artist.anno}</span>
      <span>Corrente artistica: {artist.corrente}</span>
      <button
        id={artist.id}
        className={styles.container__card_delete}
        onClick={onClick}
      >
        X
      </button>
    </div>
  );
}
