import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import LearningPrompt from "./pages/LearningPrompt";
import TimeSetup from "./pages/TimeSetup";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/learningprompt" element={<LearningPrompt />} />
      <Route path="/timesetup" element={<TimeSetup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
