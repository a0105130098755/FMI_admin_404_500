import React, { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import "./Dashboard.css";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="header">
      <h1>Dashboard</h1>
      <div className="toggle-switch">
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          className={`${
            darkMode ? "bg-dark" : "bg-secondary"
          } position-relative d-inline-flex align-items-center h-6 rounded-pill w-11`}
        >
          <span className="sr-only">Toggle Dark Mode</span>
          <span
            className={`${
              darkMode ? "translate-x-6" : "translate-x-1"
            } d-inline-block w-4 h-4 bg-white rounded-circle transition-transform`}
          />
        </Switch>
        {darkMode ? (
          <MoonIcon className="w-5 h-5 text-dark ml-2" />
        ) : (
          <SunIcon className="w-5 h-5 text-dark ml-2" />
        )}
      </div>
    </header>
  );
};

export default Header;
