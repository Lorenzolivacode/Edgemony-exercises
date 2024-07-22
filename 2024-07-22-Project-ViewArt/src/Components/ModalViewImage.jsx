import React from "react";
import { createPortal } from "react-dom";

export function ModalViewImage({ isOpen, artwork }) {
  return createPortal(
    <>
      {isOpen && (
        <div className="w-96 p-4 bg-orange-50 shadow-xl absolute start-1/2 translate-x-negative-half top-6">
          <img src={artwork.image} alt="Image of this artwork" />
        </div>
      )}
    </>,
    document.body
  );
}

export default ModalViewImage;
