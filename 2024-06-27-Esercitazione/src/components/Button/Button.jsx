import "./button.css";

export function Button(props) {
  const { children, className } = props;

  const classes = "btn " + (className || "");

  return <button className={classes}>{children}</button>;
}
