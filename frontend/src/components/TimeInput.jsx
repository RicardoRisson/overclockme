import React, { useRef } from "react";

const TimeInput = ({ label, value, onChange }) => {
  const inputsRef = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInput = (e, idx) => {
    const val = e.target.value;
    if (!/^\d?$/.test(val)) return; // só dígito ou vazio

    const newValue = value.substring(0, idx) + val + value.substring(idx + 1);

    onChange(newValue);

    if (val && idx < 3) {
      inputsRef[idx + 1].current.focus();
    }
  };

  return (
    <div className="flex flex-col mb-2 w-full max-w-xs">
      <label className="mb-1 font-semibold text-[#4a4a4a]">{label}</label>
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3].map((i) => (
          <React.Fragment key={i}>
            {i === 2 && (
              <span className="text-[#4a4a4a] font-bold select-none text-xl">
                :
              </span>
            )}
            <input
              type="text"
              inputMode="numeric"
              maxLength={1}
              ref={inputsRef[i]}
              value={value[i] || ""}
              onChange={(e) => handleInput(e, i)}
              className="w-8 h-10 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4a4a4a]"
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TimeInput;
