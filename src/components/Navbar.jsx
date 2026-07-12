import {
  FiBell,
  FiMessageCircle,
  FiSearch,
} from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="relative">
        <FiSearch className="absolute top-3 left-3 text-gray-400" />

        <input
          type="text"
          placeholder="Search Transactions"
          className="pl-10 py-2 w-64 border rounded"
        />
      </div>

      <div className="flex items-center gap-6">
        <FiMessageCircle size={20} />

        <div className="relative">
          <FiBell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 h-2 w-2 rounded-full"></span>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/50"
            alt=""
            className="rounded-full"
          />

          <div>
            <h3 className="font-semibold">
              Jerry Jacob
            </h3>

            <p className="text-xs text-gray-500">
              user@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}