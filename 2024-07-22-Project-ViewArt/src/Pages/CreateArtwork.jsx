import React, { useEffect, useState } from "react";
import { useArtwork } from "../function/getArtwork";
import { ArtworkForm } from "./../Components/ArtworkForm";

export function CreateArtwork() {
  const { handleAdd } = useArtwork();

  return <ArtworkForm onSubmit={handleAdd} nameFunction={CreateArtwork.name} />;
}

export default CreateArtwork;
