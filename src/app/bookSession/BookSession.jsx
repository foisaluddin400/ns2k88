"use client";
import React, { useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Navigate } from "@/components/Navigate";
import BagIcon from "./BagIcon";

/* ===== CALENDAR DATA ===== */
const availableDays = [2, 6, 12, 13, 18, 21, 23, 24, 25, 26, 28];

const bookedSlots = {
  "2026-01-12": ["10:00 AM", "12:00 PM"],
  "2026-01-13": ["09:00 AM", "11:00 AM", "04:00 PM"],
  "2026-01-18": ["02:00 PM"],
};

const BookSession = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(dayjs("2026-01-01"));

  const daysInMonth = currentMonth.daysInMonth();
  const monthLabel = currentMonth.format("MMMM YYYY");

  const previousMonth = () =>
    setCurrentMonth((p) => p.subtract(1, "month"));
  const nextMonth = () =>
    setCurrentMonth((p) => p.add(1, "month"));

  const formattedDate = selectedDate
    ? dayjs(selectedDate).format("YYYY-MM-DD")
    : null;

  return (
    <div className="-mt-20 -mb-16">
      <Navigate />

      <h2 className="text-xl font-semibold mb-4">
        Book a Session
      </h2>

      {/* ===== CALENDAR (SAME DESIGN) ===== */}
      <div className="bg-white rounded-[16px] border p-6 mb-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{monthLabel}</h2>

          <div className="flex gap-2">
            <button
              onClick={previousMonth}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextMonth}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 gap-3 text-center text-sm mb-2">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
            <span key={d} className="text-gray-400">
              {d}
            </span>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-3 text-center text-sm">
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const date = currentMonth.date(day);
            const dateStr = date.format("YYYY-MM-DD");

            const isAvailable =
              availableDays.includes(day) || bookedSlots[dateStr];

            const isSelected =
              selectedDate &&
              dayjs(selectedDate).isSame(date, "day");

            return (
              <button
                key={day}
                onClick={() =>
                  isAvailable && setSelectedDate(date.toDate())
                }
                className={`h-9 w-9 rounded-full flex items-center justify-center relative
                  ${
                    isSelected
                      ? "bg-[#0A7676] text-white"
                      : "hover:bg-gray-100"
                  }
                  ${!isAvailable ? "opacity-30 cursor-not-allowed" : ""}
                `}
              >
                {day}

                {isAvailable && !isSelected && (
                  <span className="absolute bottom-1 w-1.5 h-1.5 bg-black rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ===== TIME SLOTS ===== */}
      {formattedDate && (
        <div className="mt-6">
          <h3 className="text-gray-500 mb-2">
            Selected Date: {formattedDate}
          </h3>

          {bookedSlots[formattedDate]?.length ? (
            <div className="flex flex-wrap gap-2">
              {bookedSlots[formattedDate].map((time) => (
                <button
                  key={time}
                  className="border px-4 py-1 rounded-full text-sm"
                >
                  {time}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              No available time slots for this date
            </p>
          )}
        </div>
      )}

      {/* ===== SESSION LIST ===== */}
      <div className="space-y-3 mt-5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white border p-4 rounded-2xl flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <BagIcon />
              <div>
                <p className="text-xs text-[#A3A9B0] uppercase">
                  SESSION 0{i}
                </p>
                <p className="font-medium">
                  21-10-2025 7:00 PM
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        disabled
        className="w-full mt-6 bg-gray-200 text-gray-500 py-3 rounded-xl"
      >
        Book this session Slot
      </button>

      <Link href="/booked-done">
        <button className="w-full mt-6 bg-[#0A7676] text-white py-3 rounded-xl font-semibold">
          Save & Continue
        </button>
      </Link>
    </div>
  );
};

export default BookSession;
