import { labelsEn } from "@/app/data/labels";
import { FilterInput } from "@/app/Components/FilterInput";
import TableItem from "./Components/TableItem";

export interface IArtwork {
  id?: string;
  title: string;
  author: string;
  movement: string;
  year: string;
  image: string;
  technique: string;
  sizes: string;
  price: string;
  description: string;
}

let artworkList: IArtwork[];
//Lo so che è un di più inutile ma volevo scrivere la interface
artworkList = [
  {
    id: "0001",
    title: "After the Rain",
    author: "Francesco Lojacono",
    movement: "Sicilian Viewism",
    year: "1884",
    image: "@/app/assets/0001-dopo-la-pioggia-600-448.jpg",
    technique: "",
    sizes: "",
    price: "",
    description: "",
  },
  {
    id: "0002",
    title: "The Starry Night",
    author: "Vincent van Gogh",
    movement: "Post-Impressionism",
    year: "1889",
    image: "@/app/assets/starry_night.jpg",
    technique: "",
    sizes: "",
    price: "",
    description: "",
  },
];

export default function Home() {
  return (
    <div className="flex justify-center">
      <main className="w-[1200px] pt-11">
        <div className="p-4 flex justify-between">
          <h1 className="">{labelsEn.artworkList}</h1>
          <FilterInput />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="px-4 py-2"></th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {labelsEn.artworkTableTitle}
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {labelsEn.artworkTableAuthor}
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {labelsEn.artworkTableMovement}
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {labelsEn.artworkTableYear}
                </th>

                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {artworkList
                /* .filter((artwork) => {
                  return (
                    artwork.title.toLowerCase().includes(filterInput) ||
                    artwork.author.toLowerCase().includes(filterInput)
                  );
                }) */
                .map((artwork) => (
                  <TableItem key={artwork.id} artwork={artwork} />
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
