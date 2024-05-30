import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ darkMode }) => {
  const lineData = {
    labels: [
      "9:00AM",
      "12:00AM",
      "3:00PM",
      "6:00PM",
      "9:00PM",
      "12:00PM",
      "3:00AM",
    ],
    datasets: [
      {
        label: "Open",
        data: [200, 400, 300, 500, 400, 600, 700],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        fill: true,
      },
      {
        label: "Click",
        data: [150, 300, 200, 400, 300, 500, 600],
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        fill: true,
      },
      {
        label: "Click Second Time",
        data: [100, 200, 150, 300, 200, 400, 500],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
        borderColor: "rgba(255, 206, 86, 1)",
        fill: true,
      },
    ],
  };

  const pieData = {
    labels: ["Open", "Click", "Usage"],
    datasets: [
      {
        data: [62, 32, 6],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: darkMode ? "white" : "black",
        },
      },
      title: {
        display: true,
        text: "Users Behavior (24 Hours performance)",
        color: darkMode ? "white" : "black",
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

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: darkMode ? "white" : "black",
        },
      },
      title: {
        display: true,
        text: "Email Statistics (Last Campaign Performance)",
        color: darkMode ? "white" : "black",
      },
    },
  };

  return (
    <div className="chart">
      <div className="chart-row">
        <div className="chart-column">
          <Line data={lineData} options={lineOptions} />
        </div>
        <div className="chart-column">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
