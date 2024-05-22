import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // CSS 파일을 불러옵니다.

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <div className="buttons">
          <Link to="/dashboard">HOME</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
