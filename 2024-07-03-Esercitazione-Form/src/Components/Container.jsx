import { useState } from "react";
import styles from "./container.module.css";

export function Container() {
  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChangeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Contattaci</h1>
        <div className={styles.container__name}>
          <input
            onChange={(e) => handleChangeData(e)}
            type="text"
            name="name"
            placeholder="Nome"
          />
          <input
            onChange={(e) => handleChangeData(e)}
            type="text"
            name="surname"
            placeholder="Cognome"
          />
        </div>
        {/* Name end */}
        <input
          onChange={(e) => handleChangeData(e)}
          type="email"
          name="email"
          placeholder="Indirizzo mail"
        />

        <div className={styles.container__query_type}>
          <span className={styles.specific}>Tipologia di richiesta</span>

          <div className={styles.container__radio}>
            <div className={styles.container__radio__type}>
              <label>Richiesta generica</label>
              <input type="radio" name="query-type" />
            </div>

            <div className={styles.container__radio__type}>
              <input type="radio" name="query-type" />
              <label>Richiesta di supporto</label>
            </div>
          </div>
          {/* Container__radio end */}
        </div>
        {/* Query-type end */}

        <textarea
          onChange={(e) => handleChangeData(e)}
          name="message"
          placeholder="Messaggio"
        ></textarea>
        <div className={styles.container__checkbox}>
          <input type="checkbox" name="" id="" />
          <label className={styles.specific}>
            Accetto di essere contattato
          </label>
        </div>
        <input type="submit" value="Invia" />
      </form>

      <div className={(styles.recap, styles.form)}>
        <h2>Riepilogo</h2>

        <div className={styles.container__recap}>
          <div className={styles.container__name}>
            <span>{input.name || "Nome"}</span>
            <span>{input.surname || "Cognome"}</span>
          </div>
          <div>{input.email || "E-mail"}</div>
          <p>{input.message || "Messaggio"}</p>
        </div>
      </div>
    </div>
  );
}
