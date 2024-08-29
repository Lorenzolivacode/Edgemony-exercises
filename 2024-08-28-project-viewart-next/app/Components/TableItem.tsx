import React from "react";
import Image from "next/image";
import { labelsEn } from "@/app/data/labels";

import { IArtwork } from "@/app/page";

import TdEl from "./TdEl";
import BtnLink from "./BtnLink";
import BtnDelete from "./BtnDelete";

import eye from "@/app/assets/eye.png";

/* interface ITable {
  artwork: IArtwork;
} */

function TableItem({ artwork }: { artwork: IArtwork }) {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2">
        <Image
          /* onMouseOver={() => setIsModalViewOpen(true)}
          onMouseLeave={() => setIsModalViewOpen(false)} */
          src={eye}
          alt="eye image for view artwork pop up"
          className="h-12 hover:opacity-60 cursor-pointer"
        />
        {/* <ModalViewImage isOpen={isModalViewOpen} artwork={artwork} /> */}
      </td>
      <TdEl>{artwork.title}</TdEl>
      <TdEl>{artwork.author}</TdEl>
      <TdEl>{artwork.movement}</TdEl>
      <TdEl>{artwork.year}</TdEl>
      {/* <TdEl>{artwork.id}</TdEl> */}
      <td className="px-4 py-2 flex justify-evenly">
        <BtnLink
          artworkPath={`/artwork/${artwork.id}`}
          txtBtn={labelsEn.btnDetails}
        />
        <BtnLink
          artworkPath={`/editArtwork/${artwork.id}`}
          txtBtn={labelsEn.btnEdit}
        />
        <BtnDelete txtBtn={labelsEn.btnDelete} />
      </td>
    </tr>
  );
}

export default TableItem;
