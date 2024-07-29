import { useEffect, useState, useContext } from "react";

import { LanguageObjUsedContext } from "./Provider/LanguageContext.jsx";

import { useArtwork } from "./function/getArtwork.jsx";
import { ErrorGenericComponent } from "./Components/ErrorGenericComponent.jsx";

import TableItem from "./Components/TableItem";

function App() {
  const { isLoading, isError, artworkList, getArtwork } = useArtwork();

  const [filterInput, setFilterInput] = useState("");

  const languageObjUsed = useContext(LanguageObjUsedContext);

  const handleChange = (e) => {
    setFilterInput(e.target.value.toLowerCase());
  };

  useEffect(() => {
    getArtwork();
    /* console.log(artworkList); */
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
            <h1 className="">{languageObjUsed.artworkList}</h1>
            <input
              value={filterInput}
              placeholder={languageObjUsed.artworkInput}
              type="text"
              onChange={handleChange}
              className="border-2 border-cyan-950 rounded p-1"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="text-left">
                <tr>
                  <th className="px-4 py-2"></th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {languageObjUsed.artworkTableTitle}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {languageObjUsed.artworkTableAuthor}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {languageObjUsed.artworkTableMovement}
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {languageObjUsed.artworkTableYear}
                  </th>
                  {/* <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {languageObjUsed.artworkTableId}
                  </th> */}
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {artworkList
                  .filter((artwork) => {
                    return (
                      artwork.title.toLowerCase().includes(filterInput) ||
                      artwork.author.toLowerCase().includes(filterInput)
                    );
                  })
                  .map((artwork) => (
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
