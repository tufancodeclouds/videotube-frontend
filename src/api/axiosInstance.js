import axios from "axios";
import { API_BASE_URL, API_CONFIG } from "../config/config";

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  ...API_CONFIG,
});

// Request Interceptor (Set Token to Header)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (if Token Expired then Refresh the Token)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const refreshToken = localStorage.getItem("refreshToken");

        // New Access Token Get from API
        const res = await axios.post(`${API_BASE_URL}/api/v1/auth/refresh-token`, { token: refreshToken }, { withCredentials: true });

        // New Access Token Store in Local Storage
        localStorage.setItem("accessToken", res.data.accessToken);

        // Again Send the Request
        error.config.headers.Authorization = `Bearer ${res.data.accessToken}`;
        return api(error.config);
      } catch (refreshError) {
        console.error("Session expired. Please log in again.");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("avatar");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
