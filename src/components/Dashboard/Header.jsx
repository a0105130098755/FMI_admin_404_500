import React from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm">
      <h1 className="h4 mb-0">Dashboard</h1>
      <div className="d-flex align-items-center">
        <Switch
          checked={darkMode}
          onChange={setDarkMode}
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
