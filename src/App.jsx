import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="bg-[#f4f5f7] min-h-screen p-3">
      <div className="flex bg-white rounded-3xl overflow-hidden shadow-lg">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;