import Switch from "@/(components)/(Atoms)/Switch/Switch";
import React, { Dispatch, SetStateAction } from "react";
import style from "./SwitchBox.module.scss";
import { ListOption } from "@/types/common";

interface InputBoxProps {
  label: string;
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  type?: string;
  placeholder?: string;
  list?: ListOption[];
}
function InputBox({ label, value, setValue }: InputBoxProps) {
  return (
    <div className={style.main}>
      <h3>{label}</h3>
      <Switch active={value} setActive={setValue} />
    </div>
  );
}

export default InputBox;
