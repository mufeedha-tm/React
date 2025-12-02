import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

export default function ChartPie({ dataPoints, labels }) {
  const data = {
    labels: labels || ["Support","Sales","Technical","Billing","Other"],
    datasets: [{ data: dataPoints || [35, 20, 20, 15, 10] }]
  };
  return <Pie data={data} options={{ responsive: true, plugins:{ legend:{ position:"bottom" } } }} />;
}
