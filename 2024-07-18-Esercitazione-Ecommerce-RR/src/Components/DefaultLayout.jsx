import React from "react";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <>
      <header className="h-12 flex justify-between items-center p-4 shadow-xl bg-slate-400">
        <h1>ReactShop App</h1>
        <nav>
          <ul className="flex gap-8 underline">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
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
