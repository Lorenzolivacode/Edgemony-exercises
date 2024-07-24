import React from "react";
import { createPortal } from "react-dom";

export function ModalViewImage({ isOpen, artwork }) {
  return createPortal(
    <>
      {isOpen && (
        <div className="w-96 p-4 bg-stone-50 shadow-[0_0_20px_rgba(0,0,20,0.5)] absolute start-1/2 translate-x-negative-half top-16 max-h-[600px] max-w-[410px]">
          <img src={artwork.image} alt="Image of this artwork" />
        </div>
      )}
    </>,
    document.body
  );
}

export default ModalViewImage;
