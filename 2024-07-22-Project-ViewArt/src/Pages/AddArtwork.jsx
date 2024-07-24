import React, { useEffect, useState } from "react";
import { useArtwork } from "../function/getArtwork";
import { addArtwork } from "../api/artworkClient";
import InputFormEl from "../Components/InputFormEl";

const initialState = {
  title: "",
  author: "",
  movement: "",
  year: "",
  image: "",
  technique: "",
  sizes: "",
  price: "",
  description: "",
};

const arrayInitialState = Object.keys(initialState);

export function AddArtwork() {
  const { isError, isLoading, setIsLoading, handleSubmit } = useArtwork();

  const [form, setForm] = useState(initialState);

  const formValidation = false;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  /* useEffect(() => {
    console.log(form);
  }, [form]); */

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-cyan-600 sm:text-3xl">
            Insert the new Artwork here
          </h1>

          {/* <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Inserisci title, author, genre, isbn, description
          </p> */}

          <form
            /* onSubmit={handleSubmit} */
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            {arrayInitialState.map((element) => {
              return (
                <InputFormEl
                  key={arrayInitialState.indexOf(element)}
                  el={element}
                  onChange={handleChange}
                />
              );
            })}

            {isError.isError && (
              <div
                role="alert"
                className="rounded border-s-4 border-red-500 bg-red-50 p-4"
              >
                <strong className="block font-medium text-red-800">
                  {" "}
                  Something went wrong{" "}
                </strong>

                <p className="mt-2 text-sm text-red-700">{isError.message}</p>
              </div>
            )}

            {!isLoading ? (
              <button
                onSubmit={handleSubmit}
                type="submit"
                className={`block w-full rounded-lg bg-cyan-600 ${
                  formValidation ? "bg-slate-400" : ""
                } px-5 py-3 text-sm font-medium text-white`}
              >
                Submit
              </button>
            ) : (
              <button disabled>Is Loading...</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddArtwork;
