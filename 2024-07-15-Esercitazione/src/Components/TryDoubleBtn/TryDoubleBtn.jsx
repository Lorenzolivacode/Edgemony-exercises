import React from "react";
import { useState, useEffect } from "react";

import Btn from "../Btn/Btn";

function TryDoubleBtn() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [countShow, setCountShow] = useState(0);

  const handleChange1 = () => {
    setCount1((prevCount) => prevCount + 1);
  };
  const handleChange2 = () => {
    setCount2((prevCount) => prevCount + 1);
  };

  const handleShowChange = (count) => {
    setCountShow((prevCount) => prevCount + count);
  };

  useEffect(() => {
    handleShowChange(count1);
  }, [count1]);

  useEffect(() => {
    handleShowChange(count2);
  }, [count2]);

  const reset = () => {
    setCount1(0);
    setCount2(0);
    setCountShow(0);
  };

  return (
    <>
      <div className=" flex flex-col justify-between gap-4 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)] p-6 max-w-xl text-slate-50">
        <Btn id={1} onClick={handleChange1}>
          Added {count1}
        </Btn>
        <h2 className="text-center text-xl font-bold">{countShow}</h2>
        <Btn id={2} onClick={handleChange2}>
          Added {count2}
        </Btn>
        <Btn onClick={reset}>Reset</Btn>
      </div>
    </>
  );
}

export default TryDoubleBtn;
