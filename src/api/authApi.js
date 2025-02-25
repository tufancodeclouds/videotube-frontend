import axios from "axios";
import { API_BASE_URL, API_CONFIG } from "../config/config";

// For Registration and Login, we'll use a separate Axios instance
const authApi = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  ...API_CONFIG,
});

export default authApi;
