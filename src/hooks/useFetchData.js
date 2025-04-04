import { useState, useEffect } from "react";
import api from "../api/axiosInstance";

const useFetchData = (url, method = "GET", requestData = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let response;
        if (method === "GET") {
          response = await api.get(url);
        } else if (method === "POST") {
          response = await api.post(url, requestData);
        }

        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, requestData]);

  return { data, isLoading, error };
};

export default useFetchData;
