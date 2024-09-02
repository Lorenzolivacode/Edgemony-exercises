import style from "./Button.module.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}
function Button({ label, onClick }: ButtonProps) {
  return (
    <button className={style.main} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
