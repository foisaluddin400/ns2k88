"use client";

import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Navigate } from "@/components/Navigate";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const TIME_OPTIONS = Array.from({ length: 48 }, (_, i) => {
  const hours = Math.floor(i / 2);
  const minutes = (i % 2) * 30;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
});

export default function AvailabilityForm() {
  const [sessionDuration] = useState(60);
  const [breakDuration, setBreakDuration] = useState(5);
  const [availability, setAvailability] = useState({
    Monday: { enabled: false, timeSlots: [] },
    Tuesday: { enabled: false, timeSlots: [] },
    Wednesday: {
      enabled: true,
      timeSlots: [
        { from: "12:00", until: "12:00" },
        { from: "12:00", until: "12:00" },
      ],
    },
    Thursday: { enabled: false, timeSlots: [] },
    Friday: { enabled: false, timeSlots: [] },
    Saturday: { enabled: false, timeSlots: [] },
    Sunday: { enabled: false, timeSlots: [] },
  });

  const toggleDay = (day) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        enabled: !prev[day].enabled,
      },
    }));
  };

  const updateTimeSlot = (day, index, field, value) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        timeSlots: prev[day].timeSlots.map((slot, i) =>
          i === index ? { ...slot, [field]: value } : slot
        ),
      },
    }));
  };

  const addTimeSlot = (day) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        timeSlots: [...prev[day].timeSlots, { from: "09:00", until: "17:00" }],
      },
    }));
  };

  const removeTimeSlot = (day, index) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        timeSlots: prev[day].timeSlots.filter((_, i) => i !== index),
      },
    }));
  };

  return (
    <div className="-mt-20 ">
      <Navigate></Navigate>
      <div className="">
        {/* Header */}
        <div className="mb-8 text-center mt-7">
          <h1 className="text-xl font-bold text-gray-900">Your availability</h1>
          <p className="mt-2 text-gray-500">
            Choose the days and times you are available for training sessions.
          </p>
        </div>

        {/* Session Duration */}
        <div className="">
          <h2 className="mb-4 text-sm  text-gray-900">Session duration</h2>
          <div className="flex mb-8 rounded-lg bg-white p-2 items-center gap-2 text-gray-700">
            <div className="">
              <Clock className="h-4 w-4 text-gray-400" />
            </div>
            <span>Duration {sessionDuration} mins</span>
          </div>
        </div>

        {/* Break Duration */}
        <div className="">
          <h2 className="mb-4 text-sm  text-gray-900">
            Break between sessions
          </h2>
          <div className="flex gap-3 mb-8 rounded-lg ">
            <button
              onClick={() => setBreakDuration(0)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                breakDuration === 0
                  ? "border border-black bg-white text-black"
                  : "bg-white text-black"
              }`}
            >
              0 mins
            </button>
            <button
              onClick={() => setBreakDuration(5)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                breakDuration === 5
                  ? "border-gray-900 bg-white text-black"
                  : "bg-white text-black"
              }`}
            >
              5 mins
            </button>
          </div>
        </div>

        {/* Availability Settings */}
        <div className="">
          <h2 className="mb-3 text-sm  text-gray-900">Set your availability</h2>

          {DAYS.map((day) => (
            <div
              key={day}
              className="mb-3 rounded-lg bg-white pt-2 pl-2 pb-[3px]"
            >
              {/* Day Toggle */}
              <div className=" mb-2  flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{day}</h3>
                <label className="inline-flex mt-[3px] mr-1 relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={availability[day].enabled}
                    onChange={() => toggleDay(day)}
                    className="peer sr-only"
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-amber-400 transition-all"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-all"></div>
                </label>
              </div>

              {/* Time Slots */}
              {availability[day].enabled && (
                <div className="space-y-4 rounded-lg bg-gray-50 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-600">
                        From
                      </label>
                      <select
                        value={availability[day].timeSlots[0]?.from || "12:00"}
                        onChange={(e) =>
                          updateTimeSlot(day, 0, "from", e.target.value)
                        }
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700"
                      >
                        {TIME_OPTIONS.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600">
                        Until
                      </label>
                      <select
                        value={availability[day].timeSlots[0]?.until || "12:00"}
                        onChange={(e) =>
                          updateTimeSlot(day, 0, "until", e.target.value)
                        }
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700"
                      >
                        {TIME_OPTIONS.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Time Slot List */}
                  {availability[day].timeSlots.map((slot, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg bg-white p-3"
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>
                          {slot.from} - {slot.until}
                        </span>
                      </div>
                      <button
                        onClick={() => removeTimeSlot(day, index)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}

                  {/* Add Time Slot */}
                  <button
                    onClick={() => addTimeSlot(day)}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-200 py-3 text-sm font-medium text-gray-700 hover:bg-gray-300 transition"
                  >
                    <Plus className="h-4 w-4" />
                    Add time slot
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <button className="w-full rounded-2xl bg-primary py-3 mt-3 text-base font-semibold text-white hover:bg-teal-700 transition">
          Continue
        </button>
      </div>
    </div>
  );
}

function Clock(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
