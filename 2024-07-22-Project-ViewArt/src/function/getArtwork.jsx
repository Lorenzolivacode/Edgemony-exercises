import { getArtworkList } from "./../api/artworkClient";
import { useState } from "react";

export const useArtwork = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [artworkList, setArtworkList] = useState([]);

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
  return { isLoading, artworkList, getArtwork };
};
