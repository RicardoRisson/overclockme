// src/hooks/useStudyData.js
import { useState, useEffect } from "react";

const MOCK_DATA = {
  calendar: [
    { day: "Mon", blocks: [{ subject: "Math", duration: 45 }] },
    {
      day: "Tue",
      blocks: [
        { subject: "Reading", duration: 20 },
        { subject: "Physics", duration: 30 },
      ],
    },
    // ... resto da semana
  ],
  studyPlan: [
    { subject: "Math", duration: 45 },
    { subject: "Reading", duration: 20 },
    { subject: "Physics", duration: 30 },
  ],
  progress: {
    completedTasks: 10,
    totalTasks: 15,
    studyHours: 8.5,
  },
  nextUp: ["Revise algebra basics", "Read chapter 3 of Physics book"],
};

export function useStudyData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simula delay de fetch API
    const timer = setTimeout(() => {
      setData(MOCK_DATA);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return data;
}
