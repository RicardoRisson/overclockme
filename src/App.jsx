import React, { useState, useRef, useEffect } from "react";
import TextField from "./components/TextField";
import GreenButton from "./components/GreenButton";
import Title from "./components/Title";
import CircularProgress from "@mui/material/CircularProgress";

const App = () => {
  const [name, setName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Create ref for autofocus
  const nameInputRef = useRef(null);

  // Autofocus on component mount
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !apiKey.trim()) {
      setError("Please fill in all fields!");
      return;
    }
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Fake login successful!");
    }, 1000);
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
          <TextField
            label="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            inputRef={nameInputRef}
          />

          <TextField
            label="Gemini API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            helperText={
              <a
                href="https://ai.google.dev/gemini-api/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline"
              >
                Get your free API key here
              </a>
            }
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

export default App;
