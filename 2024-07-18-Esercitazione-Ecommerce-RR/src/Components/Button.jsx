import React from "react";

export function Button({ id, onClick, children }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className="bg-slate-600 p-3 text-slate-200 rounded-3xl hover:shadow-lg hover:bg-slate-500"
    >
      {children}
    </button>
  );
}

export default Button;
