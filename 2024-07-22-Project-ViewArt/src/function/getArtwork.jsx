import {
  getArtworkList,
  getArtworkDetails,
  addArtwork,
  editArtwork,
  deleteArtwork,
} from "./../api/artworkClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useArtwork = () => {
  /* const initialState = {
    title: "",
    author: "",
    movement: "",
    year: "",
    image: "",
    technique: "",
    sizes: "",
    price: "",
    description: "",
  }; */

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ message: "", isError: false });
  const [artworkList, setArtworkList] = useState([]);
  const [artworkDetails, setArtworkDetails] = useState(null);
  /* const [form, setForm] = useState(initialState); */

  const navigate = useNavigate();

  const getArtwork = async () => {
    try {
      const data = await getArtworkList();
      setArtworkList(data);
      /* console.log("prova"); */
    } catch (err) {
      console.log("Error: ", err.message);
      setIsError((prevState) => {
        return { ...prevState, message: err.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getDetails = async (id) => {
    try {
      const data = await getArtworkDetails(id);
      /* toast.info(`${data.title} info`); */
      setArtworkDetails(data);
      /* console.log("data: ", data); */
    } catch (err) {
      console.log("Error: ", err.message);
      setIsError((prevState) => {
        return { ...prevState, message: err.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async (body) => {
    try {
      setIsLoading(true);
      const res = await addArtwork(body);
      toast.success(`${body.title} added!`);
      navigate("/");
      /* console.log(res); */
    } catch (err) {
      toast.error(`${err}!`);
      setIsError((prevState) => {
        console.log(err);
        return { ...prevState, message: err.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async (body, id) => {
    console.log("Submitting form:", body);
    try {
      setIsLoading(true);
      const res = await editArtwork(body, id);
      toast.success(`${res.title} modified!`);
      /* console.log("res", res); */
      navigate(`/artwork/${id}`);
    } catch (err) {
      toast.error(`${err}!`);
      setIsError((prevState) => {
        console.log(err);
        return { ...prevState, message: err.message, isError: true };
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteArtwork(id);
      toast.success(`${res.title} deleted!`);
      setIsLoading(true);
      getArtwork();
    } catch (error) {
      toast.error(`${err}!`);
      console.log("error", error);
    }
  };

  return {
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    artworkDetails,
    artworkList,
    artworkDetails,
    getArtwork,
    getDetails,
    handleAdd,
    handleEdit,
    handleDelete,
  };
};
