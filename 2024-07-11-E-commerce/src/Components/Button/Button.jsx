import React from "react";
import styles from "./button.module.css";
import classNames from "classnames";

export function Button({ children, text = "Add to cart" }) {
  return (
    <button className={classNames(styles.button)}>
      {children}
      {text}
    </button>
  );
}
