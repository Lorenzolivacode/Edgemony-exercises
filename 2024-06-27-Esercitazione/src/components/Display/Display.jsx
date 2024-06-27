import "./display.css";

export function Display(props) {
  return (
    <div className="display">
      <p className="operation">
        <span id="n-1">25</span>
        <span id="n-op">*</span>
        <span id="n-2">4</span>
      </p>
      <p className="result">100</p>
    </div>
  );
}
