import React from "react";
import { useParams } from "react-router-dom";

export function PageArtwork({ artwork }) {
  const { id } = useParams();
  return (
    <article className="pl-20 pr-20">
      <div className="flex justify-between mb-8">
        <img src={artwork.image} alt="image of artwork" />
        <div className="text-right">
          <h2>{artwork.title}</h2>
          <p>{artwork.author}</p>
          <p>{artwork.year}</p>
          <p>{artwork.technique}</p>
          <p>{artwork.movement}</p>
          <p>{artwork.sizes}</p>
          <p>{artwork.price}</p>
          <p>{artwork.id}</p>
        </div>
      </div>
      <p>{artwork.description}</p>
    </article>
  );
}

export default PageArtwork;
