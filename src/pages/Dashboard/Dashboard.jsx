import React from "react";
import useFetchData from "../../hooks/useFetchData";

const Dashboard = () => {
  const { data, error, isLoading } = useFetchData("/users/dashboard");

  return (
    <div>
      <h1>Dashboard</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p className="error-text">{error}</p>}
      {data && (
        <div>
          <h2>Welcome, {data.user?.fullname}!</h2>
          <p>Email: {data.user?.email}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
