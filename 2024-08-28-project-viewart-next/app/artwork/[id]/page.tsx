import Link from "next/link";
import React from "react";

import { labelsEn } from "@/app/data/labels";

const artworkDetails = {
  id: "0001",
  title: "After the Rain",
  author: "Francesco Lojacono",
  movement: "Sicilian Viewism",
  year: "1884",
  image: "@/app/assets/0001-dopo-la-pioggia-600-448.jpg",
};

interface IArtworkPage {
  params: { id: string };
}
function ArtworkPage({ params }: IArtworkPage) {
  const { id } = params;
  return (
    <article className="pl-20 pr-20 pt-11 text-cyan-950 max-w-[1000px] m-auto">
      <div className="flex justify-between mb-8">
        <img
          src={artworkDetails.image}
          alt="image of artwork"
          className="max-w-[500px] max-h-[350px] shadow-[0_0_15px_rgba(0,0,0,0.45)]"
        />
        <div className="text-right">
          <h2 className="font-bold">{artworkDetails.title}</h2>
          <p>{artworkDetails.author}</p>
          <p>{artworkDetails.year}</p>
          {/* <p>{artworkDetails.technique}</p> */}
          <p>{artworkDetails.movement}</p>
          {/* <p>{artworkDetails.sizes}</p>
      <p>{artworkDetails.price}</p> */}
          <p>{artworkDetails.id}</p>
          <div className="mt-4">
            <Link
              href={`/editArtwork/${artworkDetails.id}`}
              className="ml-4 inline-block rounded bg-cyan-600 px-4 py-2 text-xs font-medium text-white hover:bg-cyan-700"
              title="Edit details"
            >
              {labelsEn.btnEdit}
            </Link>
            <Link
              href={"/"}
              className="ml-4 inline-block rounded bg-cyan-600 px-4 py-2 text-xs
      font-medium text-white hover:bg-cyan-700"
              title="Delete item"
              /* onClick={() => handleDelete(artworkDetails.id)} */
            >
              {labelsEn.btnDelete}
            </Link>
          </div>
        </div>
      </div>
      {/* <p>{artworkDetails.description}</p> */}
    </article>
  );
}

export default ArtworkPage;
