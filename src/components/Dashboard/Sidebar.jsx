import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ChartBarIcon,
  BellIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline"; // 경로 수정

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full flex flex-col">
      <div className="p-4 text-xl font-bold">Logo</div>
      <nav className="flex-grow">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              activeClassName="bg-gray-900"
              className="block py-2.5 px-4 hover:bg-gray-700"
            >
              <HomeIcon className="w-5 h-5 inline-block mr-2" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              activeClassName="bg-gray-900"
              className="block py-2.5 px-4 hover:bg-gray-700"
            >
              <ChartBarIcon className="w-5 h-5 inline-block mr-2" /> Stats
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notifications"
              activeClassName="bg-gray-900"
              className="block py-2.5 px-4 hover:bg-gray-700"
            >
              <BellIcon className="w-5 h-5 inline-block mr-2" /> Notifications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              activeClassName="bg-gray-900"
              className="block py-2.5 px-4 hover:bg-gray-700"
            >
              <CogIcon className="w-5 h-5 inline-block mr-2" /> Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              activeClassName="bg-gray-900"
              className="block py-2.5 px-4 hover:bg-gray-700"
            >
              <QuestionMarkCircleIcon className="w-5 h-5 inline-block mr-2" />{" "}
              Help
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
