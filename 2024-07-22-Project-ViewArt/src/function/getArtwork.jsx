import {
  getArtworkList,
  getArtworkDetails,
  addArtwork,
  editArtwork,
} from "./../api/artworkClient";
import { useState } from "react";

export const useArtwork = () => {
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

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ message: "", isError: false });
  const [artworkList, setArtworkList] = useState([]);
  const [artworkDetails, setArtworkDetails] = useState(null);
  const [form, setForm] = useState(initialState);

  const getArtwork = async () => {
    try {
      const data = await getArtworkList();
      setArtworkList(data);
    } catch (err) {
      console.log(err.message);
      setIsError((prevState) => {
        return { ...prevState, message: err.message, isError: true };
      });
      /* return <h1>Errore nel caricamento delle opere</h1>; */
    } finally {
      setIsLoading(false);
    }
  };

  const getDetails = async (id) => {
    try {
      const data = await getArtworkDetails(id);
      setArtworkDetails(data);
      console.log("data: ", data);
    } catch (err) {
      console.log(err.message);
      setIsError((prevState) => {
        return { ...prevState, message: err.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async (body) => {
    try {
      /* e.preventDefault(); */
      setIsLoading(true);
      const res = await addArtwork(body);
      /* setForm(initialState); */
      console.log(res);
    } catch (err) {
      setIsError((prevState) => {
        console.log(err);
        return { ...prevState, message: err.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async (body) => {
    console.log("Submitting form:", body);
    try {
      /* e.preventDefault(); */
      setIsLoading(true);
      const res = await editArtwork(body);
      /* setForm(initialState); */
      console.log(res);
      /* navigate(-1); */
    } catch (err) {
      setIsError((prevState) => {
        console.log(err);
        return { ...prevState, message: err.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    initialState,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    setForm,
    artworkDetails,
    artworkList,
    artworkDetails,
    getArtwork,
    getDetails,
    handleAdd,
    handleEdit,
  };
};
