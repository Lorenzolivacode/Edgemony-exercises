"use client";
import Link from "next/link";
import React from "react";

interface IBtnLink {
  artworkPath: string;
  txtBtn: string;
}

export const classBtn: string =
  "inline-block rounded bg-cyan-600 px-4 py-2 text-xs font-medium text-white hover:bg-cyan-700";
function BtnLink({ artworkPath, txtBtn }: IBtnLink) {
  return (
    <Link
      href={artworkPath}
      className={classBtn}
      /* title="View details's page" */
    >
      {txtBtn}
    </Link>
  );
}

export default BtnLink;
