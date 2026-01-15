"use client";

import Link from "next/link";
import { useState } from "react";

export default function CalendarSection() {
  const today = new Date();

  // Generate today + next 20 days
  const dates = Array.from({ length: 20 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i);

    return {
      day: d.toLocaleDateString("en-US", { weekday: "short" }).charAt(0),
      date: d.getDate(),
      fullDate: d.toDateString(),
    };
  });

  const [selectedDate, setSelectedDate] = useState(dates[0].date);

  const events = [
    { time: "10:00", name: "Ann Smith" },
    { time: "2:00 PM", name: "Mike Wheeler" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-7 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className=" font-bold">Your Day</h1>
        <Link href={'/trainer/calendar'}><span className="text-sm text-gray-500 cursor-pointer hover:text-black">
          Calendar
        </span></Link>
      </div>

      {/* Horizontal Date Selector */}
      <div className="flex no-scrollbar gap-3 overflow-x-auto pb-2">
        {dates.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedDate(item.date)}
            className={`flex flex-col items-center justify-center flex-shrink-0 p-1 rounded-full transition-all ${
              selectedDate === item.date
                ? "bg-primary text-white"
                : "bg-white border hover:bg-gray-200"
            }`}
          >
            <span className="text-xs font-medium">{item.day}</span>
            <span className="text-sm font-semibold mt-1 bg-white px-2 text-black p-1 rounded-full">{item.date}</span>
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="space-y-2 mt-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-2 bg-white rounded-lg"
          >
            <span className="font-bold text-primary min-w-[70px]">
              {event.time}
            </span>

            {/* Avatar */}
            <img className="w-[25px] h-[25px] rounded-full" src={'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face'} alt="image" />

            <span className="font-semibold text-[14px]">{event.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
