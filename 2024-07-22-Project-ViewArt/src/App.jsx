import { useEffect, useState } from "react";
import { labels } from "./data/labels";
import { getArtworkList } from "./api/artworkClient";

import eye from "./assets/eye.png";

import PageArtwork from "./Pages/PageArtwork";

function App() {
  const [artworkList, setArtworkList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getArtwork = async () => {
    try {
      const data = await getArtworkList();
      setArtworkList(data);
    } catch (err) {
      return <h1>Errore nel caricamento delle opere</h1>;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getArtwork();
  }, []);

  useEffect(() => {
    console.log(artworkList);
  }, [artworkList]);

  if (isLoading) {
    return <h1 className="p-8">Loading...</h1>;
  }

  return (
    <>
      <div className="flex justify-center">
        <main className="w-[1200px] ">
          <div className="p-4 flex justify-between">
            <h1 className="">{labels.artworkList}</h1>
            <input
              type="text"
              className="border-2 border-cyan-950 rounded p-1"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.artworkTableTitle}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.artworkTableAuthor}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.artworkTableMovement}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.artworkTableYear}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {labels.artworkTableId}
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {artworkList.map((artwork) => (
                  <tr key={artwork.id}>
                    <td className="whitespace-nowrap px-4 py-2">
                      <img
                        src={eye}
                        alt="eye image for view artwork pop up"
                        className="h-12"
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
