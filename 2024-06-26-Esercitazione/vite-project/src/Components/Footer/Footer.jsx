import "./footer.css";
import { LogoContainer } from "../Header/Header.jsx";

import scoobyVan from "./../../img/Mistey-machine.png";

export function Footer(props) {
  const { brand } = props;

  return (
    <footer>
      <img src={scoobyVan} alt="Scooby van" className="img-van" />
      <LogoContainer brand={brand} />
    </footer>
  );
}
