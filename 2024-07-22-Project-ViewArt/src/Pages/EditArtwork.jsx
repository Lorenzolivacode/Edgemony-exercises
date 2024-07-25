import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ArtworkForm from "../Components/ArtworkForm";
import { useArtwork } from "../function/getArtwork";
import { getArtworkDetails } from "../api/artworkClient";

export function EditArtwork() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { artworkDetails, getDetails } = useArtwork();

  useEffect(() => {
    const res = getDetails(id);
    console.log("res", res);
    console.log("ArtW Det", artworkDetails);
  }, []);

  const handleSubmit = async (value) => {
    console.log("Submitting form:", value);
    try {
      /* e.preventDefault(); */
      setIsLoading(true);
      const res = await addArtwork(value);
      /* setForm(initialState); */
      console.log(res);
      /* navigate(-1); */
    } catch (err) {
      setIsError((prevState) => {
        console.log(err);
        return { ...prevState, message: err.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <ArtworkForm
      value={artworkDetails}
      onSubmit={handleSubmit}
      nameFunction={EditArtwork.name}
    />
  );
}

export default EditArtwork;
