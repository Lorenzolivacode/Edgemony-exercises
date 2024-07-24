import { useEffect, useState } from "react";
import { labels } from "./data/labels";

import { useArtwork } from "./function/getArtwork.jsx";
import { ErrorGenericComponent } from "./Components/ErrorGenericComponent.jsx";

import TableItem from "./Components/TableItem";

function App() {
  const { isLoading, isError, artworkList, getArtwork } = useArtwork();

  useEffect(() => {
    getArtwork();
    console.log("isError", isError);
  }, []);

  useEffect(() => {
    console.log(artworkList);
  }, [artworkList]);

  if (isError.isError)
    return <ErrorGenericComponent message={isError.message} />;

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <main className="w-[1200px] pt-11">
          <div className="p-4 flex justify-between">
            <h1 className="bg-gray-300 rounded w-1/3 h-6"></h1>
            <input
              type="text"
              className="border-2 border-cyan-950 rounded p-1 w-1/4 bg-gray-200"
              disabled
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left">
                <tr>
                  <th className="px-4 py-2 bg-gray-300 rounded h-6"></th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-gray-300 rounded h-6"></th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-gray-300 rounded h-6"></th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-gray-300 rounded h-6"></th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-gray-300 rounded h-6"></th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-gray-300 rounded h-6"></th>
                  <th className="px-4 py-2 bg-gray-300 rounded h-6"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 bg-gray-200 h-6"></td>
                  <td className="whitespace-nowrap px-4 py-2 bg-gray-200 h-6"></td>
                  <td className="whitespace-nowrap px-4 py-2 bg-gray-200 h-6"></td>
                  <td className="whitespace-nowrap px-4 py-2 bg-gray-200 h-6"></td>
                  <td className="whitespace-nowrap px-4 py-2 bg-gray-200 h-6"></td>
                  <td className="whitespace-nowrap px-4 py-2 bg-gray-200 h-6"></td>
                  <td className="px-4 py-2 bg-gray-200 h-6"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <main className="w-[1200px] pt-11">
          <div className="p-4 flex justify-between">
            <h1 className="">{labels.artworkList}</h1>
            <input
              type="text"
              className="border-2 border-cyan-950 rounded p-1"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left">
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
                  <TableItem key={artwork.id} artwork={artwork} />
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
