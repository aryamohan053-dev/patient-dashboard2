import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default function ChartCard() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

    datasets: [
      {
        label: "Heart Rate",
        data: [100, 180, 160, 110, 100, 120, 170],
        borderColor: "green",
      },
      {
        label: "Blood Pressure",
        data: [120, 170, 180, 140, 100, 90, 210],
        borderColor: "blue",
      },
      {
        label: "Blood Sugar",
        data: [110, 180, 170, 120, 100, 120, 160],
        borderColor: "red",
      },
    ],
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-semibold mb-4">Statistics</h3>

      <Line data={data} />
    </div>
  );
}