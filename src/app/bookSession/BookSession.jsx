"use client";
import React, { useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Navigate } from "@/components/Navigate";
import BagIcon from "./BagIcon";

const BookSession = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 9));

  // ❌ Sold / unavailable dates
  const soldDates = ["2026-01-10", "2026-01-15"];

  // ⚫ Already booked dates
  const bookedDates = ["2026-01-12", "2026-01-18"];

  // ⏰ Time slots by date
  const timeSlots = {
    "2026-01-12": ["10:00 AM", "12:00 PM"],
    "2026-01-13": ["09:00 AM", "11:00 AM", "04:00 PM"],
    "2026-01-18": ["02:00 PM"],
  };

  /* ================= CALENDAR LOGIC ================= */

  const getDaysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const getFirstDayOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const previousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = [];

  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const monthName = currentMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const formattedDate = selectedDate
    ? dayjs(selectedDate).format("YYYY-MM-DD")
    : null;

  /* ================================================== */

  return (
    <div className="-mt-20 -mb-20">
      <Navigate />

      <h2 className="text-xl font-semibold mb-4">Book a Session</h2>

      {/* ===== CUSTOM CALENDAR ===== */}
      <div className="rounded-lg border p-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">{monthName}</h2>
          <div className="flex gap-2">
            <button onClick={previousMonth} className="p-1">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={nextMonth} className="p-1">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Weekdays */}
        <div className="mb-4 grid grid-cols-7 gap-2 text-center text-sm">
          {["Mo", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            if (!day) return <div key={index} />;

            const dateObj = new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth(),
              day
            );

            const dateStr = dayjs(dateObj).format("YYYY-MM-DD");

            const isSold = soldDates.includes(dateStr);
            const isBooked = bookedDates.includes(dateStr);
            const isSelected =
              selectedDate &&
              dayjs(selectedDate).isSame(dateObj, "day");

            return (
              <button
                key={index}
                disabled={isSold}
                onClick={() => setSelectedDate(dateObj)}
                className={`p-3 rounded text-sm font-medium
                  ${isSold ? "bg-gray-200 text-gray-400" : ""}
                  ${isBooked ? "bg-black text-white" : ""}
                  ${isSelected ? "bg-primary text-white" : ""}
                `}
              >
                {day}
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

          {timeSlots[formattedDate]?.length ? (
            <div className="flex flex-wrap gap-2">
              {timeSlots[formattedDate].map((time) => (
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
                <p className="font-medium">21-10-2025 7:00 PM</p>
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
