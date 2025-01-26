import React from 'react'
import SideNavbar from '../../components/SideNavbar/SideNavbar'
import './Home.css'

const Home = ({ sideNavBar }) => {
  return (
    <div className='home'>
      <SideNavbar sideNavBar={sideNavBar} />

    </div>
  )
}

export default Home;