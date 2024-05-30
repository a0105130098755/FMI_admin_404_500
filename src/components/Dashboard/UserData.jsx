import React, { useMemo } from "react";
import useFetch from "../../hooks/useFetch";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserData = ({ darkMode }) => {
  const { data, loading, error } = useFetch(
    "http://192.168.10.25:8181/api/admin/users"
  );

  // 사용자 데이터를 가입 날짜별로 그룹화
  const chartData = useMemo(() => {
    if (!data) return null;

    const groupedByDate = data.reduce((acc, user) => {
      const joinDate = new Date(user.joinDate).toLocaleDateString();
      acc[joinDate] = (acc[joinDate] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(groupedByDate).sort(
      (a, b) => new Date(a) - new Date(b)
    );
    const counts = labels.map((date) => groupedByDate[date]);

    return {
      labels,
      datasets: [
        {
          label: "Number of Users",
          data: counts,
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          fill: true,
        },
      ],
    };
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      className={`p-4 rounded-lg ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">User Data</h2>
      <ul>
        {data.map((user) => (
          <li key={user.userId} className="mb-4">
            <p className="font-bold">{user.name}</p>
            <p>{user.email}</p>
            <p>Nickname: {user.nickname}</p>
            <p>Joined on: {new Date(user.joinDate).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
      {chartData && (
        <div className="chart-container">
          <Line
            data={chartData}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: darkMode ? "white" : "black",
                  },
                  display: true,
                  position: "top",
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: darkMode ? "white" : "black",
                  },
                  title: {
                    display: true,
                    text: "Date",
                    color: darkMode ? "white" : "black",
                  },
                },
                y: {
                  ticks: {
                    color: darkMode ? "white" : "black",
                  },
                  title: {
                    display: true,
                    text: "Number of Users",
                    color: darkMode ? "white" : "black",
                  },
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UserData;
