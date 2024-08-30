"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IArtwork } from "../page";

interface IModal {
  isOpen: boolean;
  artwork: IArtwork;
}
export function ModalViewImage({ isOpen, artwork }: IModal) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Imposta lo stato a true solo lato client
    setMounted(true);
  }, []);

  // Rendi nulla la modale se il componente non è ancora montato
  if (!mounted) {
    return null;
  }

  return createPortal(
    <>
      {isOpen && (
        <div className=" p-4 bg-stone-50 shadow-[0_0_20px_rgba(0,0,20,0.5)] fixed start-1/2 translate-x-negative-half top-16 max-h-[600px] max-w-[410px]">
          <img src={artwork.image} alt="Image of this artwork" />
        </div>
      )}
    </>,
    document.body
  );
}

export default ModalViewImage;
