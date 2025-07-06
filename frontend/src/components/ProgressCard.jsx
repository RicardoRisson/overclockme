// src/components/ProgressCard.jsx
import React from "react";

const ProgressCard = ({ progress }) => {
  if (!progress) return null;

  const { completedTasks, totalTasks, studyHours } = progress;
  const percent = Math.round((completedTasks / totalTasks) * 100);

  return (
    <section className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-6">
      <h3 className="text-lg font-semibold text-[#4a4a4a] mb-4">✅ Progress</h3>
      <p className="mb-2">
        Completed Tasks: <strong>{completedTasks}</strong> / {totalTasks} (
        {percent}%)
      </p>
      <p>
        Total Study Hours: <strong>{studyHours.toFixed(1)}</strong>h
      </p>
      <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </section>
  );
};

export default ProgressCard;
