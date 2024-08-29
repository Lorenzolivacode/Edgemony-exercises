"use client";

import ArtworkForm from "@/app/Components/ArtworkForm";
import React from "react";

function CreateArtwork() {
  const handleAdd = (): void => {
    console.log("Add");
  };
  return <ArtworkForm onSubmit={handleAdd} nameFunction="PippoCreate" />;
}

export default CreateArtwork;
