import style from "./Button.module.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}
function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button disabled={disabled} className={style.main} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
