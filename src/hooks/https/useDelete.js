import { useState, useCallback } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

const useDelete = ({ url }) => {
  const apiUrl = window.siteSetting.dev
    ? window.siteSetting.testApiUrl
    : window.siteSetting.apiUrl;
  const [res, setRes] = useState({ data: null, isLoading: false, error: null });
  const { enqueueSnackbar } = useSnackbar();

  const callAPI = useCallback(() => {
    setRes((prevState) => ({ ...prevState, isLoading: true }));
    const token = localStorage.getItem("Token");

    axios
      .delete(apiUrl + url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setRes({ data: response.data, isLoading: false, error: null });
        enqueueSnackbar("Delete successful", {
          variant: "success",
        });
      })
      .catch((error) => {
        setRes({ data: null, isLoading: false, error });
        enqueueSnackbar("Delete Error", {
          variant: "error",
        });
      });
  }, [apiUrl, enqueueSnackbar, url]);
  return [res, callAPI];
};

export default useDelete;
