import { useState } from "react";
import "./App.css";

import { Display } from "./components/Display/Display.jsx";
import { ButtonCalc } from "./components/ButtonCalc/ButtonCalc.jsx";

const calculateResult = (label1, label2, labelOp) => {
  const num1 = parseFloat(label1); // Converte label1 da stringa a numero
  const num2 = parseFloat(label2); // Converte label2 da stringa a numero

  switch (labelOp) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "X":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "√":
      return Math.pow(num1, 1 / num2);
    case "^":
      return Math.pow(num1, num2);
    case "%":
      return num1 * (num2 / 100);
  }
};

function App() {
  const [txtResult, setTxtResult] = useState("");
  const [label1Insert, setLabel1Insert] = useState("");
  const [labelOpInsert, setLabelOpInsert] = useState("");
  const [label2Insert, setLabel2Insert] = useState("");

  const handleButtonClick = (event) => {
    const clickedElement = event.target;

    if (clickedElement.tagName === "BUTTON") {
      const clickTxt = clickedElement.textContent;
      const clickElClass = clickedElement.classList;

      if (clickElClass.contains("btn-cancel")) {
        setLabel1Insert("");
        setLabelOpInsert("");
        setLabel2Insert("");
        setTxtResult("");
      }

      if (clickElClass.contains("btn-equal")) {
        let result = calculateResult(label1Insert, label2Insert, labelOpInsert);
        const numberIntegerLength = String(Number.parseInt(result)).length;

        /* console.log("Res:", result);
        console.log("is integer:", Number.isInteger(result));
        console.log("lunghezza intero", String(Number.parseInt(result)).length);
        console.log("Lunghezza numero", String(result).length); */

        if (String(result).length > 9) {
          result =
            Number.isInteger(result) ||
            String(result).includes("e") ||
            numberIntegerLength > 8
              ? "E+"
              : result.toFixed(8 - numberIntegerLength);

          /* if (Number.isInteger(result) || String(result).includes("e")) {
            console.log("enter");
            result = "E+";
          } else {
            result.toFixed(8 - numberIntegerLength);
          } */
        }
        setTxtResult(result);
      }

      if (
        !clickElClass.contains("btn-op") &&
        !clickElClass.contains("btn-equal") &&
        !clickElClass.contains("btn-cancel")
      ) {
        if (labelOpInsert.length === 0) {
          if (clickTxt === ".") {
            if (label1Insert.includes(".")) {
              return;
            }
          }
          setLabel1Insert(label1Insert + clickTxt);
        } else {
          if (clickTxt === ".") {
            if (label2Insert.includes(".")) {
              return;
            }
          }
          setLabel2Insert(label2Insert + clickTxt);
        }
      } else if (clickElClass.contains("btn-op")) {
        if (txtResult.length === 0) {
          setLabelOpInsert(clickTxt);
        } else {
          setLabel1Insert(txtResult);
          setLabel2Insert("");
          setLabelOpInsert(clickTxt);
        }
      }
    }
  };

  return (
    <>
      <div className="calc">
        <Display
          label1={label1Insert === "" ? "" : Number(label1Insert)}
          labelOp={labelOpInsert}
          label2={label2Insert}
        >
          {txtResult}
        </Display>
        <ButtonCalc onClick={handleButtonClick} />
      </div>
    </>
  );
}

export default App;
