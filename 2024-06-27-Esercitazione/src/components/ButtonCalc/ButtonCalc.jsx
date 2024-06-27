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

export function ButtonCalc() {
  // console.log(btnContent[0]);

  /* const addClassesBtn = (btn) => {
    if (btn === "=") {
      const resClass = "btn-minus";
    } else {
      const resClass = typeof btn === "number" ? "" : "btn-op";
    }

    return resClass;
  }; */

  return (
    <div className="btn-container">
      {btnContent.map((btn, i) => (
        <Button key={i} className={typeof btn === "number" ? "" : "btn-op"}>
          {btn}
        </Button>
      ))}
    </div>
  );
}
