import styles from "./productDescriptionBox.module.css";
import { useState } from "react";
import { Button } from "../Button/Button.jsx";
import IconCart from "./../Icons/IconCart.jsx";

export function ProductDescriptionBox({ price, discount, counter }) {
  const discuontedPrice = price - (price * discount) / 100;
  const priceMultiplier = discuontedPrice * counter;
  /*   const [counter, setCounter] = useState(0);

  const handleClickCounter = (e) => {
    const id = e.target.id;
    if (id === "minus" && counter > 0) {
      setCounter(counter - 1);
    } else if (id === "plus") {
      setCounter(counter + 1);
    }
  }; */

  return (
    <div className={styles["product-description-box"]}>
      <span className={styles.company}>THE D'OHNUT</span>
      <h1>Product Description</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis
        vel neque lobortis auctor. Sed in tristique dolor. Donec vel dolor ac
        neque consectetur gravida.
      </p>
      <div className={styles["discount-container"]}>
        <span className={styles["discount-price"]}> ${priceMultiplier}</span>
        <span className={styles["discount-perc"]}>{`${discount}%`}</span>
      </div>
      <span className={styles["starting-price"]}>${price}</span>
      <div className={styles["counter-container"]}>
        <div className={styles.counter}>
          <button id="minus" className={styles["click-counter"]}>
            -
          </button>
          <span>{counter}</span>
          <button id="plus" className={styles["click-counter"]}>
            +
          </button>
        </div>
        <Button>
          <IconCart fill="#000" />
        </Button>
      </div>
    </div>
  );
}
