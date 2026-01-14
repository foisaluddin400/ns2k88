"use client";

import React, { useState } from "react";
import { Drawer } from "antd";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import dayjs from "dayjs";

const availableDays = [2, 6, 21, 23, 24, 25, 26, 28];

const ResheduleDrawer = ({ open, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(dayjs("2026-01-01"));

  const bookedSlots = {
    "2026-01-24": [{ time: "09:00 - 10:00" }],
    "2026-01-12": [{ time: "10:00 AM" }],
    "2026-01-18": [{ time: "02:00 PM" }],
  };

  const timeSlots = {
    "2026-01-12": ["10:00 AM", "12:00 PM"],
    "2026-01-13": ["09:00 AM", "11:00 AM", "04:00 PM"],
    "2026-01-18": ["02:00 PM"],
  };

  const daysInMonth = currentMonth.daysInMonth();
  const monthLabel = currentMonth.format("MMMM YYYY");

  const goPrev = () => setCurrentMonth((p) => p.subtract(1, "month"));
  const goNext = () => setCurrentMonth((p) => p.add(1, "month"));

  const formattedDate = selectedDate
    ? dayjs(selectedDate).format("YYYY-MM-DD")
    : null;

  return (
   <Drawer
  placement="bottom"
  open={open}
  onClose={onClose}
  closable={false}
  height="70%"
  getContainer={false}
  style={{
    position: "absolute",
    left: "50%",                 // ✅ ADD
    transform: "translateX(-50%)", // ✅ ADD
    maxWidth: "768px",            // 3xl
    width: "100%",
    
  }}
>

      <div className=" relative">
        {/* ❌ CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <h2 className="font-semibold text-lg mb-4">
          Reschedule Session
        </h2>

        {/* ===== CALENDAR ===== */}
        <div className="bg-white  rounded-[16px] mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{monthLabel}</h2>

            <div className="flex gap-2">
              <button
                onClick={goPrev}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={goNext}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-3 text-center text-sm">
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
              <span key={d} className="text-gray-400">
                {d}
              </span>
            ))}

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
                  className={`h-8 w-8 rounded-full flex items-center justify-center relative
                    ${
                      isSelected
                        ? "bg-black text-white"
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

        <Link href="/booking-confirmed">
          <button className="bg-[#0A7676] mt-4 w-full text-white py-3 rounded-xl font-semibold">
            Proceed anyway
          </button>
        </Link>
      </div>
    </Drawer>
  );
};

export default ResheduleDrawer;
