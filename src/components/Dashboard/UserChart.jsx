import React from "react";
import { Line } from "react-chartjs-2";
import useFetch from "../../hooks/useFetch";

const UserChart = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8181/api/admin/users"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const chartData = {
    labels: data.map((user) => new Date(user.joinDate).toLocaleDateString()),
    datasets: [
      {
        label: "Number of Users",
        data: data.map((_, index) => index + 1),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return <Line data={chartData} />;
};

export default UserChart;
