import React, { useState } from "react";

const ProgressChecklist = ({ tasks: initialTasks, onUpdate }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: task.status === "completed" ? "pending" : "completed",
          }
        : task
    );
    setTasks(updatedTasks);
    if (onUpdate) onUpdate(updatedTasks);
  };

  const completedCount = tasks.filter((t) => t.status === "completed").length;
  const totalCount = tasks.length;
  const percent =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  return (
    <div>
      <h3 className="text-lg font-semibold text-[#4a4a4a] mb-4">✅ Progress</h3>
      <ul className="mb-4 space-y-2 max-h-48 overflow-y-auto">
        {tasks.map(({ id, description, status }) => (
          <li key={id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={status === "completed"}
              onChange={() => toggleTask(id)}
              className="w-5 h-5 cursor-pointer"
              aria-label={`Mark ${description} as completed`}
            />
            <span
              className={
                status === "completed" ? "line-through text-gray-500" : ""
              }
            >
              {description}
            </span>
          </li>
        ))}
      </ul>

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="mt-2 text-gray-600 font-semibold">
        {completedCount} / {totalCount} completed ({percent}%)
      </p>
    </div>
  );
};

export default ProgressChecklist;
