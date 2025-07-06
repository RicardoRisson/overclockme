import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Title from "../components/Title";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, apiKey, prompt } = location.state || {};

  if (!name || !apiKey || !prompt) {
    navigate("/", { replace: true });
    return null;
  }

  return (
    <div
      className="w-screen min-h-screen flex flex-col items-center py-12 px-4"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='white'/%3E%3Cpath d='M0 0L40 40M40 0L0 40' stroke='%23d1d5db' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundColor: "#f0f2f5",
      }}
    >
      {/* Top bar */}
      <div className="bg-white shadow-md rounded-xl px-6 py-3 mb-6 w-full max-w-4xl flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#4a4a4a]">OverclockMe ⚡</h1>
      </div>

      {/* Calendar Section */}
      <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] rounded-xl p-6 w-full max-w-4xl mb-6">
        <h2 className="text-xl font-semibold text-[#4a4a4a] mb-4">
          📅 Weekly Calendar
        </h2>
        <p className="text-gray-600 mb-2">
          Your scheduled study blocks will appear here.
        </p>
        <div className="h-32 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
          [calendar placeholder]
        </div>
      </div>

      {/* Study Queue Section */}
      <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] rounded-xl p-6 w-full max-w-4xl mb-6">
        <h2 className="text-xl font-semibold text-[#4a4a4a] mb-4">
          🧠 Study Plan
        </h2>
        <p className="text-gray-600 mb-2">
          Subjects and durations you'll follow:
        </p>
        <ul className="text-gray-700 list-disc list-inside">
          <li>Math · 45 min</li>
          <li>Reading · 20 min</li>
          <li>Physics · 30 min</li>
        </ul>
      </div>

      {/* Bottom Section with two columns */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[#4a4a4a] mb-2">
            ✅ Progress
          </h3>
          <p className="text-gray-600">
            Your completed tasks and study stats will appear here.
          </p>
        </div>

        <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.1)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[#4a4a4a] mb-2">
            📚 Next Up
          </h3>
          <p className="text-gray-600">
            AI-generated suggestions and upcoming studies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
