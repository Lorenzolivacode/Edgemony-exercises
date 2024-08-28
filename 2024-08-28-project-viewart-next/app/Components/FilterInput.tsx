"use client";
import React, { useState } from "react";
import { labelsEn } from "./../data/labels";

export function FilterInput() {
  const [filterInput, setFilterInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInput(e.target.value.toLowerCase());
  };
  return (
    <input
      value={filterInput}
      placeholder={labelsEn.artworkInput}
      type="text"
      onChange={handleChange}
      className="border-2 border-cyan-950 rounded p-1"
    />
  );
}

export default FilterInput;
