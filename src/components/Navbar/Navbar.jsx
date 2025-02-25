import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import api from "../../api/axiosInstance";
import {
  Menu as MenuIcon,
  YouTube as YouTubeIcon,
  Search as SearchIcon,
  KeyboardVoice as KeyboardVoiceIcon,
  VideoCall as VideoCallIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import "./Navbar.css";

const Navbar = ({ setSideNavBarFunc, sideNavBar }) => {
  const navigate = useNavigate();
  const defaultAvatar =
    "https://w7.pngwing.com/pngs/546/197/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon-thumbnail.png";

  const [navbarModal, setNavbarModal] = useState(false);
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const modalRef = useRef(null);
  const imageRef = useRef(null);

  const avatar = localStorage.getItem("avatar");
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        imageRef.current &&
        !imageRef.current.contains(event.target)
      ) {
        setNavbarModal(false);
      }
    };

    if (navbarModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarModal]);

  const handleLogout = async () => {
    try {
      await api.post("/users/logout");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("avatar");
      setNavbarModal(false);
      toast.success("Logout successful");
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
      toast.error("Logout failed");
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div
          className="navbar-hamburger"
          onClick={() => setSideNavBarFunc(!sideNavBar)}
        >
          <MenuIcon sx={{ color: "#fff" }} />
        </div>
        <Link to="/" className="navbar-youtubeimg">
          <YouTubeIcon sx={{ fontSize: "34px" }} className="navbar-youtubeimage" />
          <h1 className="navbar-youtubetitle">YouTube</h1>
        </Link>
      </div>

      <div className="navbar-middle">
        <div className="navbar-searchbox">
          <input type="text" placeholder="Search" className="navbar-searchinput" />
          <div className="navbar-searchicon">
            <SearchIcon sx={{ fontSize: "28px", color: "#fff" }} />
          </div>
        </div>
        <div className="navbar-mic">
          <KeyboardVoiceIcon sx={{ color: "#fff" }} />
        </div>
      </div>

      <div className="navbar-right">
        <Link to="/upload">
          <VideoCallIcon sx={{ color: "#fff", fontSize: "30px", cursor: "pointer" }} />
        </Link>
        <NotificationsIcon sx={{ color: "#fff", fontSize: "30px", cursor: "pointer" }} />
        <img
          ref={imageRef}
          onClick={() => setNavbarModal(!navbarModal)}
          src={avatar || defaultAvatar}
          alt="User Avatar"
          className="navbar-userimage"
        />

        {navbarModal && (
          <div className="navbar-modal" ref={modalRef}>
            {accessToken ? (
              <>
                <div
                  className="navbar-modal-option"
                  onClick={() => navigate("/profile")}
                >
                  <PersonIcon sx={{ fontSize: "20px" }} /> Profile
                </div>
                <div className="navbar-modal-option" onClick={handleLogout}>
                  <LogoutIcon sx={{ fontSize: "20px" }} /> Logout
                </div>
              </>
            ) : (
              <div className="navbar-modal-option" onClick={() => setLogin(true)}>
                <LoginIcon sx={{ fontSize: "20px" }} /> Login
              </div>
            )}
          </div>
        )}
      </div>

      {login && <Login setLogin={setLogin} setSignup={setSignup} />}
      {signup && <Signup setSignup={setSignup} setLogin={setLogin} />}
    </div>
  );
};

export default Navbar;
