import style from "./WindowBox.module.scss";

interface WindowBoxProps {
  title?: string;
}

function WindowBox({ title }: WindowBoxProps) {
  return <div className={style.main}>{title && <h2>{title}</h2>}</div>;
}

export default WindowBox;
