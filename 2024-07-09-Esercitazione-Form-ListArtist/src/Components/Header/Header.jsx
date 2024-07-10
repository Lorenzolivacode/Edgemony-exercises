import styles from "./header.module.css";

import LogoLO from "./../../assets/LO_img3.3.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoLO} alt="Logo" />
      <h1>Your favorites artists</h1>
    </header>
  );
}
