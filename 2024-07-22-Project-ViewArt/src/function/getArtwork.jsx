import {
  getArtworkList,
  getArtworkDetails,
  addArtwork,
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

  const getDetails = async () => {
    try {
      const data = await getArtworkDetails();
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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const res = await addArtwork(form);
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

  return {
    initialState,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    setForm,
    artworkList,
    artworkDetails,
    getArtwork,
    getDetails,
    handleSubmit,
  };
};
