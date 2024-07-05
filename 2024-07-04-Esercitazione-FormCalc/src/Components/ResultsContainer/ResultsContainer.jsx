import styles from "./resultsContainer.module.css";

export function ResultsContainer(...props) {
  const [monthly, totalExpenses] = props;
  return (
    <div className={styles.results_container}>
      <h2>I tuoi risultati</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa minima
        suscipit vitae quas ipsa, ratione nesciunt? Fugiat dignissimos pariatur
        quo.
      </p>
      <div className={styles.results}>
        <span className={styles.title}>Spese mensili</span>
        <span className={styles.results__monthly}>{monthly}</span>
        <span className={styles.title}>Spese totali</span>
        <span className={styles.results__total}>{totalExpenses}</span>
      </div>
    </div>
  );
}
