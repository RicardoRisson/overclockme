import React, { useState } from "react";
import TimeInput from "./TimeInput";
import GreenButton from "./GreenButton";

const parseTime = (str) => {
  if (str.length !== 4) return null;
  const h = parseInt(str.substring(0, 2), 10);
  const m = parseInt(str.substring(2, 4), 10);
  if (isNaN(h) || isNaN(m)) return null;
  if (h < 0 || h > 23 || m < 0 || m > 59) return null;
  return h * 60 + m;
};

const formatDuration = (mins) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${m}m`;
};

const TimeSlotsInput = () => {
  const [slots, setSlots] = useState([{ start: "", end: "" }]);
  const [errors, setErrors] = useState([]);

  const updateSlot = (index, field, val) => {
    const newSlots = [...slots];
    newSlots[index][field] = val;
    setSlots(newSlots);
    validateSlots(newSlots);
  };

  const addSlot = () => {
    const newSlots = [...slots, { start: "", end: "" }];
    setSlots(newSlots);
    validateSlots(newSlots);
  };

  const removeSlot = () => {
    if (slots.length === 1) return;
    const newSlots = slots.slice(0, -1);
    setSlots(newSlots);
    validateSlots(newSlots);
  };

  const validateSlots = (slotsToValidate) => {
    const newErrors = slotsToValidate.map(({ start, end }) => {
      const startMins = parseTime(start);
      const endMins = parseTime(end);
      if (!start || !end) return ""; // campo em branco, sem erro
      if (startMins === null || endMins === null) return "Invalid time format";
      if (endMins <= startMins) return "End time must be later than start time";
      return "";
    });
    setErrors(newErrors);
  };

  const totalMinutes = slots.reduce((acc, slot, i) => {
    const startMins = parseTime(slot.start);
    const endMins = parseTime(slot.end);
    if (
      startMins !== null &&
      endMins !== null &&
      endMins > startMins &&
      !errors[i]
    ) {
      return acc + (endMins - startMins);
    }
    return acc;
  }, 0);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[#4a4a4a]">
        Plan Your Study Time
      </h2>

      {slots.map((slot, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center gap-2 mb-4 w-full"
        >
          <div className="flex gap-4 justify-center w-full">
            <TimeInput
              label="Start"
              value={slot.start}
              onChange={(val) => updateSlot(i, "start", val)}
            />
            <TimeInput
              label="End"
              value={slot.end}
              onChange={(val) => updateSlot(i, "end", val)}
            />
          </div>
          {errors[i] && (
            <p className="text-red-500 text-sm mt-1">{errors[i]}</p>
          )}
        </div>
      ))}

      <div className="flex justify-end gap-2 mb-4 w-full max-w-md">
        <GreenButton
          onClick={removeSlot}
          className="w-8 h-8 px-0 py-0 text-lg font-bold flex justify-center items-center"
          aria-label="Remove last time slot"
          type="button"
          disabled={slots.length === 1}
        >
          −
        </GreenButton>
        <GreenButton
          onClick={addSlot}
          className="w-8 h-8 px-0 py-0 text-lg font-bold flex justify-center items-center"
          aria-label="Add time slot"
          type="button"
        >
          +
        </GreenButton>
      </div>

      <p className="text-center text-gray-600 font-semibold mt-6">
        Total available time: {formatDuration(totalMinutes)}
      </p>
    </>
  );
};

export default TimeSlotsInput;
