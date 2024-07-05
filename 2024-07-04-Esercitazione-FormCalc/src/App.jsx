import { useState } from "react";
import styles from "./App.module.css";
import { Input } from "./Components/Input.jsx";

import stylesInput from "./Components/input.module.css";

import Calculator from "./assets/icon-calculator.svg";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const dataObject = {
    total: "",
    years: "",
    percentage: "",
    type: selectedOption,
  };

  const [data, setData] = useState(dataObject);

  const [monthly, setMonthly] = useState("");
  const [totalExpenses, setTotalExpenses] = useState("");

  /**
   * Trovare la % totale delle spese
   * @param {number} total
   * @param {number} percentage
   * @returns number
   */
  const operationPercentage = (total, percentage) => {
    const perc = percentage / 100;
    const totalPerc = total * perc;
    return totalPerc;
  };

  const operationAnnual = (total, totalPerc, years) => {
    return (total + totalPerc) / years;
  };

  const handleChangeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeRadio = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  const handleClick = () => {
    const years = Number(data.years);
    const total = Number(data.total);
    const totalPerc = operationPercentage(data.total, data.percentage);

    if (data.type === "expenses") {
      setTotalExpenses(total + totalPerc);

      const annualExpenses = operationAnnual(total, totalPerc, years);
      setMonthly((annualExpenses / 12).toFixed(2));
    } else if (data.type === "interest") {
      setTotalExpenses(totalPerc);
      setMonthly((totalPerc / (years * 12)).toFixed(2));
    }
  };

  const clear = () => {
    setData(dataObject);
  };

  return (
    <>
      <div onChange={(e) => handleChangeData(e)} className={styles.container}>
        <div className={styles.container_data}>
          <header>
            <h1>Calcolatore mutuo</h1>
            <button className={styles.clear} onClick={clear}>
              Azzera
            </button>
          </header>
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
            <label>
              <input
                value={"expenses"}
                id="expenses"
                name="type"
                type="radio"
                onChange={(e) => handleChangeRadio(e)}
              />
              Spese
            </label>
            <label>
              <input
                value={"interest"}
                id="interest"
                name="type"
                type="radio"
                onChange={(e) => handleChangeRadio(e)}
              />
              Interessi
            </label>
          </div>

          <button className={styles.btn_calculate} onClick={handleClick}>
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
              <span className={styles.title}>Spese totali</span>
              <span className={styles.results__total}>{totalExpenses}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
