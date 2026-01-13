"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import Image from "next/image";
import dayjs from "dayjs";

const TranCalendarWithSlots = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs()); // ← dynamic: current month
  const [selectedDate, setSelectedDate] = useState(null);

  // Example booked slots data
  const bookedSlots = {
    "2026-01-24": [
      { time: "09:00 - 10:00", user: { name: "Ann Smith", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face" } },
      { time: "14:30 - 15:30", user: { name: "John Doe", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face" } },
    ],
    "2026-01-02": [
      { time: "09:00 - 10:00", user: { name: "Ann Smith", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face" } },
      { time: "11:10 - 12:10", available: true },
    ],
    "2025-11-06": [
      { time: "10:00 - 11:30", available: true },
    ],
  };

  const hasBooking = (dateStr) => !!bookedSlots[dateStr];

  const getDaysInMonth = () => currentMonth.daysInMonth();
  const getFirstDayOfMonth = () => currentMonth.startOf("month").day(); 

  const prevMonth = () => setCurrentMonth(prev => prev.subtract(1, "month"));
  const nextMonth = () => setCurrentMonth(prev => prev.add(1, "month"));

  const daysInMonth = getDaysInMonth();
  const firstDay = getFirstDayOfMonth();

  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const monthName = currentMonth.format("MMMM YYYY");

  // Selected date formatted as YYYY-MM-DD
  const selectedDateStr = selectedDate ? dayjs(selectedDate).format("YYYY-MM-DD") : null;
  const slots = selectedDateStr ? bookedSlots[selectedDateStr] || [] : [];

  return (
    <div className="">
      {/* Calendar */}
      <div className="rounded-xl border border-gray-200 p-5 shadow-sm bg-white">
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-bold text-xl">{monthName}</h3>
          <div className="flex gap-3">
            <button 
              onClick={prevMonth}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextMonth}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 text-center mb-3 text-xs font-medium text-gray-500">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1.5 text-center">
          {days.map((day, idx) => {
            if (!day) return <div key={idx} />;

            const dateStr = currentMonth.date(day).format("YYYY-MM-DD");
            const isBooked = hasBooking(dateStr);
            const isSelected = selectedDateStr === dateStr;

            return (
              <button
                key={idx}
                onClick={() => setSelectedDate(currentMonth.date(day).toDate())}
                className={`
                  aspect-square p-2.5 rounded-lg text-sm font-medium transition-colors
                  ${isSelected 
                    ? "bg-teal-700 text-white" 
                    : isBooked 
                      ? "bg-black text-white hover:bg-gray-800" 
                      : "hover:bg-gray-100"
                  }
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Date Slots */}
      {selectedDate && (
        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-3">
            {dayjs(selectedDate).format("dddd, MMMM D, YYYY")}
          </h4>

          {slots.length === 0 ? (
            <div className="text-gray-500 italic">No slots available</div>
          ) : (
            <div className="space-y-3">
              {slots.map((slot, idx) => (
                <div
                  key={idx}
                  className={`
                    flex justify-between items-center p-4 rounded-xl border
                    ${slot.available 
                      ? "bg-green-50 border-green-200" 
                      : "bg-black text-white border-black"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    {!slot.available && slot.user && (
                      <Image
                        src={slot.user.image}
                        width={44}
                        height={44}
                        alt={slot.user.name}
                        className="rounded-full object-cover border-2 border-white/30"
                      />
                    )}

                    <div>
                      <div className={`font-medium ${slot.available ? "text-green-700" : "text-white"}`}>
                        {slot.available ? "Available" : slot.time}
                      </div>
                      {!slot.available && slot.user && (
                        <div className="text-sm text-gray-300">{slot.user.name}</div>
                      )}
                    </div>
                  </div>

                  {!slot.available && (
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <MessageSquare size={20} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TranCalendarWithSlots;