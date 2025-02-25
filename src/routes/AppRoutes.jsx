import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Video from "../pages/Video/Video";
import Profile from "../pages/Profile/Profile";
import VideoUpload from "../pages/VideoUpload/VideoUpload";
import Login from "../components/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

const AppRoutes = ({ sideNavBar }) => {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <Routes>
      <Route path="/" element={<Home sideNavBar={sideNavBar} />} />
      <Route path="/watch/:id" element={<Video />} />
      <Route path="/user/:id" element={<Profile sideNavBar={sideNavBar} />} />
      <Route path="/:id/upload" element={<VideoUpload />} />
      <Route path="/login" element={<Login />} />
      
      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={accessToken ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default AppRoutes;
