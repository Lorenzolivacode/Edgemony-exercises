"use client";
import React, { useState } from "react";
import { labelsEn } from "./../data/labels";
import { IArtwork } from "../page";
import TableItem from "./TableItem";

export function FilterInput({ artworkList }: { artworkList: IArtwork[] }) {
  const [filterInput, setFilterInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterInput(e.target.value.toLowerCase());
  };
  return (
    <div className="flex flex-col">
      <div className="p-4 flex justify-between">
        <h1 className="">{labelsEn.artworkList}</h1>
        <input
          value={filterInput}
          placeholder={labelsEn.artworkInput}
          type="text"
          onChange={handleChange}
          className="border-2 border-cyan-950 rounded p-1"
        />
      </div>
      {filterInput.length > 0 && (
        <tbody className="divide-y divide-gray-200 mb-16">
          {artworkList
            .filter((artwork) => {
              return (
                artwork.title.toLowerCase().includes(filterInput) ||
                artwork.author.toLowerCase().includes(filterInput)
              );
            })
            .map((artwork) => (
              <TableItem key={artwork.id} artwork={artwork} />
            ))}
        </tbody>
      )}
    </div>
  );
}

export default FilterInput;
