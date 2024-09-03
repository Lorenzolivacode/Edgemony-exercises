import React from "react";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}
function Input({ value, onChange, type = "text", placeholder }: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder && `Inserisci nome ${placeholder}`}
    />
  );
}

export default Input;
