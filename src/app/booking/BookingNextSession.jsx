"use client";

import React, { useState } from "react";
import { Drawer, Calendar } from "antd";
import Link from "next/link";
import { ChatIcon } from "@/constant/svg.icon";
import Image from "next/image";

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
  const [selectedDate, setSelectedDate] = useState(null);

  const soldDates = ["2026-01-10", "2026-01-15"];

  const bookedDates = ["2026-01-12", "2026-01-18"];

  const timeSlots = {
    "2026-01-12": ["10:00 AM", "12:00 PM"],
    "2026-01-13": ["09:00 AM", "11:00 AM", "04:00 PM"],
    "2026-01-18": ["02:00 PM"],
  };

  const disabledDate = (current) => {
    return soldDates.includes(current.format("YYYY-MM-DD"));
  };

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
        {sessions.map((item) => (
          <div key={item.id}  className="bg-white rounded-2xl border border-gray-200 p-4 flex items-center gap-4 shadow-sm">
            <Image
              src={item.image}
              width={70}
              height={70}
              alt={item.name}
              className="rounded-xl object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-1">
                <h3 className="font-bold text-gray-900 text-[18px]">
                  {item.name}
                </h3>
                <span className="text-yellow-500 text-[18px]"></span>
              </div>
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
          <button className="bg-[#0A7676] w-full text-white py-3 px-6 rounded-xl font-semibold">
            Proceed anyway
          </button>
        </Link>
      </div>
    </Drawer>
  );
};

export default BookingNextSession;
