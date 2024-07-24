import React from "react";

export function InputFormEl({ onChange, el }) {
  return (
    <div>
      <label className="sr-only">{el}</label>

      <div className="relative">
        <input
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
