import Navbar from "../components/Navbar";
import StatisticsChart from "../components/StatisticsChart";
import AppointmentCard from "../components/AppointmentCard";
import HealthCard from "../components/HealthCard";

export default function Dashboard() {
  return (
    <div className="flex-1 p-8 bg-[#f7f7f7]">
      <Navbar />

      <h1 className="text-5xl font-bold mt-5 text-gray-800">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome back, Jerry
      </p>

      <div className="flex justify-end gap-2 mt-3">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
          Daily goal left
        </span>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
          Daily goal left
        </span>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
          Daily goal left
        </span>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-8">
        <div className="col-span-2">
          <StatisticsChart />
        </div>

        <AppointmentCard />
      </div>

      <div className="grid grid-cols-3 gap-8 mt-10">
        <HealthCard
          title="Heart Rate"
          value="72"
          unit="Bpm"
          color="green"
        />

        <HealthCard
          title="Blood Sugar"
          value="110"
          unit="mg/dl"
          color="red"
        />

        <HealthCard
          title="Blood Pressure"
          value="118/78"
          unit="mmHg"
          color="blue"
        />
      </div>
    </div>
  );
}