import React from "react";
import { Link } from "react-router-dom";
import "./InternalServerError.css";

const InternalServerError = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>500</h1>
        <p>
          Oops! Our server seems to be taking a break. Please try again later.
        </p>
        <div className="buttons">
          <Link to="/dashboard">HOME</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default InternalServerError;
