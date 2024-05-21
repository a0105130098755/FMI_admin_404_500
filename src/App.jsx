import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/AdminLogin";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/errors/NotFound";
import InternalServerError from "./components/errors/InternalServerError";
import "./styles/App.css"; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/500" element={<InternalServerError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
