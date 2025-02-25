import React, { useEffect, useState } from "react";
import api from "../../api/axiosInstance";

const Dashboard = () => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchDashboard = async () => {
  //     try {
  //       const response = await api.get("/users/dashboard"); // Interceptor will add Bearer Token
  //       setData(response.data);
  //     } catch (err) {
  //       console.error("Dashboard fetch failed:", err.response?.data || err.message);
  //       setError(err.response?.data || "Failed to fetch");
  //     }
  //   };

  //   fetchDashboard();
  // }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
