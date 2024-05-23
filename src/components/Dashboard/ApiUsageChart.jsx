import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import useFetch from "../../hooks/useFetch";

const ApiUsageChart = ({ darkMode }) => {
  const { data, loading, error } = useFetch(
    "http://localhost:8181/api/admin/api-usage"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const chartData = {
    labels: ["Week #1", "Week #2", "Week #3", "Week #4"],
    datasets: [
      {
        label: "This Month",
        data: data?.thisMonthData || [],
        borderColor: darkMode ? "white" : "purple",
        backgroundColor: "rgba(128, 0, 128, 0.2)",
      },
      {
        label: "Last Month",
        data: data?.lastMonthData || [],
        borderColor: darkMode ? "lightgrey" : "pink",
        backgroundColor: "rgba(255, 192, 203, 0.2)",
      },
      {
        label: "2 Month Ago",
        data: data?.twoMonthsAgoData || [],
        borderColor: darkMode ? "grey" : "black",
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
      <h2 className="card-title">API Usage Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ApiUsageChart;
