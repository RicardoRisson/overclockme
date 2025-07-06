// src/components/NextUpCard.jsx
import React from "react";

const NextUpCard = ({ nextUp }) => (
  <section className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-6">
    <h3 className="text-lg font-semibold text-[#4a4a4a] mb-4">📚 Next Up</h3>
    {nextUp.length > 0 ? (
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {nextUp.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-600">No upcoming tasks</p>
    )}
  </section>
);

export default NextUpCard;
