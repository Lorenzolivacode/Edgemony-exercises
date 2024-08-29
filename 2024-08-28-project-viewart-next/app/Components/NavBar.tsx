"use client";

import Link from "next/link";
import React from "react";
import { labelsEn } from "@/app/data/labels";
import { usePathname } from "next/navigation";

const navItems = [
  {
    id: crypto.randomUUID(),
    path: "/",
    label: `${labelsEn.artworkHomeNav}`,
  },
  {
    id: crypto.randomUUID(),
    path: "/artwork/create",
    label: `${labelsEn.artworkAddNav}`,
  },
];
function NavBar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-8 underline">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              className={
                pathname === item.path
                  ? "font-bold underline shadow-sm bg-cyan-200 p-2 rounded-md"
                  : "no-underline"
              }
              href={item.path}
            >
              {item.label}
            </Link>
          </li>
        ))}

        {/* <li>
                <select
                  name="lenguage"
                  onChange={handleLanguageChange}
                  className="bg-cyan-50 pl-1 border-[1px] border-cyan-950 rounded-[4px]"
                >
                  <option value="en">🇬🇧</option>
                  <option value="it">🇮🇹</option>
                </select>
              </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
