import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

export default function HealthCard({
  title,
  value,
  unit,
  color,
}) {
  const data = [
    { v: 80 },
    { v: 30 },
    { v: 50 },
    { v: 20 },
    { v: 90 },
    { v: 60 },
    { v: 40 },
    { v: 15 },
    { v: 25 },
    { v: 10 },
    { v: 70 },
    { v: 20 },
    { v: 45 },
    { v: 30 },
    { v: 65 },
  ];

  const colors = {
    green: "#16a34a",
    red: "#dc2626",
    blue: "#2563eb",
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 h-[200px]">
      <div className="flex justify-between items-center">
        <h3 className="text-xs font-medium">
          {title}
        </h3>

        <span className="bg-indigo-500 text-white text-[10px] px-2 py-1 rounded-full">
          Today
        </span>
      </div>

      <div className="h-28 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id={`gradient-${color}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={colors[color]}
                  stopOpacity={0.9}
                />
                <stop
                  offset="95%"
                  stopColor={colors[color]}
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>

            <Area
              type="natural"
              dataKey="v"
              stroke={colors[color]}
              strokeWidth={3}
              fill={`url(#gradient-${color})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div
        className="text-4xl font-semibold"
        style={{ color: colors[color] }}
      >
        {value}

        <span className="text-xl ml-2">
          {unit}
        </span>
      </div>
    </div>
  );
}