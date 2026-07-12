import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function StatisticsChart() {
  const data = [
    { day: "Mon", green: 70, blue: 110, red: 120 },
    { day: "Tue", green: 100, blue: 150, red: 170 },
    { day: "Wed", green: 90, blue: 180, red: 180 },
    { day: "Thu", green: 60, blue: 150, red: 120 },
    { day: "Fri", green: 30, blue: 110, red: 100 },
    { day: "Sat", green: 40, blue: 90, red: 120 },
    { day: "Sun", green: 90, blue: 200, red: 160 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-5 h-[360px]">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">
          Statistics
        </h3>

        <div className="flex gap-4 text-xs">
          <span className="text-green-600">
            ● Heart Rate
          </span>

          <span className="text-blue-600">
            ● Blood Pressure
          </span>

          <span className="text-red-600">
            ● Blood Sugar
          </span>
        </div>
      </div>

      <ResponsiveContainer
        width="100%"
        height="90%"
      >
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="green"
            stroke="#55b938"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="blue"
            stroke="#246bff"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="red"
            stroke="#ef4444"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}