import { useState } from "react";
import styles from "./App.module.css";
import Homer from "./assets/homer-simpson-doh-512x512.png";
import Donut from "./assets/Donut.png";
import TitleToDo from "./assets/ToDo-list-h1.png";

const listInitial = [
  { id: 1, text: "Comprare birrozza Duff" },
  { id: 2, text: "Strangolare Bart..D'oh" },
];

function App() {
  const [listTodos, setListTodos] = useState(listInitial);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    setListTodos([
      ...listTodos,
      { id: self.crypto.randomUUID(), text: inputValue },
    ]);
    setInputValue("");
  };

  const handleDelete = (e) => {
    const listFiltered = listTodos.filter((todo) => todo.id !== e.target.id);
    setListTodos(listFiltered);
  };

  return (
    <div className={styles.container}>
      <h1>
        To do list
        <img src={TitleToDo} alt="Title" />
      </h1>
      <img src={Homer} alt="Homer" className={styles.homer} />
      <form className={styles.form}>
        <input
          value={inputValue}
          type="text"
          placeholder="To D'oh element"
          onChange={handleChange}
        />
        <input
          type="submit"
          id={styles.sub_btn}
          onClick={handleSubmit}
          value={"Aggiungi To D'oh"}
        />
      </form>
      <ul className={styles.container__list}>
        {listTodos.map((todo) => {
          return (
            <li key={todo.id} className={styles.container__list__item}>
              <span>
                <img src={Donut} alt="Donut" className={styles.donut} />
                {todo.text}
              </span>
              <button
                id={todo.id}
                className={styles.container__list__item_btn}
                onClick={handleDelete}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
