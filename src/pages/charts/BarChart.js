import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const [productData, setProductData] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);

        // Assuming your data is an array of objects
        const labels = data.map((item) => item.website);
        const dataValues = data.map((item) => item.name.length);

        // Setting up chart data
        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Data",
              data: dataValues,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((err) => console.log(err));
  }, []);

  // Configuration options for the bar chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Product Data",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 15,
              stepSize: 1,
            },
          },
        ],
      },
    },
  };

  return (
    <>
      {chartData.labels ? (
        <Bar data={chartData} options={options} className="" />
      ) : (
        "Loading..."
      )}
    </>
  );
}
