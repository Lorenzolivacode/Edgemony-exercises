import "./button-calc.css";
import { Button } from "../Button/Button.jsx";

/* const numberArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, "C", 0, "."];
const operatorRow = ["AC", "+/-", "%"];
const operatorColumn = ["/", "X", "+", "-"]; */

const btnContent = [
  "AC",
  "+/-",
  "%",
  "/",
  7,
  8,
  9,
  "X",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  "C",
  0,
  ".",
  "=",
];

export function ButtonCalc(props) {
  // console.log(btnContent[0]);
  const { onClick } = props;

  const addClassesBtn = (btn) => {
    let resClass = "";
    if (btn === "=") {
      resClass = "btn-minus";
    } else {
      resClass = typeof btn === "number" ? "" : "btn-op";
    }

    return resClass;
  };

  /* const handleButtonClick = (event) => {
    const clickedElement = event.target;
    if (clickedElement.tagName === "BUTTON") {
      console.log("Button clicked:", clickedElement.textContent);
      // Aggiungi qui la logica per gestire il click sul bottone
    }
  }; */

  return (
    <div className="btn-container" onClick={onClick}>
      {btnContent.map((btn, i) => (
        <Button key={i} className={addClassesBtn(btn)}>
          {btn}
        </Button>
      ))}
    </div>
  );
}
