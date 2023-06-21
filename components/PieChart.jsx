import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({ chartData }) {
  const labelArray = chartData.map(({ _id }) => _id);
  const dataArray = chartData.map(({ count }) => count);
  const data = {
    labels: labelArray,
    datasets: [
      {
        label: "Repositories",
        data: dataArray,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(39, 37, 35, 0.2)",
          "rgba(80, 67, 54, 0.2)",
          "rgba(9, 70, 27, 0.2)",
          "rgba(53, 12, 114, 0.2)",
          "rgba(22, 200, 236, 0.2)",
          "rgba(236, 9, 9, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
}
