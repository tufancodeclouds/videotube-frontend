import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const [userImage, setUserImage] = useState(
    "https://w7.pngwing.com/pngs/546/197/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon-thumbnail.png"
  );

  /* navbar modal functionality */
  const [navbarModal, setNavbarModal] = useState(false);
  const modalRef = useRef(null);
  const imageRef = useRef(null);

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

  const toggleNavbarModal = (event) => {
    event.stopPropagation();
    setNavbarModal((prevState) => !prevState);
  };

  useEffect(() => {
    if (navbarModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarModal]);
  /* navbar modal functionality */

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-hamburger">
          <MenuIcon sx={{ color: "#fff" }} />
        </div>
        <div className="navbar-youtubeimg">
          <YouTubeIcon
            sx={{ fontSize: "34px" }}
            className="navbar-youtubeimage"
          />
          <h1 className="navbar-youtubetitle">YouTube</h1>
        </div>
      </div>

      <div className="navbar-middle">
        <div className="navbar-searchbox">
          <input
            type="text"
            placeholder="Search"
            className="navbar-searchinput"
          />
          <div className="navbar-searchicon">
            <SearchIcon sx={{ fontSize: "28px", color: "#fff" }} />
          </div>
        </div>

        <div className="navbar-mic">
          <KeyboardVoiceIcon sx={{ color: "#fff" }} />
        </div>
      </div>

      <div className="navbar-right">
        <VideoCallIcon
          sx={{ color: "#fff", fontSize: "30px", cursor: "pointer" }}
        />
        <NotificationsIcon
          sx={{ color: "#fff", fontSize: "30px", cursor: "pointer" }}
        />
        <img
          ref={imageRef}
          onClick={toggleNavbarModal}
          src={userImage}
          alt="logo"
          className="navbar-userimage"
        />

        {navbarModal && (
          <div className="navbar-modal" ref={modalRef}>
            <div className="navbar-modal-option"><PersonIcon sx={{ fontSize: "20px" }} /> Profile</div>
            <div className="navbar-modal-option"><LogoutIcon sx={{ fontSize: "20px" }} /> Logout</div>
            <div className="navbar-modal-option"><LoginIcon sx={{ fontSize: "20px" }} /> Login</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
