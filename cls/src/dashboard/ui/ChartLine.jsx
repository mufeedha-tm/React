import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

export default function ChartLine({ dataPoints, labels }) {
  const data = {
    labels: labels || ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: "Tickets",
        data: dataPoints || [100,150,300,120,400,320,420,360,480,510,580,620],
        tension: 0.3,
        fill: true,
        borderWidth: 2
      }
    ]
  };
  return <Line data={data} options={{ responsive: true, plugins:{ legend:{ display:false } } }} />;
}
