// src/components/StudyPlanCard.jsx
import React from "react";

const StudyPlanCard = ({ studyPlan }) => (
  <section>
    <h2 className="text-xl font-semibold text-[#4a4a4a] mb-4">🧠 Study Plan</h2>
    {studyPlan.length > 0 ? (
      <ul className="text-gray-700 list-disc list-inside space-y-1">
        {studyPlan.map(({ subject, duration }, i) => (
          <li key={i}>
            {subject} · {duration} min
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-600">No subjects scheduled</p>
    )}
  </section>
);

export default StudyPlanCard;
