import Input from "@/(components)/(Atoms)/Input/Input";
import React, { Dispatch, SetStateAction } from "react";
import style from "./inputBox.module.scss";
import { ListOption } from "@/types/common";
import Select from "@/(components)/(Atoms)/Select/Select";

interface InputBoxProps {
  label: string;
  value?: string;
  valActive?: boolean;
  setValue: Dispatch<SetStateAction<string>>;
  type?: string;
  placeholder?: string;
  list?: ListOption[];
}
function InputBox({
  label,
  value,
  valActive,
  setValue,
  type = "text",
  placeholder,
  list,
}: InputBoxProps) {
  return (
    <div className={style.main}>
      <h3>{label}</h3>
      {!list ? (
        <Input
          type={type}
          value={value ? value : ""}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <Select list={list} setAction={(e) => setValue(e.target.value)} />
      )}
    </div>
  );
}

export default InputBox;
