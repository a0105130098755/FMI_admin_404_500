import React from "react";
import { Link } from "react-router-dom";
import "./InternalServerError.css";

const InternalServerError = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-400 text-black text-center">
      <h1 className="text-6xl font-bold mb-4">500</h1>
      <p className="text-2xl mb-8">Internal Server Error</p>
      <div className="space-x-4">
        <Link to="/" className="bg-black text-white py-2 px-4 rounded">
          Home
        </Link>
        <Link to="/contact" className="bg-black text-white py-2 px-4 rounded">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default InternalServerError;
