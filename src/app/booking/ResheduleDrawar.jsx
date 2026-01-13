"use client";

import React, { useState } from "react";
import { Drawer } from "antd";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";

const ResheduleDrawer = ({ open, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 0));

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

  // ========== Calendar Logic ==========
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const monthName = currentMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const prevMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  const nextMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );

  const formattedDate = selectedDate
    ? dayjs(selectedDate).format("YYYY-MM-DD")
    : null;

  // ========== Touch Handlers for Drag Down ==========
  const [startY, setStartY] = useState(null);
  const handleTouchStart = (e) => setStartY(e.touches[0].clientY);
  const handleTouchMove = (e) => {
    if (!startY) return;
    if (e.touches[0].clientY - startY > 80) {
      onClose();
      setStartY(null);
    }
  };
  const handleTouchEnd = () => setStartY(null);

  // =============================================

  return (
    <Drawer
      placement="bottom"
      height="70%"
      open={open}
      onClose={onClose}
      closable={false}
      className="app-drawer"
    >
      <div
        className="p-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <h2 className="font-semibold text-lg mb-4">Reschedule Session</h2>

        {/* ===== CUSTOM CALENDAR ===== */}
        <div className="border rounded-xl p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">{monthName}</h3>
            <div className="flex gap-2">
              <button onClick={prevMonth}>
                <ChevronLeft />
              </button>
              <button onClick={nextMonth}>
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 text-center text-sm mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, idx) => {
              if (!day) return <div key={idx} />;

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
                  key={idx}
                  disabled={isSold}
                  onClick={() => setSelectedDate(dateObj)}
                  className={`p-2 rounded text-sm
                    ${isSold ? "bg-gray-200 text-gray-400" : ""}
                    ${isBooked ? "bg-black text-white" : ""}
                    ${isSelected ? "bg-[#0A7676] text-white" : ""}
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
                No available time slots
              </p>
            )}
          </div>
        )}

        <Link href={"/booking-confirmed"}>
          <button className="bg-[#0A7676] mt-4 w-full text-white py-3 px-6 rounded-xl font-semibold">
            Proceed anyway
          </button>
        </Link>
      </div>
    </Drawer>
  );
};

export default ResheduleDrawer;
