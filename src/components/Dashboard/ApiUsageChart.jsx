import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getApiUsage } from "../../services/api";

const ApiUsageChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getApiUsage();
        const formattedData = {
          labels: ["Week #1", "Week #2", "Week #3", "Week #4"],
          datasets: [
            {
              label: "This Month",
              data: data?.thisMonthData ?? [],
              borderColor: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            },
            {
              label: "Last Month",
              data: data?.lastMonthData ?? [],
              borderColor: "pink",
              backgroundColor: "rgba(255, 192, 203, 0.2)",
            },
            {
              label: "2 Month Ago",
              data: data?.twoMonthsAgoData ?? [],
              borderColor: "white",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          ],
        };
        setChartData(formattedData);
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

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h2 className="text-xl font-bold mb-4">API Usage Overview</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ApiUsageChart;
