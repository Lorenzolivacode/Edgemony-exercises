import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Header } from "./Components/Header.jsx";
import { ContainerMain } from "./Components/Main.jsx";
import { Footer } from "./Components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <ContainerMain />
      <Footer />
    </>
  );
}

export default App;
