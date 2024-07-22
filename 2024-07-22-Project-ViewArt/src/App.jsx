import { useEffect, useState } from "react";
import { labels } from "./data/labels";
import { getArtworkList } from "./api/artworkClient";

import eye from "./assets/eye.png";

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
          <div className="p-4 ">
            <h1 className="">{labels.artworkList}</h1>
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
                {/* <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    John Doe
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Developer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $120,000
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    0001
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </td>
                </tr> */}

                {/* <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Jane Doe
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    04/11/1980
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Web Designer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $100,000
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Gary Barlow
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    24/05/1995
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    Singer
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    $20,000
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
