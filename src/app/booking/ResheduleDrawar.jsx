"use client";

import React, { useState } from "react";
import { Drawer, Calendar } from "antd";
import Link from "next/link";

const ResheduleDrawer = ({ open, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);

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

  // Disable sold dates
  const disabledDate = (current) => {
    return soldDates.includes(current.format("YYYY-MM-DD"));
  };

  // Calendar cell style
  const dateCellRender = (value) => {
    const date = value.format("YYYY-MM-DD");
    if (bookedDates.includes(date)) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-black text-white rounded-md">
          {value.date()}
        </div>
      );
    }
    return null;
  };

  // Touch handlers for drag down to close
  const [startY, setStartY] = useState(null);
  const handleTouchStart = (e) => setStartY(e.touches[0].clientY);
  const handleTouchMove = (e) => {
    if (startY === null) return;
    const currentY = e.touches[0].clientY;
    if (currentY - startY > 80) {
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
      className="app-drawer"
    >
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="p-6"
      >
        <h2 className="font-semibold text-lg mb-4">Reschedule Session</h2>

        <Calendar
          fullscreen={false}
          disabledDate={disabledDate}
          dateCellRender={dateCellRender}
          onSelect={(value) => setSelectedDate(value.format("YYYY-MM-DD"))}
            
        />

        {selectedDate && (
          <div className="mt-6">
            <h3 className="text-gray-500 mb-2">
              Selected Date: {selectedDate}
            </h3>
            {timeSlots[selectedDate]?.length ? (
              <div className="flex flex-wrap gap-2">
                {timeSlots[selectedDate].map((time) => (
                  <button
                    key={time}
                    className="border px-4 rounded-full bg-white text-gray-500 py-1 text-sm"
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

        <Link href={"/booking-confirmed"}>
          {" "}
          <button className="bg-[#0A7676] mt-4 w-full text-white py-3 px-6 rounded-xl font-semibold">
            Proceed anyway
          </button>
        </Link>
      </div>
    </Drawer>
  );
};

export default ResheduleDrawer;
