import React from "react";
import "./SideNavbar.css";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ContentCutIcon from '@mui/icons-material/ContentCut';

const SideNavbar = ({ sideNavBar }) => {
  return (
    <div className={`home-sidenavbar ${!sideNavBar ? "home-sidenavbarhide" : ""}`}>
        <div className="home-sidenavbartop">
            <div className="home-sidenavbartopoption">
                <HomeIcon />
                <p className="home-sidenavbartopoptiontitle">Home</p>
            </div>

            <div className="home-sidenavbartopoption">
                <VideocamIcon />
                <p className="home-sidenavbartopoptiontitle">Shorts</p>
            </div>

            <div className="home-sidenavbartopoption">
                <SubscriptionsIcon />
                <p className="home-sidenavbartopoptiontitle">Subscriptions</p>
            </div>
        </div>

        <div className="home-sidenavbarmiddle">
            <div className="home-sidenavbartopoption">
                <p className="home-sidenavbartopoptiontitle">You</p>
                <ChevronRightIcon />
            </div>

            <div className="home-sidenavbartopoption">
                <RecentActorsIcon />
                <p className="home-sidenavbartopoptiontitle">Your channel</p>
            </div>

            <div className="home-sidenavbartopoption">
                <HistoryIcon />
                <p className="home-sidenavbartopoptiontitle">History</p>
            </div>

            <div className="home-sidenavbartopoption">
                <PlaylistAddIcon />
                <p className="home-sidenavbartopoptiontitle">Playlist</p>
            </div>

            <div className="home-sidenavbartopoption">
                <SmartDisplayOutlinedIcon />
                <p className="home-sidenavbartopoptiontitle">Your videos</p>
            </div>

            <div className="home-sidenavbartopoption">
                <WatchLaterOutlinedIcon />
                <p className="home-sidenavbartopoptiontitle">Watch later</p>
            </div>

            <div className="home-sidenavbartopoption">
                <ThumbUpAltOutlinedIcon />
                <p className="home-sidenavbartopoptiontitle">Liked videos</p>
            </div>

            <div className="home-sidenavbartopoption">
                <ContentCutIcon />
                <p className="home-sidenavbartopoptiontitle">Your clips</p>
            </div>
        </div>

        <div className="home-sidenavbarmiddle">
            <div className="home-sidenavbartopoption">
                <p className="home-sidenavbartopoptiontitleheader">Subscription</p>
                
            </div>

            <div className="home-sidenavbartopoption">
                <img className="home-sidenavbarimglogo" src="https://www.medianews4u.com/wp-content/uploads/2020/04/Aaj-Tak-2.jpg" alt="" />
                <p className="home-sidenavbartopoptiontitle">Aaj Tak</p>
            </div>

            <div className="home-sidenavbartopoption">
                <img className="home-sidenavbarimglogo" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201911/New-Logo-For-Print-_1_-770.jpeg" alt="" />
                <p className="home-sidenavbartopoptiontitle">The Lallantop</p>
            </div>

            <div className="home-sidenavbartopoption">
                <img className="home-sidenavbarimglogo" src="https://sabrangindia.in//sites/default/files/ndtv_1.jpg" alt="" />
                <p className="home-sidenavbartopoptiontitle">NDTV India</p>
            </div>
        </div>
    </div>
  )
}

export default SideNavbar;