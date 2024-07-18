import React from "react";
import { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";

/* export function Card({ img, product, price, onClick, idBtn, btnText }) { */
export function Card({ product, onClick, btnText }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-slate-200 shadow-md w-36">
      <img src={product.images[0]} alt="image" />
      <div className="p-4 text-center flex flex-col justify-between gap-6">
        <h2>{product.title}</h2>
        <p>€{product.price}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-slate-400 p-1 text-slate-200 rounded-xl hover:shadow-lg hover:bg-slate-500"
        >
          View
        </button>
        <Button id={product.id} onClick={onClick}>
          {btnText}
        </Button>
        <Modal
          isOpen={isModalOpen}
          product={product}
          onClose={() => setIsModalOpen(false)}
        ></Modal>
      </div>
    </div>
  );
}

export default Card;
