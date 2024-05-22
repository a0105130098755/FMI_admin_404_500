import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import OverviewChart from "./OverviewChart";
import UserData from "./UserData";
import ApiUsageChart from "./ApiUsageChart";
import UserChart from "./UserChart";
import ChartComponent from "./ChartComponent"; // 추가된 컴포넌트
import "./Dashboard.css";

const Dashboard = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="content-grid">
          <div className="content-card">
            <OverviewChart darkMode={darkMode} />
          </div>
          <div className="content-card">
            <ApiUsageChart darkMode={darkMode} />
          </div>
          <div className="content-card">
            <UserData darkMode={darkMode} />
          </div>
          <div className="content-card">
            <UserChart darkMode={darkMode} />
          </div>
          <div className="content-card">
            <ChartComponent darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
