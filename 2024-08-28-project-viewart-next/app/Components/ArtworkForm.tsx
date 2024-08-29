"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { IArtwork } from "../page";
import { labelsEn } from "@/app/data/labels";
import InputFormEl from "./InputFormEl";

interface IInputForm {
  value?: IArtwork;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  nameFunction: string;
}
function ArtworkForm({ value, onSubmit, nameFunction }: IInputForm) {
  const [isLoading, setIsLoading] = useState(true);

  const initialState: IArtwork = {
    title: value?.title || "",
    author: value?.author || "",
    movement: value?.movement || "",
    year: value?.year || "",
    image: value?.image || "",
    technique: value?.technique || "",
    sizes: value?.sizes || "",
    price: value?.price || "",
    description: value?.description || "",
  };
  const arrayInitialState = Object.keys(initialState) as (keyof IArtwork)[];

  const [form, setForm] = useState<IArtwork>(initialState);

  const titleValidation = !form.title.length;
  const authorValidation = !form.author.length;
  const movementValidation = !form.movement.length;
  const yearValidation = !form.year.length;
  const imageValidation = !form.image.length;
  const techniqueValidation = !form.technique.length;
  const sizesValidation = !form.sizes.length;
  const priceValidation = !form.price.length;
  const descriptionValidation = !form.description.length;

  const formValidation =
    titleValidation ||
    authorValidation ||
    movementValidation ||
    yearValidation ||
    imageValidation ||
    techniqueValidation ||
    sizesValidation ||
    priceValidation ||
    descriptionValidation;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-cyan-600 sm:text-3xl">
            {labelsEn.titlePage}
            {nameFunction}
          </h1>
          <form
            /* onSubmit={async (e) => {
              e.preventDefault();
              setIsLoading(true);
              await onSubmit(form, value?.id || "");
              setIsLoading(false);
            }} */
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            {arrayInitialState.map((element) => {
              /* console.log("form: ", form);
          console.log("el: ", element);
          console.log("form el: ", form[element]); */
              return (
                <InputFormEl
                  key={arrayInitialState.indexOf(element)}
                  value={form[element] || ""}
                  el={element}
                  onChange={handleChange}
                />
              );
            })}

            {/* {isError.isError && (
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
            )} */}

            {!isLoading ? (
              <button
                disabled={formValidation}
                type="submit"
                className={`block w-full rounded-lg bg-cyan-600 ${
                  formValidation ? "bg-slate-400 cursor-none" : ""
                } px-5 py-3 text-sm font-medium text-white`}
              >
                {value ? labelsEn.formBtnEdit : labelsEn.formBtnAdd}
              </button>
            ) : (
              <button
                className="w-full border-2 border-cyan-900 p-2 rounded-2xl"
                disabled
              >
                {labelsEn.isLoading}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ArtworkForm;
