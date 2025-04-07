import { useState, useEffect } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Resume from "./Components/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import ForMobile from "./Components/ForMobile";
import Certificate from "./Components/Certificate";
import Home from "./Components/Home";

function App() {
  const [show, setShow] = useState(false);
  const [darkmode, setDarkmode] = useState("dark"); 
  const [bgcolor, setBgcolor] = useState("black");  
  const [cross, setCross] = useState(false);

  useEffect(() => {
    if (darkmode === "dark") {
      document.body.style.backgroundImage =
        "url(https://i.pinimg.com/564x/37/24/db/3724db00677625d737f96f8faf8e31de.jpg)";
      document.body.style.width = "100%";
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundImage =
        "url(./Components/SocialLinks/background.jpg)";
      document.body.style.backgroundColor = "white";
    }
  }, [darkmode]);

  const handleclick = () => {
    setShow(true);
    setCross(true);
  };

  const handleremove = () => {
    setCross(false);
    setShow(false);
  };

  const handleDarkMode = () => {
    if (darkmode === "light") {
      setDarkmode("dark");
      setBgcolor("black");
    } else {
      setDarkmode("light");
      setBgcolor("white");
    }
  };

  return (
    <>
      <BrowserRouter>
        <ForMobile
          show={show}
          setShow={setShow}
          darkmode={darkmode}
          setDarkmode={setDarkmode}
          handleDarkMode={handleDarkMode}
          cross={cross}
          setCross={setCross}
          handleclick={handleclick}
          handleremove={handleremove}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                show={show}
                setShow={setShow}
                darkmode={darkmode}
                setDarkmode={setDarkmode}
                bgcolor={bgcolor}
                handleDarkMode={handleDarkMode}
                cross={cross}
                setCross={setCross}
                handleclick={handleclick}
                handleremove={handleremove}
              />
            }
          >
            <Route
              index
              element={<About bgcolor={bgcolor} darkmode={darkmode} />}
            />

            {/* Uncomment if needed */}
            {/* <Route
              path="/Resume"
              element={<Resume bgcolor={bgcolor} darkmode={darkmode} />}
            /> */}

            <Route
              path="/Contact"
              element={<Contact bgcolor={bgcolor} darkmode={darkmode} />}
            />

            <Route
              path="/Projects"
              element={<Projects bgcolor={bgcolor} darkmode={darkmode} />}
            />

            <Route
              path="/Certify"
              element={<Certificate bgcolor={bgcolor} darkmode={darkmode} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
