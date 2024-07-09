import styles from "./card.module.css";

export function Card({ artist, onClick }) {
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
