import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import About from "./components/About";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode activated");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated");
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        about="About us"
        mode={mode}
        toggleMode={toggleMode} // Ensure this prop name matches the function name
      />
      <Alert alert={alert} />
      <div className="container my-5">
      <Routes>
          <Route exact path="/about" element = {<About />}>
            
          </Route>
          <Route exact path="/" element = {<TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode={mode} />}>
          
          </Route>

        </Routes>
        
      </div>
      </Router>
    </>
  );
}

export default App;
