import { Children } from "react";
import style from "./WindowBox.module.scss";

interface WindowBoxProps {
  title?: string;
  children?: React.ReactNode;
}

function WindowBox({ title, children }: WindowBoxProps) {
  return (
    <div className={style.main}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

export default WindowBox;
