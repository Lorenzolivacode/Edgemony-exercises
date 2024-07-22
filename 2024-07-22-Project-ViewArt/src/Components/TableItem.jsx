import React from "react";
import { useState } from "react";
import { TdEl } from "./TdEl.jsx";

import ModalViewImage from "./ModalViewImage";

import eye from "./../assets/eye.png";

export function TableItem({ artwork }) {
  const [isModalViewOpen, setIsModalViewOpen] = useState(false);
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2">
        <img
          onMouseOver={() => setIsModalViewOpen(true)}
          onMouseLeave={() => setIsModalViewOpen(false)}
          src={eye}
          alt="eye image for view artwork pop up"
          className="h-12"
        />
        <ModalViewImage isOpen={isModalViewOpen} artwork={artwork} />
      </td>
      <TdEl>{artwork.title}</TdEl>
      <TdEl>{artwork.author}</TdEl>
      <TdEl>{artwork.movement}</TdEl>
      <TdEl>{artwork.year}</TdEl>
      <TdEl>{artwork.id}</TdEl>
      <td className="whitespace-nowrap px-4 py-2">
        <a
          href="#"
          className="inline-block rounded bg-cyan-600 px-4 py-2 text-xs font-medium text-white hover:bg-cyan-700"
        >
          View
        </a>
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
