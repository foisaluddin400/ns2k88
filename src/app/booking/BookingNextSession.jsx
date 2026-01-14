"use client";

import React, { useState } from "react";
import { Drawer } from "antd";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/* ===== CALENDAR DATA ===== */
const availableDays = [2, 6, 21, 23, 24, 25, 26, 28];

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

const BookingNextSession = ({ open, onClose }) => {
  const sessions = [
    {
      id: 1,
      name: "Ann Smith",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      remaining: 8,
      total: 10,
    },
  ];

  /* ===== STATE ===== */
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(dayjs("2026-01-01"));

  const daysInMonth = currentMonth.daysInMonth();
  const monthLabel = currentMonth.format("MMMM YYYY");

  const goPrev = () => setCurrentMonth((p) => p.subtract(1, "month"));
  const goNext = () => setCurrentMonth((p) => p.add(1, "month"));

  const formattedDate = selectedDate
    ? dayjs(selectedDate).format("YYYY-MM-DD")
    : null;

  /* ===== TOUCH CLOSE ===== */
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

  return (
    <Drawer
      placement="bottom"
      height="70%"
      open={open}
      onClose={onClose}
      closable={false}
      getContainer={false}
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: "768px",
        width: "100%",
      }}
    >
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-1 top-1 p-2 rounded-full hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        <h2 className="font-semibold text-lg mb-4">
          Reschedule Session
        </h2>

        {/* ===== SESSION CARD ===== */}
        {sessions.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border p-4 flex gap-4 mb-6"
          >
            <Image
              src={item.image}
              width={70}
              height={70}
              alt={item.name}
              className="rounded-xl object-cover"
            />
            <div>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                ⏳ REMAINING SESSION{" "}
                <span className="text-[#1CA7A6] font-semibold">
                  {item.remaining}
                </span>{" "}
                of {item.total}
              </p>
            </div>
          </div>
        ))}

        {/* ===== CALENDAR (NEW DESIGN) ===== */}
        <div className="bg-white rounded-[16px] border p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">{monthLabel}</h3>

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
          <button className="mt-6 bg-[#0A7676] w-full text-white py-3 rounded-xl font-semibold">
            Proceed anyway
          </button>
        </Link>
      </div>
    </Drawer>
  );
};

export default BookingNextSession;
