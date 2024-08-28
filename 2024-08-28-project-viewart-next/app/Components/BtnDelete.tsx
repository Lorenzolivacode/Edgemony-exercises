"use client";
import React from "react";
import { classBtn } from "./BtnLink";

interface IbtnDelete {
  onClick?: void;
  txtBtn: string;
}

function BtnDelete({ txtBtn }: IbtnDelete) {
  return (
    <button
      className={classBtn}
      title="Delete item"
      /* onClick={() => handleDelete(artwork.id)} */
    >
      {txtBtn}
    </button>
  );
}

export default BtnDelete;
