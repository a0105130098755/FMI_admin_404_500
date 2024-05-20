import React from "react";
import { Line } from "react-chartjs-2";

const OverviewChart = () => {
  const data = {
    labels: ["Week #1", "Week #2", "Week #3", "Week #4"],
    datasets: [
      {
        label: "This Month",
        data: [10, 20, 30, 40],
        borderColor: "purple",
        backgroundColor: "rgba(128, 0, 128, 0.2)",
      },
      {
        label: "Last Month",
        data: [15, 25, 35, 45],
        borderColor: "pink",
        backgroundColor: "rgba(255, 192, 203, 0.2)",
      },
      {
        label: "2 Month Ago",
        data: [5, 15, 25, 35],
        borderColor: "white",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
    ],
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Overview</h2>
      <Line data={data} />
    </div>
  );
};

export default OverviewChart;
