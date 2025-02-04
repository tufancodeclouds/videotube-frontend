import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'
import Profile from './pages/Profile/Profile'
import VideoUpload from './pages/VideoUpload/VideoUpload'

function App() {

  const [sideNavBar, setSideNavBar] = useState(true);

  const setSideNavBarFunc = (value) => {
    setSideNavBar(value)
  }

  return (
    <>
      <Navbar setSideNavBarFunc={setSideNavBarFunc} sideNavBar={sideNavBar} />
      <Routes>
        <Route path="/" element={<Home sideNavBar={sideNavBar} />} />
        <Route path="/watch/:id" element={<Video />} />
        <Route path="/user/:id" element={<Profile sideNavBar={sideNavBar} />} />
        <Route path="/:id/upload" element={<VideoUpload />} />
      </Routes>
    </>
  )
}

export default App
