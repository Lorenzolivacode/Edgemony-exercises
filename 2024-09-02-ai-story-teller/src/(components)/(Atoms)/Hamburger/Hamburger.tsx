import { Dispatch, SetStateAction } from "react";
import styles from "./Hamburger.module.scss";

interface HamburgerProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setDisabled?: Dispatch<SetStateAction<boolean>>;
}
function Hamburger({ isOpen, setOpen, setDisabled }: HamburgerProps) {
  return (
    <div
      onClick={() => {
        setOpen(!isOpen);
        setDisabled && setDisabled(false);
      }}
      className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
    >
      <div className={styles.bread} />
      <div className={styles.burger} />
      <div className={styles.bread} />
    </div>
  );
}

export default Hamburger;
