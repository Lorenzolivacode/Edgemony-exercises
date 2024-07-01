import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = (event) => {
    if (event.target.id === "random") {
      return setCounter(Number.parseInt(Math.random() * 10));
    }

    return event.target.id === "plus"
      ? setCounter(counter + 1)
      : setCounter(counter - 1);
  };

  return (
    <div className="container" onClick={(e) => handleClick(e)}>
      <span className="counter"> {counter} </span>
      <div className="container-count-btn">
        <button disabled={counter === 0} id="minus">
          -
        </button>
        <button disabled={counter === 10} id="plus">
          +
        </button>
      </div>
      <button id="random">Random</button>
    </div>
  );
}

export default App;
