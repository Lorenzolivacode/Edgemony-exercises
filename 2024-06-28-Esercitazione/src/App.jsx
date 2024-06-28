import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Button } from "./Components/Button/Button";
import { Modal } from "./Components/Modal/Modal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setModalOpen(!isModalOpen)} />
      {isModalOpen && <Modal />} //l'operatore && (AND logico) valuta
      //l'espressione a sinistra e, se quella è vera, valuta e restituisce
      //l'espressione a destra.
    </>
  );
}

export default App;
