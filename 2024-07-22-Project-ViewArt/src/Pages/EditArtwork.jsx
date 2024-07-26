import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ArtworkForm from "../Components/ArtworkForm";
import { useArtwork } from "../function/getArtwork";

export function EditArtwork() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { artworkDetails, handleEdit, getDetails, setIsLoading, setIsError } =
    useArtwork();

  useEffect(() => {
    const res = getDetails(id);
    console.log("res", res);
    console.log("ArtW Det", artworkDetails);
  }, []);

  return (
    <ArtworkForm
      value={artworkDetails}
      onSubmit={handleEdit}
      nameFunction={EditArtwork.name}
    />
  );
}

export default EditArtwork;
