import styles from "./header.module.css";
import IconCart from "../Icons/IconCart";

export function Header({ counter }) {
  return (
    <header className={styles.header}>
      <img src="" alt="Logo" />
      <h1>Your shop</h1>
      <div className={styles["cart-container"]}>
        <span>{counter}</span>
        <IconCart />
      </div>
    </header>
  );
}
