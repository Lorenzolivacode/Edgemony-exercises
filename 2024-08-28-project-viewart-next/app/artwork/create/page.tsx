"use client";

import ArtworkForm from "@/app/Components/ArtworkForm";
import React, { FormEvent } from "react";

function CreateArtwork() {
  const handleAdd = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Add");
  };
  return <ArtworkForm onSubmit={handleAdd} nameFunction="PippoCreate" />;
}

export default CreateArtwork;
