import React from "react";
import "./Profile.css";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from "react-router-dom";

const Profile = ({ sideNavBar }) => {
  return (
    <div className="profile">
      <SideNavbar sideNavBar={sideNavBar} />

      <div className={`profile-main ${!sideNavBar ? "profile-mainfullwidth" : ""}`}>
        <div className="profile-main-top">
          <div className="profile-main-top-left">
            <img
              src="https://w7.pngwing.com/pngs/546/197/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon-thumbnail.png"
              alt="profile"
              className="profile-main-top-left-img"
            />
          </div>

          <div className="profile-main-top-right">
            <h2 className="profile-about-title">CodeWithTufan</h2>

            <p className="profile-about-first-para">@User1 <span className="dot">.</span> 4 videos</p>
            <p className="profile-about-second-para">About section of channel</p>
          </div>
        </div>

        <div className="profile-main-bottom">
          <h3 className="profile-videos-title">Videos <PlayArrowIcon /></h3>

          <div className="profile-videos">
            <Link to="/watch/123" className="profile-video">
              <div className="profile-video-thumbnail">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format" alt="profile-video-thumbnail" className="profile-video-thumbnail-img" />
              </div>

              <div className="profile-video-details">
                <p className="profile-video-title">Video Title</p>
                <p className="profile-video-about">Uploaded at 12-09-2024</p>
              </div>
            </Link>

            <div className="profile-video">
              <div className="profile-video-thumbnail">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format" alt="profile-video-thumbnail" className="profile-video-thumbnail-img" />
              </div>

              <div className="profile-video-details">
                <p className="profile-video-title">Video Title</p>
                <p className="profile-video-about">Uploaded at 12-09-2024</p>
              </div>
            </div>

            <div className="profile-video">
              <div className="profile-video-thumbnail">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format" alt="profile-video-thumbnail" className="profile-video-thumbnail-img" />
              </div>

              <div className="profile-video-details">
                <p className="profile-video-title">Video Title</p>
                <p className="profile-video-about">Uploaded at 12-09-2024</p>
              </div>
            </div>

            <div className="profile-video">
              <div className="profile-video-thumbnail">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format" alt="profile-video-thumbnail" className="profile-video-thumbnail-img" />
              </div>

              <div className="profile-video-details">
                <p className="profile-video-title">Video Title</p>
                <p className="profile-video-about">Uploaded at 12-09-2024</p>
              </div>
            </div>

            <div className="profile-video">
              <div className="profile-video-thumbnail">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format" alt="profile-video-thumbnail" className="profile-video-thumbnail-img" />
              </div>

              <div className="profile-video-details">
                <p className="profile-video-title">Video Title</p>
                <p className="profile-video-about">Uploaded at 12-09-2024</p>
              </div>
            </div>

            <div className="profile-video">
              <div className="profile-video-thumbnail">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format" alt="profile-video-thumbnail" className="profile-video-thumbnail-img" />
              </div>

              <div className="profile-video-details">
                <p className="profile-video-title">Video Title</p>
                <p className="profile-video-about">Uploaded at 12-09-2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
