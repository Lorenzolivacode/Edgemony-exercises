import React from "react";
import Image from "next/image";
import { labelsEn } from "@/app/data/labels";

import { IArtwork } from "@/app/page";

import TdEl from "./TdEl";
import BtnLink from "./BtnLink";
import BtnDelete from "./BtnDelete";

import ImgViewModal from "./ImgViewModal";

function TableItem({ artwork }: { artwork: IArtwork }) {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2">
        <ImgViewModal artwork={artwork} />
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
