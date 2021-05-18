import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";

const useFetch = (initialUrl, skip = false) => {
  const apiUrl = window.siteSetting.dev
    ? window.siteSetting.testApiUrl
    : window.siteSetting.apiUrl;
  const [url] = useState(apiUrl + initialUrl);
  // const [params] = useState(initialParams);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchData = async () => {
      if (skip) return;
      setIsLoading(true);
      try {
        const token = localStorage.getItem("Token");
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const result = await response.data;
        if (result) {
          setData(result);
        } else {
          setHasError(true);
          setErrorMessage(result);
        }
      } catch (err) {
        setHasError(true);
        setErrorMessage(err.message);
        enqueueSnackbar("Get Data Error", {
          variant: "error",
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, hasError, errorMessage };
};
export default useFetch;
