import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getApiUsage } from "../../services/api";

const ApiUsageChart = ({ darkMode }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getApiUsage();
        setChartData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const data = {
    labels: ["Week #1", "Week #2", "Week #3", "Week #4"],
    datasets: [
      {
        label: "This Month",
        data: chartData?.thisMonthData || [],
        borderColor: darkMode ? "white" : "purple",
        backgroundColor: "rgba(128, 0, 128, 0.2)",
      },
      {
        label: "Last Month",
        data: chartData?.lastMonthData || [],
        borderColor: darkMode ? "lightgrey" : "pink",
        backgroundColor: "rgba(255, 192, 203, 0.2)",
      },
      {
        label: "2 Month Ago",
        data: chartData?.twoMonthsAgoData || [],
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
      <h2 className="card-title">Api Usage Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ApiUsageChart;
