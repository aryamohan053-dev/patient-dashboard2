import {
  FiHome,
  FiFileText,
  FiCalendar,
  FiClock,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

export default function Sidebar() {
  const menu = [
    { icon: <FiHome />, name: "Dashboard" },
    { icon: <FiFileText />, name: "Health Reports" },
    { icon: <FiFileText />, name: "Prescription" },
    { icon: <FiCalendar />, name: "Appointments" },
    { icon: <FiClock />, name: "Medical History" },
    { icon: <FiFileText />, name: "Upcoming Tests" },
  ];

  return (
    <div className="w-64 bg-[#5B6FD8] text-white min-h-screen flex flex-col justify-between">
      <div>
        <div className="h-16"></div>

        <ul className="space-y-8 px-12 mt-10">
          {menu.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-sm cursor-pointer"
            >
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="px-12 pb-10">
        <div className="flex items-center gap-3 mb-8 text-sm">
          <FiSettings />
          Settings
        </div>

        <div className="flex items-center gap-3 text-sm">
          <FiLogOut />
          Log Out
        </div>

        <div className="mt-10 text-xs">
          <span>Light</span>
          <span className="mx-3 bg-green-400 px-3 py-1 rounded-full"></span>
          <span>Dark</span>
        </div>
      </div>
    </div>
  );
}