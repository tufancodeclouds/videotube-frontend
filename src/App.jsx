import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [sideNavBar, setSideNavBar] = useState(true);

  const setSideNavBarFunc = (value) => {
    setSideNavBar(value);
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Navbar setSideNavBarFunc={setSideNavBarFunc} sideNavBar={sideNavBar} />

      <AppRoutes sideNavBar={sideNavBar} />
    </>
  );
}

export default App;
