"use client";

import ArtworkForm from "@/app/Components/ArtworkForm";
import React, { FormEvent } from "react";

const artworkDetails = {
  id: "0001",
  title: "After the Rain",
  author: "Francesco Lojacono",
  movement: "Sicilian Viewism",
  year: "1884",
  image: "@/app/assets/0001-dopo-la-pioggia-600-448.jpg",
  technique: "",
  sizes: "",
  price: "",
  description: "",
};

interface IEditPage {
  params: { id: string };
}
function EditArtwork({ params }: IEditPage) {
  const { id } = params;

  const handleEdit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Edit");
    console.log("id: ", id);
  };

  return (
    <ArtworkForm
      value={artworkDetails}
      onSubmit={handleEdit}
      nameFunction="PippoEdit"
    />
  );
}

export default EditArtwork;
