import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

import { labels } from "./../data/labels";

export function DefaultLayout() {
  return (
    <>
      <header className="h-12 flex justify-between text-cyan-950 items-center p-4 px-24 shadow-xl bg-cyan-100">
        <h1>
          <Link to="/">{labels.artworkTitleNav}</Link>
        </h1>
        <nav>
          <ul className="flex gap-8 underline">
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "font-bold underline shadow-sm"
                    : "no-underline";
                }}
                to="/"
              >
                {labels.artworkHomeNav}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive
                    ? "font-bold underline shadow-sm"
                    : "no-underline";
                }}
                to="AddArtwork"
              >
                {labels.artworkAddNav}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
}

export default DefaultLayout;
