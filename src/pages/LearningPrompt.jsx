import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GreenButton from "../components/GreenButton";
import Title from "../components/Title";
import CircularProgress from "@mui/material/CircularProgress";

const LearningPrompt = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, apiKey } = location.state || {};

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  if (!name || !apiKey) {
    navigate("/", { replace: true });
    return null;
  }

  const handleContinue = () => {
    if (!prompt.trim()) {
      alert("Please describe what you want to learn!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/timesetup", { state: { name, apiKey, prompt } });
    }, 1000);
  };

  return (
    <div
      className="w-screen min-h-screen flex flex-col items-center justify-center p-8"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='white'/%3E%3Cpath d='M0 0L40 40M40 0L0 40' stroke='%23d1d5db' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundColor: "#f0f2f5",
      }}
    >
      <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-8 max-w-md w-full flex flex-col items-center">
        <Title>What do you want to learn?</Title>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={6}
          placeholder="Just write what you need to learn and any exact materials or videos you plan to watch. If unsure, leave it to us!"
          className="w-full border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#4a4a4a]"
        />
        {loading ? (
          <div className="mt-10 flex justify-center w-full max-w-[200px]">
            <CircularProgress color="inherit" size={24} />
          </div>
        ) : (
          <div className="mt-10 w-full max-w-[200px]">
            <GreenButton onClick={handleContinue} className="w-full">
              Continue
            </GreenButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPrompt;
