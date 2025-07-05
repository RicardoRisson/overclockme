// src/components/CalendarCard.jsx
import React from "react";

const CalendarCard = ({ calendar }) => (
  <section>
    <h2 className="text-xl font-semibold text-[#4a4a4a] mb-4">
      📅 Weekly Calendar
    </h2>
    <div className="grid grid-cols-7 gap-2">
      {calendar.map(({ day, blocks }, i) => (
        <div key={i} className="border border-gray-300 rounded-md p-2">
          <h3 className="font-semibold text-center mb-2">{day}</h3>
          {blocks.length > 0 ? (
            blocks.map((block, j) => (
              <div
                key={j}
                className="bg-blue-200 text-blue-900 text-xs rounded px-2 py-1 mb-1"
                title={`${block.subject} - ${block.duration} min`}
              >
                {block.subject} · {block.duration} min
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center text-xs">No study blocks</p>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default CalendarCard;
