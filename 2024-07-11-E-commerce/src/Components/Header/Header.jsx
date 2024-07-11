import styles from "./header.module.css";
import IconCart from "../Icons/IconCart";
import Donut from "./../../assets/img-Simpson/Donut.png";
import HomerProfile from "./../../assets/img-Simpson/img02.png";

export function Header({ counter }) {
  return (
    <header className={styles.header}>
      <img src={Donut} alt="Logo" />
      <h1>D'OHNUT SHOP</h1>
      <div className={styles["cart-container"]}>
        <span>{counter}</span>
        <IconCart />
      </div>
      <img src={HomerProfile} alt="Immagine di profilo" />
    </header>
  );
}
