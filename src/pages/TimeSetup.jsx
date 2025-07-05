import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GreenButton from "../components/GreenButton";
import Title from "../components/Title";
import TimeSlotsInput from "../components/TimeSlotsInput";

const TimeSetup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { name, apiKey, prompt } = location.state || {};

  if (!name || !apiKey || !prompt) {
    navigate("/", { replace: true });
    return null;
  }

  const handleContinue = () => {
    // Aqui pode salvar tudo em context ou localStorage se quiser
    navigate("/dashboard", { state: { name, apiKey, prompt } });
  };

  return (
    <div
      className="w-screen min-h-screen flex justify-center items-center py-12"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='white'/%3E%3Cpath d='M0 0L40 40M40 0L0 40' stroke='%23d1d5db' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-8 w-full max-w-md flex flex-col items-center"
        style={{ marginTop: 40, marginBottom: 40 }}
      >
        <Title>Plan Your Study Time</Title>
        <p className="text-gray-600 text-center max-w-sm mb-6">
          Just tell us your free time, and we’ll handle the rest!
        </p>

        <TimeSlotsInput />

        <GreenButton
          onClick={handleContinue}
          className="mt-6 w-full max-w-[200px]"
        >
          Continue
        </GreenButton>
      </div>
    </div>
  );
};

export default TimeSetup;
