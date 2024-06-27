import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Display } from "./components/Display/Display.jsx";
import { Button } from "./components/Button/Button.jsx";
import { ButtonCalc } from "./components/ButtonCalc/ButtonCalc.jsx";

function App() {
  const [textInsert, setTextInsert] = useState("0");

  const handleButtonClick = (event) => {
    const clickedElement = event.target;
    if (clickedElement.tagName === "BUTTON") {
      console.log("Button clicked:", clickedElement.textContent);

      setTextInsert(clickedElement.textContent);
    }
  };

  /* const controlBtnClick = () =>{
    if (classList.include(btn-minus)) {
      //Scrivi in id result risultato di n-1 (/*+-) n-2
    }

    if (!classList.include(btn-op || btn-minus)){
      if (!n-op = ''){
        //scrivi in n-1 children
      }
      //scrivi in n-2 children
    }

    if ( classList.include(btn-op) ){
      //scrivi in n-op children
    }
  } */ //Avevo abbozzato alcune logiche (scritte molto male) per poter far funzionare la calcolatrice

  return (
    <>
      <div className="calc">
        <Display>{textInsert}</Display>
        <ButtonCalc onClick={handleButtonClick} />
      </div>
    </>
  );
}

export default App;
