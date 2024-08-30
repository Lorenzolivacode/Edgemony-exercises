"use client";

import React, { useState } from "react";
import Image from "next/image";
import ModalViewImage from "./ModalViewImage";

import eye from "@/app/assets/eye.png";
import { IArtwork } from "../page";

function ImgViewModal({ artwork }: { artwork: IArtwork }) {
  const [isModalViewOpen, setIsModalViewOpen] = useState(false);
  return (
    <>
      <Image
        onMouseOver={() => setIsModalViewOpen(true)}
        onMouseLeave={() => setIsModalViewOpen(false)}
        src={eye}
        alt="eye image for view artwork pop up"
        className="h-12 hover:opacity-60 cursor-pointer"
      />
      <ModalViewImage isOpen={isModalViewOpen} artwork={artwork} />
    </>
  );
}

export default ImgViewModal;
