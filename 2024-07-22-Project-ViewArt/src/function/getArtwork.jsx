import { getArtworkList, getArtworkDetails } from "./../api/artworkClient";
import { useState } from "react";

export const useArtwork = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ message: "", isError: false });
  const [artworkList, setArtworkList] = useState([]);
  const [artworkDetails, setArtworkDetails] = useState(null);

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

  return {
    isLoading,
    isError,
    artworkList,
    artworkDetails,
    getArtwork,
    getDetails,
  };
};
