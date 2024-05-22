import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ChartBarIcon,
  BellIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  AcademicCapIcon, // ClipboardListIcon 대신 AcademicCapIcon 사용
  PencilIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import "./Dashboard.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>FMI TIM</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              <HomeIcon className="icon" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/user-profile" activeClassName="active">
              <UserIcon className="icon" /> User Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/table-list" activeClassName="active">
              <AcademicCapIcon className="icon" /> Table List
            </NavLink>
          </li>
          <li>
            <NavLink to="/typography" activeClassName="active">
              <PencilIcon className="icon" /> Typography
            </NavLink>
          </li>
          <li>
            <NavLink to="/icons" activeClassName="active">
              <ChartBarIcon className="icon" /> Icons
            </NavLink>
          </li>
          <li>
            <NavLink to="/maps" activeClassName="active">
              <MapIcon className="icon" /> Maps
            </NavLink>
          </li>
          <li>
            <NavLink to="/notifications" activeClassName="active">
              <BellIcon className="icon" /> Notifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active">
              <CogIcon className="icon" /> Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/help" activeClassName="active">
              <QuestionMarkCircleIcon className="icon" /> Help
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
