import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getAllUsers } from "../../services/api";

const UserChart = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllUsers();
        const users = response.data;

        if (!users || !Array.isArray(users)) {
          throw new Error("Invalid user data");
        }

        const chartData = {
          labels: users.map((user) =>
            new Date(user.joinDate).toLocaleDateString()
          ), // Assuming joinDate is in ISO format
          datasets: [
            {
              label: "Number of Users",
              data: users.map((_, index) => index + 1), // Cumulative count of users
              backgroundColor: "rgba(54, 162, 235, 0.6)",
            },
          ],
        };

        setData(chartData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Error fetching user data");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return Object.keys(data).length === 0 ? (
    <div>Loading...</div>
  ) : (
    <Line data={data} />
  );
};

export default UserChart;
