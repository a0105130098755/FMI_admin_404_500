import React from "react";
import ReactDOM from "react-dom/client"; // ReactDOM from 'react-dom' -> 'react-dom/client'
import "./styles/index.css";
import "./styles/index.css";
import "./App.css";
import "./components/Dashboard/Dashboard.css";

import App from "./App";

// ReactDOM.render 대신 createRoot 사용
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
