import React from 'react'
import './Profile.css'
import SideNavbar from '../../components/SideNavbar/SideNavbar'

const Profile = ({ sideNavBar }) => {
  return (
    <div className="profile">
      <SideNavbar sideNavBar={sideNavBar} />

      <div className={`profile-main ${!sideNavBar ? "profile-mainfullwidth" : ""}`}>
        Profile
      </div>
    </div>
  );
};

export default Profile