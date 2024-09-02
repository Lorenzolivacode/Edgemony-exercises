import Button from "@/(components)/(Atoms)/Button/Button";
import style from "./Header.module.scss";

interface HeaderProps {
  title: string;
}
function Header({ title }: HeaderProps) {
  return (
    <header className={style.main}>
      <h1>{title}</h1>
      <Button label="Login" />
    </header>
  );
}

export default Header;
