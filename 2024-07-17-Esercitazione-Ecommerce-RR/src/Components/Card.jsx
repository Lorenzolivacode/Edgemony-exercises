import React from "react";

export function Card({ img, product, price, onClick, idBtn, btnText }) {
  return (
    <div className="bg-slate-200 shadow-md w-36">
      <img src={img} alt="image" />
      <div className="p-4 text-center flex flex-col justify-between gap-6">
        <h2>{product}</h2>
        <p>€{price}</p>
        <button
          id={idBtn}
          onClick={onClick}
          className="bg-slate-600 p-3 text-slate-200 rounded-3xl hover:shadow-lg hover:bg-slate-500"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
