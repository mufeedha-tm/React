import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function ChartBar({ dataPoints, labels }) {
  const data = {
    labels: labels || ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets: [{ data: dataPoints || [60,50,80,75,55,48,36], barPercentage: 0.6 }]
  };
  return <Bar data={data} options={{ responsive: true, plugins:{ legend:{ display:false } } }} />;
}
