import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import OverviewChart from "./OverviewChart";
import UserData from "./UserData";
import "./Dashboard.css";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="dashboard-container flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1 p-4 bg-gray-100 dark:bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card">
              <OverviewChart />
            </div>
            <div className="card md:col-span-2 lg:col-span-2">
              <UserData />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
