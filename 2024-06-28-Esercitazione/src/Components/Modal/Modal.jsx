import "./modal.css";

import scooby from "./../../assets/Scooby.png";
import scoobyTxt from "./../../assets/Scooby_doo_logo.png";

export function Modal() {
  return (
    <div className="modal">
      <img src={scooby} alt="" id="img-scooby" />
      <img src={scoobyTxt} alt="" id="img-txt" />
    </div>
  );
}
