import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ selectedProduct }) {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (selectedProduct) {
      const dataValues = [selectedProduct.name.length];
      const labels = [selectedProduct.website];

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Product Name Length",
            data: dataValues,
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    }
  }, [selectedProduct]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Selected Product Data",
      },
    },
  };

  return (
    <>
      {chartData.labels ? (
        <Pie data={chartData} options={options} />
      ) : (
        "Select a product to see the chart."
      )}
    </>
  );
}
