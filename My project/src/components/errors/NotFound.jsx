import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page min-h-screen flex items-center justify-center bg-yellow-500 text-black text-center">
      <div className="not-found-content max-w-xl">
        <img src="/22.png" alt="Not Found" className="w-full h-auto mb-8" />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">
          Sorry, the page you're looking for doesn't exist
        </p>
        <div className="space-x-4">
          <Link to="/" className="bg-black text-white py-2 px-4 rounded">
            Home
          </Link>
          <Link to="/contact" className="bg-black text-white py-2 px-4 rounded">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
