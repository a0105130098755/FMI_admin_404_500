import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/AdminLogin";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/errors/NotFound";
import InternalServerError from "./components/errors/InternalServerError";
import "./styles/App.css"; // Ensure this path is correct

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            }
          />
          <Route path="/500" element={<InternalServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
