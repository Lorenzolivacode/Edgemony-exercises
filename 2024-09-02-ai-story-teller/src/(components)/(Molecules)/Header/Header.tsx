import Button from "@/(components)/(Atoms)/Button/Button";
import style from "./Header.module.scss";
import icon from "./../../../../public/icons-book.png";

interface HeaderProps {
  title: string;
}
function Header({ title }: HeaderProps) {
  return (
    <header className={style.main}>
      <img src="/icons-book.png" alt="Icon book" />
      <h1>{title}</h1>
      <Button label="Login" />
    </header>
  );
}

export default Header;
