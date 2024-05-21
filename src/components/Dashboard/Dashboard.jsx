import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import OverviewChart from "./OverviewChart";
import UserData from "./UserData";
import ApiUsageChart from "./ApiUsageChart";
import UserChart from "./UserChart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
    } else {
      document.body.classList.remove("bg-dark", "text-white");
    }
  }, [darkMode]);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="main-content">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container-fluid">
          <div className="chart-row">
            <div className="chart-column">
              <div className="card">
                <div className="card-title">Overview</div>
                <OverviewChart />
              </div>
            </div>
            <div className="chart-column">
              <div className="card">
                <div className="card-title">API Usage Overview</div>
                <ApiUsageChart />
              </div>
            </div>
          </div>
          <div className="chart-row">
            <div className="chart-column">
              <div className="card">
                <div className="card-title">Users Behavior</div>
                <UserChart />
              </div>
            </div>
            <div className="chart-column">
              <div className="card">
                <div className="card-title">Email Statistics</div>
                <UserData />
              </div>
            </div>
          </div>
          <div className="chart-row">
            <div className="chart-column">
              <div className="card error-message">
                Error: axios is not defined
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
