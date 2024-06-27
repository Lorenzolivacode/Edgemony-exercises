import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Display } from "./components/Display/Display.jsx";
import { Button } from "./components/Button/Button.jsx";
import { ButtonCalc } from "./components/ButtonCalc/ButtonCalc.jsx";

function App() {
  const [count, setCount] = useState(0);

  /* const controlBtnClick = () =>{
    if (id === (n-1 || n-2)){
      if (!n-op = ''){
        //scrivi in n-1 children
      }
      //scrivi in n-2 children
    }

    if (id === n-op & ){
      //scrivi in n-op children
    }
  } */

  return (
    <>
      <div className="calc">
        {/* <Button>1</Button> */}
        <Display />
        <ButtonCalc />
      </div>
    </>
  );
}

export default App;
