import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getApiUsage } from "../../services/api";

const OverviewChart = ({ darkMode }) => {
  const data = {
    labels: ["Week #1", "Week #2", "Week #3", "Week #4"],
    datasets: [
      {
        label: "임정후",
        data: [12, 23, 38, 35],
        borderColor: darkMode ? "white" : "purple",
        backgroundColor: "rgba(128, 0, 128, 0.2)",
      },
      {
        label: "유승용",
        data: [10, 20, 32, 5],
        borderColor: darkMode ? "lightgrey" : "pink",
        backgroundColor: "rgba(255, 192, 203, 0.2)",
      },
      {
        label: "고명규",
        data: [10, 20, 29, 37],
        borderColor: darkMode ? "grey" : "black",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
      {
        label: "이헤원",
        data: [3, 12, 12, 12],
        borderColor: darkMode ? "darkgrey" : "blue",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: darkMode ? "white" : "black",
          font: {
            size: 14,
          },
        },
        display: true,
        position: "top",
        align: "start",
        padding: {
          top: 10,
          bottom: 10,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: darkMode ? "white" : "black",
        },
      },
      y: {
        ticks: {
          color: darkMode ? "white" : "black",
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 className="card-title">Overview</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default OverviewChart;
