import { useState } from "react";
import styles from "./App.module.css";
import { Input } from "./Components/Input.jsx";

import stylesInput from "./Components/input.module.css";

import Calculator from "./assets/icon-calculator.svg";

function App() {
  const [data, setData] = useState({
    total: "",
    years: "",
    percentage: "",
    /* type: "", */
  });

  const [monthly, setMonthly] = useState("");
  const [totalRepay, setTotalRepay] = useState("");

  const operationPercentage = () => {
    const perc = data.percentage / 100;
    console.log("perc", perc);

    const totalPerc = data.total * perc;
    return totalPerc;
  };

  const operationAnnual = () => {
    const totalPerc = operationPercentage();
    console.log("data total", data.total);
    console.log("total", (data.total + totalPerc) / data.years);

    return (data.total + totalPerc) / data.years;
  };

  const handleChangeData = (e) => {
    if (e.target.tagName === "INPUT") {
      const name = e.target.name;
      const value = e.target.value;

      setData((prevState) => ({ ...prevState, [name]: value }));

      /* console.log(data); */
    }
  };

  const handleClick = () => {
    setMonthly(operationAnnual() / 12);
    console.log("mese", monthly);

    setTotalRepay(operationPercentage());
  };
  return (
    <>
      <div
        id="pippo"
        onChange={(e) => handleChangeData(e)}
        className={styles.container}
      >
        <div className={styles.container_data}>
          <Input
            className={stylesInput.input_container}
            name="total"
            placeholder="Totale mutuo"
          >
            €
          </Input>
          <div className={styles.mortgage_specific}>
            <Input
              className={`${stylesInput.input_container} ${stylesInput.input_reverse}`}
              name="years"
              placeholder="Durata"
            >
              year
            </Input>
            <Input
              className={`${stylesInput.input_container} ${stylesInput.input_reverse}`}
              name="percentage"
              placeholder="Tasso"
            >
              %
            </Input>
          </div>

          <div className={stylesInput.radio_container}>
            <input name="type" type="radio" />
            <span className={styles.radio_txt}>Spese</span>
          </div>

          <div className={stylesInput.radio_container}>
            <input name="type" type="radio" />
            <span className={styles.radio_txt}>Interessi</span>
          </div>

          <button onClick={handleClick}>
            <img src={Calculator} alt="Icona" />
            Calcola spese
          </button>
        </div>

        <div className={styles.show}>
          <div className={styles.results_container}>
            <h2>I tuoi risultati</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
              minima suscipit vitae quas ipsa, ratione nesciunt? Fugiat
              dignissimos pariatur quo.
            </p>
            <div className={styles.results}>
              <span className={styles.title}>Spese mensili</span>
              <span className={styles.results__monthly}>{monthly}</span>
              <span className={styles.title}>{totalRepay}</span>
              <span className={styles.results__total}>Spese totali</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
