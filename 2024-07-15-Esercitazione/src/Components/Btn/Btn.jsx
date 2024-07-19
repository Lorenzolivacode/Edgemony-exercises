import React from "react";

function Btn({ onClick, children, id }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className="bg-slate-400 p-2 rounded-md text-slate-950 hover:bg-slate-200 hover:shadow-[0_0_30px_rgba(0,0,0,0.8)] duration-200"
    >
      {children}
    </button>
  );
}

export default Btn;
