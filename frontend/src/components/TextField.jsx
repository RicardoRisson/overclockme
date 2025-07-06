import React, { forwardRef } from "react";

const TextField = forwardRef(({ label, value, onChange, helperText }, ref) => {
  return (
    <div className="flex flex-col mb-4 w-full max-w-md">
      <label className="mb-2 font-semibold text-[#4a4a4a]">{label}</label>
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#4a4a4a]"
      />
      {helperText && <div className="text-center mt-1">{helperText}</div>}
    </div>
  );
});

export default TextField;
