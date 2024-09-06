import { Dispatch, SetStateAction } from "react";
import styles from "./Hamburger.module.scss";

interface HamburgerProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
function Hamburger({ isOpen, setOpen }: HamburgerProps) {
  return (
    <div
      onClick={() => {
        setOpen(!isOpen);
        console.log("ok");
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
