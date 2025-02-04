import React from "react";
import "./Video.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="video">
      <div className="video-post-section">
        <div className="video-post">
          <video controls autoPlay className="video-post-video">
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/webm"
            />
          </video>
        </div>

        <div className="video-post-about">
          <h3 className="video-title">
            LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour
            Nonstop | Apna Bana Le, Zaalima & More
          </h3>

          <div className="video-profile">
            <div className="video-profile-left">
              <Link to="/user/123" className="video-profile-img-wrapper">
                <img
                  src="https://w7.pngwing.com/pngs/546/197/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon-thumbnail.png"
                  alt="profile"
                  className="video-profile-img"
                />
              </Link>

              <div className="video-profile-subview">
                <p className="video-profile-name">User Name</p>
                <p className="video-publish">09-07-2024</p>
              </div>

              <div className="video-subscribe-btn">Subscribe</div>
            </div>

            <div className="video-profile-right">
              <div className="video-like">
                <ThumbUpOutlinedIcon />
                <p className="video-likes-numbers">32k</p>
              </div>

              <div className="video-profile-divider"></div>

              <div className="video-dislike">
                <ThumbDownOutlinedIcon />
                <p className="video-dislikes-numbers"></p>
              </div>
            </div>
          </div>

          <div className="video-description">
            <p className="video-publish-date">30-09-2024</p>
            <p className="video-description-text">This is the cool video</p>
          </div>

          <div className="video-comments">
            <p className="video-comments-title">2 Comments</p>
            <div className="video-self-comment">
              <img
                src="https://w7.pngwing.com/pngs/546/197/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon-thumbnail.png"
                alt="profile"
                className="video-self-comment-img"
              />

              <div className="video-add-comment">
                <input
                  type="text"
                  className="video-add-comment-input"
                  placeholder="Add a comment..."
                />
                <div className="cancel-submit-comment">
                  <div class="cancel-comment">Cancel</div>
                  <div class="submit-comment">Comment</div>
                </div>
              </div>
            </div>

            <div className="video-others-comment">
              <img
                src="https://w7.pngwing.com/pngs/546/197/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon-thumbnail.png"
                alt="profile"
                className="video-others-comment-img"
              />

              <div className="video-others-comment-wrapper">
                <div className="video-others-comment-top">
                  <p className="video-others-comment-channel-name">User Name</p>
                  <p className="video-others-comment-date">30-09-2024</p>
                </div>
                <div className="video-others-comment-bottom">
                  <p className="video-others-comment-text">
                    This is the cool video
                  </p>
                </div>
              </div>
            </div>

            <div className="video-others-comment">
              <img
                src="https://w7.pngwing.com/pngs/546/197/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon-thumbnail.png"
                alt="profile"
                className="video-others-comment-img"
              />

              <div className="video-others-comment-wrapper">
                <div className="video-others-comment-top">
                  <p className="video-others-comment-channel-name">User Name</p>
                  <p className="video-others-comment-date">30-09-2024</p>
                </div>
                <div className="video-others-comment-bottom">
                  <p className="video-others-comment-text">
                    This is the cool video
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video-suggestion-section">
        <div className="video-suggestion-box">
          <div className="video-suggestion-thumbnail">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format"
              alt="video-suggestion-thumbnail"
              className="video-suggestion-thumbnail-img"
            />
          </div>

          <div className="video-suggestion-details">
            <p className="video-suggestion-title">
              LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour
              Nonstop | Apna Bana Le, Zaalima & More
            </p>
            <p className="video-suggestion-channel-name">Channel Name</p>
            <p className="video-suggestion-stats">
              1M views <span class="dot">.</span> 1 month ago
            </p>
          </div>
        </div>

        <div className="video-suggestion-box">
          <div className="video-suggestion-thumbnail">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format"
              alt="video-suggestion-thumbnail"
              className="video-suggestion-thumbnail-img"
            />
          </div>

          <div className="video-suggestion-details">
            <p className="video-suggestion-title">
              LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour
              Nonstop | Apna Bana Le, Zaalima & More
            </p>
            <p className="video-suggestion-channel-name">Channel Name</p>
            <p className="video-suggestion-stats">
              1M views <span class="dot">.</span> 1 month ago
            </p>
          </div>
        </div>

        <div className="video-suggestion-box">
          <div className="video-suggestion-thumbnail">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format"
              alt="video-suggestion-thumbnail"
              className="video-suggestion-thumbnail-img"
            />
          </div>

          <div className="video-suggestion-details">
            <p className="video-suggestion-title">
              LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour
              Nonstop | Apna Bana Le, Zaalima & More
            </p>
            <p className="video-suggestion-channel-name">Channel Name</p>
            <p className="video-suggestion-stats">
              1M views <span class="dot">.</span> 1 month ago
            </p>
          </div>
        </div>

        <div className="video-suggestion-box">
          <div className="video-suggestion-thumbnail">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format"
              alt="video-suggestion-thumbnail"
              className="video-suggestion-thumbnail-img"
            />
          </div>

          <div className="video-suggestion-details">
            <p className="video-suggestion-title">
              LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour
              Nonstop | Apna Bana Le, Zaalima & More
            </p>
            <p className="video-suggestion-channel-name">Channel Name</p>
            <p className="video-suggestion-stats">
              1M views <span class="dot">.</span> 1 month ago
            </p>
          </div>
        </div>

        <div className="video-suggestion-box">
          <div className="video-suggestion-thumbnail">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format"
              alt="video-suggestion-thumbnail"
              className="video-suggestion-thumbnail-img"
            />
          </div>

          <div className="video-suggestion-details">
            <p className="video-suggestion-title">
              LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour
              Nonstop | Apna Bana Le, Zaalima & More
            </p>
            <p className="video-suggestion-channel-name">Channel Name</p>
            <p className="video-suggestion-stats">
              1M views <span class="dot">.</span> 1 month ago
            </p>
          </div>
        </div>

        <div className="video-suggestion-box">
          <div className="video-suggestion-thumbnail">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format"
              alt="video-suggestion-thumbnail"
              className="video-suggestion-thumbnail-img"
            />
          </div>

          <div className="video-suggestion-details">
            <p className="video-suggestion-title">
              LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour
              Nonstop | Apna Bana Le, Zaalima & More
            </p>
            <p className="video-suggestion-channel-name">Channel Name</p>
            <p className="video-suggestion-stats">
              1M views <span class="dot">.</span> 1 month ago
            </p>
          </div>
        </div>

        <div className="video-suggestion-box">
          <div className="video-suggestion-thumbnail">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format"
              alt="video-suggestion-thumbnail"
              className="video-suggestion-thumbnail-img"
            />
          </div>

          <div className="video-suggestion-details">
            <p className="video-suggestion-title">
              LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour
              Nonstop | Apna Bana Le, Zaalima & More
            </p>
            <p className="video-suggestion-channel-name">Channel Name</p>
            <p className="video-suggestion-stats">
              1M views <span class="dot">.</span> 1 month ago
            </p>
          </div>
        </div>

        <div className="video-suggestion-box">
          <div className="video-suggestion-thumbnail">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format"
              alt="video-suggestion-thumbnail"
              className="video-suggestion-thumbnail-img"
            />
          </div>

          <div className="video-suggestion-details">
            <p className="video-suggestion-title">
              LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour
              Nonstop | Apna Bana Le, Zaalima & More
            </p>
            <p className="video-suggestion-channel-name">Channel Name</p>
            <p className="video-suggestion-stats">
              1M views <span class="dot">.</span> 1 month ago
            </p>
          </div>
        </div>

        <div className="video-suggestion-box">
          <div className="video-suggestion-thumbnail">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fHx8fDA%3D&auto=format"
              alt="video-suggestion-thumbnail"
              className="video-suggestion-thumbnail-img"
            />
          </div>

          <div className="video-suggestion-details">
            <p className="video-suggestion-title">
              LONG DRIVE Bollywood Mix - Arijit Singh | Full Album | 2 Hour
              Nonstop | Apna Bana Le, Zaalima & More
            </p>
            <p className="video-suggestion-channel-name">Channel Name</p>
            <p className="video-suggestion-stats">
              1M views <span class="dot">.</span> 1 month ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
