function AppointmentCard() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="font-semibold text-lg mb-4">
        Next Appointment
      </h2>

      <img
        src="https://i.pravatar.cc/100"
        alt="doctor"
        className="rounded-full mx-auto"
      />

      <h3 className="text-center mt-3 font-semibold">
        Dr. Charles
      </h3>

      <p className="text-center text-gray-500">
        Cardiologist
      </p>

      <button className="w-full mt-4 bg-indigo-500 text-white py-2 rounded-lg">
        Book Appointment
      </button>
    </div>
  );
}

export default AppointmentCard;