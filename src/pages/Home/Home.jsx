import React from "react";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import "./Home.css";

const Home = ({ sideNavBar }) => {
  const options = [
    "All",
    "Trending",
    "Music",
    "Gaming",
    "News",
    "Jobs",
    "Sports",
    "Learning",
    "Film & Animation",
    "Autos & Vehicles",
    "Pets & Animals",
    "Comedy",
    "Entertainment",
    "News & Politics",
    "How to & Style",
    "Travel & Events",
    "People & Blogs",
    "Science & Technology",
  ];

  return (
    <div className="home">
      <SideNavbar sideNavBar={sideNavBar} />

      <div className={`home-main ${!sideNavBar ? "home-mainfullwidth" : ""}`}>
        <div className="home-options">
          {options.map((option, index) => (
            <div className="home-option" key={index}>
              {option}
            </div>
          ))}
        </div>

        <div className="home-videos">
          <div className="home-video">
            <div className="home-video-thumbnailbox">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format"
                alt="thumbnail" className="home-video-thumbnail"
              />

              <div className="home-video-durationbox">
                <p className="home-video-duration">12:34</p>
              </div>
            </div>

            <div className="home-video-detailsbox">
              <div className="home-video-profilebox">
                <img
                  src="https://w7.pngwing.com/pngs/546/197/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon-thumbnail.png"
                  alt="profile" className="home-video-profile"
                />
              </div>

              <div className="home-video-descbox">
                <p className="home-video-title">Title</p>
                <p className="home-video-channel">Channel</p>
                <p className="home-video-likes">3.4M likes</p>
              </div>
            </div>
          </div>

          <div className="home-video">
            <div className="home-video-thumbnailbox">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format"
                alt="thumbnail" className="home-video-thumbnail"
              />

              <div className="home-video-durationbox">
                <p className="home-video-duration">12:34</p>
              </div>
            </div>

            <div className="home-video-detailsbox">
              <div className="home-video-profilebox">
                <img
                  src="https://w7.pngwing.com/pngs/546/197/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon-thumbnail.png"
                  alt="profile" className="home-video-profile"
                />
              </div>

              <div className="home-video-descbox">
                <p className="home-video-title">Title</p>
                <p className="home-video-channel">Channel</p>
                <p className="home-video-likes">3.4M likes</p>
              </div>
            </div>
          </div>

          <div className="home-video">
            <div className="home-video-thumbnailbox">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format"
                alt="thumbnail" className="home-video-thumbnail"
              />

              <div className="home-video-durationbox">
                <p className="home-video-duration">12:34</p>
              </div>
            </div>

            <div className="home-video-detailsbox">
              <div className="home-video-profilebox">
                <img
                  src="https://w7.pngwing.com/pngs/546/197/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon-thumbnail.png"
                  alt="profile" className="home-video-profile"
                />
              </div>

              <div className="home-video-descbox">
                <p className="home-video-title">Title</p>
                <p className="home-video-channel">Channel</p>
                <p className="home-video-likes">3.4M likes</p>
              </div>
            </div>
          </div>

          <div className="home-video">
            <div className="home-video-thumbnailbox">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format"
                alt="thumbnail" className="home-video-thumbnail"
              />

              <div className="home-video-durationbox">
                <p className="home-video-duration">12:34</p>
              </div>
            </div>

            <div className="home-video-detailsbox">
              <div className="home-video-profilebox">
                <img
                  src="https://w7.pngwing.com/pngs/546/197/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon-thumbnail.png"
                  alt="profile" className="home-video-profile"
                />
              </div>

              <div className="home-video-descbox">
                <p className="home-video-title">Title</p>
                <p className="home-video-channel">Channel</p>
                <p className="home-video-likes">3.4M likes</p>
              </div>
            </div>
          </div>

          <div className="home-video">
            <div className="home-video-thumbnailbox">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format"
                alt="thumbnail" className="home-video-thumbnail"
              />

              <div className="home-video-durationbox">
                <p className="home-video-duration">12:34</p>
              </div>
            </div>

            <div className="home-video-detailsbox">
              <div className="home-video-profilebox">
                <img
                  src="https://w7.pngwing.com/pngs/546/197/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon-thumbnail.png"
                  alt="profile" className="home-video-profile"
                />
              </div>

              <div className="home-video-descbox">
                <p className="home-video-title">Title</p>
                <p className="home-video-channel">Channel</p>
                <p className="home-video-likes">3.4M likes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
