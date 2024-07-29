import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

import {
  SetLanguageContext,
  LanguageObjUsedContext,
} from "../Provider/LanguageContext";

import logo from "./../assets/VA.png";

export function DefaultLayout() {
  const setLanguage = useContext(SetLanguageContext);
  const languageObjUsed = useContext(LanguageObjUsedContext);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    /* console.log("changed"); */
  };

  /* useEffect(() => {
    console.log(languageObjUsed);
  }, [languageObjUsed]); */
  return (
    <>
      <header className="h-12 flex justify-between text-cyan-950 items-center p-4 px-24 shadow-xl bg-cyan-100">
        <h1 className="flex gap-2 items-center">
          <img src={logo} alt="icon ViewArt" className="h-[25px]" />
          <Link to="/">{languageObjUsed.artworkTitleNav}</Link>
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
                {languageObjUsed.artworkHomeNav}
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
                {languageObjUsed.artworkAddNav}
              </NavLink>
            </li>
            <li>
              <select
                name="lenguage"
                onChange={handleLanguageChange}
                className="bg-cyan-50 pl-1 border-[1px] border-cyan-950 rounded-[4px]"
              >
                <option value="en">🇬🇧</option>
                <option value="it">🇮🇹</option>
              </select>
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
