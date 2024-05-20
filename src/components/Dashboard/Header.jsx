import React from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"; // 경로 수정

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center">
        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          className={`${
            darkMode ? "bg-purple-600" : "bg-gray-200"
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className="sr-only">Toggle Dark Mode</span>
          <span
            className={`${
              darkMode ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
        {darkMode ? (
          <MoonIcon className="w-6 h-6 text-yellow-300 ml-2" />
        ) : (
          <SunIcon className="w-6 h-6 text-yellow-500 ml-2" />
        )}
      </div>
    </header>
  );
};

export default Header;
