import React, { useRef, useEffect } from "react";
import { Chart, Line } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OverviewChart = () => {
  const chartRef = useRef(null);
  let myChart;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (myChart) {
      myChart.destroy();
    }

    myChart = new Chart(ctx, {
      type: "line",
      data: {
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
      },
      options: {
        scales: {
          x: {
            type: "category",
          },
        },
      },
    });

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default OverviewChart;
