import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
export default function ChartComponent({param}:any) {
    const labels = Object.keys(param); 
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Powerstats',
          data: labels.map((key) => parseInt(param[key])),
          backgroundColor: 'rgba(255, 99, 132, 0.7)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
  return <Radar data={data} />;
};
