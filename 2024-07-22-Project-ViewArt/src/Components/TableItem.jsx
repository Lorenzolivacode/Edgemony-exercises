import React from "react";
import { useState, useContext } from "react";
import { TdEl } from "./TdEl.jsx";

import ModalViewImage from "./ModalViewImage";
import { useArtwork } from "./../function/getArtwork.jsx";

import eye from "./../assets/eye.png";
import { Link } from "react-router-dom";

import { LanguageObjUsedContext } from "../Provider/LanguageContext.jsx";

export function TableItem({ artwork }) {
  const languageObjUsed = useContext(LanguageObjUsedContext);
  const [isModalViewOpen, setIsModalViewOpen] = useState(false);
  const { handleDelete } = useArtwork();
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2">
        <img
          onMouseOver={() => setIsModalViewOpen(true)}
          onMouseLeave={() => setIsModalViewOpen(false)}
          src={eye}
          alt="eye image for view artwork pop up"
          className="h-12 hover:opacity-60 cursor-pointer"
        />
        <ModalViewImage isOpen={isModalViewOpen} artwork={artwork} />
      </td>
      <TdEl>{artwork.title}</TdEl>
      <TdEl>{artwork.author}</TdEl>
      <TdEl>{artwork.movement}</TdEl>
      <TdEl>{artwork.year}</TdEl>
      {/* <TdEl>{artwork.id}</TdEl> */}
      <td className="whitespace-nowrap px-4 py-2">
        <Link
          to={`/artwork/${artwork.id}`}
          className="inline-block rounded bg-cyan-600 px-4 py-2 text-xs font-medium text-white hover:bg-cyan-700"
          title="View details's page"
        >
          {languageObjUsed.btnDetails}
        </Link>
        <Link
          to={`/editArtwork/${artwork.id}`}
          className="ml-4 inline-block rounded bg-cyan-600 px-4 py-2 text-xs font-medium text-white hover:bg-cyan-700"
          title="Edit details"
        >
          {languageObjUsed.btnEdit}
        </Link>
        <button
          className="ml-4 inline-block rounded bg-cyan-600 px-4 py-2 text-xs
          font-medium text-white hover:bg-cyan-700"
          title="Delete item"
          onClick={() => handleDelete(artwork.id)}
        >
          {languageObjUsed.btnDelete}
        </button>
      </td>
    </tr>
  );
}

export default TableItem;

{
  /* <tr key={artwork.id}>
                    <td className="whitespace-nowrap px-4 py-2">
                      <img
                        onMouseOver={() => setIsModalViewOpen(true)}
                        onMouseLeave={() => setIsModalViewOpen(false)}
                        src={eye}
                        alt="eye image for view artwork pop up"
                        className="h-12"
                      />
                      <ModalViewImage
                        isOpen={isModalViewOpen}
                        artwork={artwork}
                      />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {artwork.title}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {artwork.author}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {artwork.movement}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {artwork.year}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {artwork.id}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <a
                        href="#"
                        className="inline-block rounded bg-cyan-600 px-4 py-2 text-xs font-medium text-white hover:bg-cyan-700"
                      >
                        View
                      </a>
                    </td>
                  </tr> */
}
