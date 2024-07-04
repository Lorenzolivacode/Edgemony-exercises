import styles from "./input.module.css";

export function Input(props) {
  const { children, className, ...attrs } = props;

  /* const classes = {`${styles.input_container} ${className || ""}`}; */
  return (
    <div className={className}>
      <div className={styles.input__mark}>{children}</div>
      <input type="text" {...attrs} />
    </div>
  );
}
