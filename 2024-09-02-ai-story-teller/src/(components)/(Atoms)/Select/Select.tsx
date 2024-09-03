import { ListOption } from "@/types/common";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface SelectProps {
  list: ListOption[];
  setAction: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
function Select({ list, setAction }: SelectProps) {
  /* const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAction(e.target.value);
  }; */

  return (
    <select onChange={setAction}>
      <option value="" hidden>
        Seleziona
      </option>
      {list.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
