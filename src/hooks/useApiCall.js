import { useState } from "react";
import { toast } from "react-toastify";
import authApi from "../api/authApi";

const useApiCall = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiCall = async (url, method = "POST", data = {}) => {
    setIsLoading(true);
    setError(null);

    try {
      let response;

      if (method === "POST") {
        response = await authApi.post(url, data);
      } else if (method === "GET") {
        response = await authApi.get(url);
      } else if (method === "PUT") {
        response = await authApi.put(url, data);
      } else if (method === "DELETE") {
        response = await authApi.delete(url);
      }

      toast.success(response.data.message || "Success");

      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong.");
      toast.error(error.response?.data?.message || "Something went wrong.");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { apiCall, isLoading, error };
};

export default useApiCall;
