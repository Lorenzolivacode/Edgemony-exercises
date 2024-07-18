import React from "react";
import { Button } from "./Button";
import { createPortal } from "react-dom";

export function Modal({ onClose, isOpen, product }) {
  return createPortal(
    <>
      {isOpen && (
        <div className="w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm ">
          <div className="flex flex-col w-64 bg-white z-50">
            <img src={product.images[1]} alt="" />
            <div className="flex flex-col items-center gap-4 text-center p-10 ">
              <h2 className="font-bold underline text-slate-800 cursor-pointer">
                {product.title}
              </h2>
              <p>€{product.price}</p>
              <p>This is a modal</p>
              <Button onClick={onClose}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

export default Modal;
