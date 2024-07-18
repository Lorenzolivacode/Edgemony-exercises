import React from "react";
import { Button } from "./Button";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

export function Modal({ onClose, isOpen, product }) {
  return createPortal(
    <>
      {isOpen && (
        <div className="w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm ">
          <div className="flex flex-col w-96 bg-white z-50 max-h-screen">
            <img src={product.images[1]} alt="" />
            <div className="flex flex-col items-center gap-3 text-center p-6 ">
              <Link
                className="font-bold underline text-slate-800 cursor-pointer"
                to={`product/${product.id}`}
              >
                {product.title}
              </Link>
              <p>€{product.price}</p>
              <p className="text-xs">{product.description}</p>
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
