import Button from "@/(components)/(Atoms)/Button/Button";
import style from "./Header.module.scss";
import icon from "./../../../../public/icons-book.png";
import Hamburger from "@/(components)/(Atoms)/Hamburger/Hamburger";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

interface HeaderProps {
  title: string;
  windowBurger: boolean;
  setWindowBurger: Dispatch<SetStateAction<boolean>>;
  setDisabled?: Dispatch<SetStateAction<boolean>>;
}
function Header({
  title,
  windowBurger,
  setWindowBurger,
  setDisabled,
}: HeaderProps) {
  return (
    <header className={style.main}>
      <Image src="/icons-book.png" alt="Icon book" width={60} height={60} />
      <h1>{title}</h1>
      <Hamburger
        isOpen={windowBurger}
        setOpen={setWindowBurger}
        setDisabled={setDisabled}
      />
    </header>
  );
}

export default Header;
