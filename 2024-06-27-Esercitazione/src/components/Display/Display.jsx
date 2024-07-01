import "./display.css";

export function Display(props) {
  const { children, label1, labelOp, label2 } = props;

  /* const calculateResult = () => {
    const num1 = parseFloat(label1); // Converte label1 da stringa a numero
    const num2 = parseFloat(label2); // Converte label2 da stringa a numero

    switch (labelOp) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
    }
  };
  const result = calculateResult();
  console.log(result); */

  return (
    <div className="display">
      <p className="operation">
        <span id="n-1">{label1}</span>
        <span id="n-op">{labelOp}</span>
        <span id="n-2">{label2}</span>
      </p>
      <p id="result">
        {children}
        {/* {label2.lenght > 0 ? result.toFixed(2) : "0"} */}
      </p>
    </div>
  );
}
