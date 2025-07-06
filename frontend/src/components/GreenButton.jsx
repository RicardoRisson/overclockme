import React from "react";

const GreenButton = ({ onClick, children, disabled, type }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`w-full max-w-[200px] px-6 py-2 text-white font-bold rounded-full transition duration-200 ${
      disabled
        ? "bg-gray-300 cursor-not-allowed"
        : "bg-[#4a4a4a] hover:bg-[#3a3a3a]"
    }`}
  >
    {children}
  </button>
);

export default GreenButton;
