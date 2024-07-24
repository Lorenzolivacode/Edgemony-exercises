import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ErrorComponent } from "./../Components/ErrorComponent.jsx";

import { getArtworkDetails } from "../api/artworkClient.js";

import { useArtwork } from "./../function/getArtwork.jsx";

export function PageArtwork() {
  const { id } = useParams();
  const { isLoading, isError, artworkDetails, getDetails } = useArtwork();

  useEffect(() => {
    getDetails(id);
  }, []);

  useEffect(() => {
    console.log("AWDet: ", artworkDetails);
  }, [artworkDetails]);

  if (isError.isError) {
    return <ErrorComponent message={isError.message} />;
  }

  if (isLoading) {
    return (
      <article className="pl-20 pr-20 pt-11 text-cyan-950 w-2/3 m-auto">
        <div className="flex justify-between mb-8">
          <div className="bg-gray-300 w-48 h-48"></div>
          <div className="text-right">
            <div className="bg-gray-300 rounded h-6 mb-2 w-32"></div>
            <div className="bg-gray-300 rounded h-4 mb-1 w-24"></div>
            <div className="bg-gray-300 rounded h-4 mb-1 w-16"></div>
            <div className="bg-gray-300 rounded h-4 mb-1 w-28"></div>
            <div className="bg-gray-300 rounded h-4 mb-1 w-20"></div>
            <div className="bg-gray-300 rounded h-4 mb-1 w-24"></div>
            <div className="bg-gray-300 rounded h-4 mb-1 w-16"></div>
            <div className="bg-gray-300 rounded h-4 mb-1 w-12"></div>
          </div>
        </div>
        <div className="bg-gray-300 rounded h-20 w-full"></div>
      </article>
    );
  }

  return (
    <article className="pl-20 pr-20 pt-11 text-cyan-950 max-w-[1000px] m-auto">
      <div className="flex justify-between mb-8">
        <img
          src={artworkDetails.image}
          alt="image of artwork"
          className="max-w-[500px] max-h-[350px]"
        />
        <div className="text-right">
          <h2 className="font-bold">{artworkDetails.title}</h2>
          <p>{artworkDetails.author}</p>
          <p>{artworkDetails.year}</p>
          <p>{artworkDetails.technique}</p>
          <p>{artworkDetails.movement}</p>
          <p>{artworkDetails.sizes}</p>
          <p>{artworkDetails.price}</p>
          <p>{artworkDetails.id}</p>
        </div>
      </div>
      <p>{artworkDetails.description}</p>
    </article>
  );
}

export default PageArtwork;
