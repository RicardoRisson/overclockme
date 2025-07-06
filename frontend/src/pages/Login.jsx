import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import GreenButton from "../components/GreenButton";
import CircularProgress from "@mui/material/CircularProgress";

const BACKEND_URL = "http://localhost:8000"; // Ajuste conforme backend

const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !apiKey.trim()) {
      setError("Please fill in all fields!");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, api_key: apiKey }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.detail || "Failed to login");
      }

      // Login ok, navega para a próxima tela
      navigate("/learningprompt", { state: { name, apiKey } });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='white'/%3E%3Cpath d='M0 0L40 40M40 0L0 40' stroke='%23d1d5db' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundColor: "#f0f2f5",
      }}
    >
      <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-8 w-full max-w-md flex flex-col items-center">
        <Title>OverclockMe</Title>

        <p className="text-gray-600 text-center mb-6">
          Just enter your name and Gemini API key to start.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <input
            ref={nameInputRef}
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#4a4a4a]"
          />

          <input
            type="text"
            placeholder="Gemini API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#4a4a4a]"
          />

          {error && <p className="text-red-600 font-semibold mb-4">{error}</p>}

          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <GreenButton
              type="submit"
              disabled={!name.trim() || !apiKey.trim()}
              className="w-full max-w-[200px]"
            >
              Start
            </GreenButton>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
