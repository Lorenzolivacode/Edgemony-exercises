"use client";
import React, { ChangeEvent } from "react";

interface IInputFormEl {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  el: string;
  value: string;
}
function InputFormEl({ onChange, el, value }: IInputFormEl) {
  return (
    <div>
      <label className="sr-only">{el}</label>

      <div className="relative">
        <input
          value={value}
          name={el}
          onChange={onChange}
          type="text"
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          placeholder={`Enter ${el}`}
        />
      </div>
    </div>
  );
}

export default InputFormEl;
