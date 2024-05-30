import React from "react";
import { Line } from "react-chartjs-2";
import useFetch from "../../hooks/useFetch";

const UserChart = ({ darkMode }) => {
  const { data, loading, error } = useFetch(
    "http://192.168.10.25:8181/api/admin/users"
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
        borderColor: "rgba(54, 162, 235, 1)",
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: darkMode ? "white" : "black", // 다크 모드에 따라 레전드 텍스트 색상 변경
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: darkMode ? "white" : "black", // 다크 모드에 따라 x축 텍스트 색상 변경
        },
        title: {
          display: true,
          text: "Date",
          color: darkMode ? "white" : "black", // 다크 모드에 따라 x축 제목 색상 변경
        },
      },
      y: {
        ticks: {
          color: darkMode ? "white" : "black", // 다크 모드에 따라 y축 텍스트 색상 변경
        },
        title: {
          display: true,
          text: "Number of Users",
          color: darkMode ? "white" : "black", // 다크 모드에 따라 y축 제목 색상 변경
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default UserChart;
