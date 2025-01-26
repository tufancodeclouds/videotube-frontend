import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'

function App() {

  const [sideNavBar, setSideNavBar] = useState(true);

  const setSideNavBarFunc = (value) => {
    setSideNavBar(value)
  }

  return (
    <>
      <Navbar setSideNavBarFunc={setSideNavBarFunc} sideNavBar={sideNavBar} />
      <Home sideNavBar={sideNavBar} />
    </>
  )
}

export default App
