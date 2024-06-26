import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Header } from "./Components/Header/Header.jsx";
import { Main } from "./Components/Main/Main.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header brand={{ name: "Scooby" }} className="header" />
      <Main />
      <Footer brand={{ name: "ScoobyDoohoho" }} />
    </>
  );
}

export default App;
