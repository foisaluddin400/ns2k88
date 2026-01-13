"use client";
import React, { useState } from "react";
import { Calendar, Badge } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { Navigate } from "@/components/Navigate";
import BagIcon from "./BagIcon";

const BookSession = () => {
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

  return (
    <div className=" -mt-20 -mb-20">
        <Navigate></Navigate>
      <h2 className="text-xl font-semibold mb-4">Book a Session</h2>

      {/* Calendar */}
      <Calendar
        fullscreen={false}
        disabledDate={disabledDate}
        dateCellRender={dateCellRender}
        onSelect={(value) => setSelectedDate(value.format("YYYY-MM-DD"))}
      />

      {/* Time slots */}
      {selectedDate && (
        <div className="mt-6">
          <h3 className="text-gray-500 mb-2">Selection Date {selectedDate}</h3>

          {timeSlots[selectedDate]?.length ? (
            <div className="flex flex-wrap gap-2">
              {timeSlots[selectedDate].map((time) => (
                <button
                  key={time}
                  className="border px-4 rounded-full bg-white text-gray-500 py-1 text-sm "
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

      <div className="space-y-3 mt-5">
        <div className="bg-white  border p-4 rounded-2xl flex  justify-between items-center">
          <div className="flex items-center gap-3">
           <BagIcon></BagIcon>

            <div>
              <p className="text-xs text-[#A3A9B0] uppercase">
                SESSION 01
              </p>
              <p className="text-gray-900 font-medium">21-10-2025 7:00 PM</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
           <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 4.48438C13.2525 4.23687 10.74 4.10938 8.235 4.10938C6.75 4.10938 5.265 4.18438 3.78 4.33438L2.25 4.48438"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1373 6.85547L13.6498 14.408C13.5673 15.5855 13.4998 16.5005 11.4073 16.5005H6.5923C4.4998 16.5005 4.4323 15.5855 4.3498 14.408L3.8623 6.85547"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.74756 12.375H10.2451"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.125 9.375H10.875"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* Experience */}
      <div className="bg-white  border p-4 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BagIcon></BagIcon>

            <div>
              <p className="text-xs text-[#A3A9B0] uppercase">
                SESSION 02
              </p>
              <p className="text-gray-900 font-medium">21-10-2025 7:00 PM</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 4.48438C13.2525 4.23687 10.74 4.10938 8.235 4.10938C6.75 4.10938 5.265 4.18438 3.78 4.33438L2.25 4.48438"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1373 6.85547L13.6498 14.408C13.5673 15.5855 13.4998 16.5005 11.4073 16.5005H6.5923C4.4998 16.5005 4.4323 15.5855 4.3498 14.408L3.8623 6.85547"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.74756 12.375H10.2451"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.125 9.375H10.875"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
         <div className="bg-white border p-4 rounded-2xl flex items-center justify-between">
          <div className="flex gap-3 items-center">
          <BagIcon></BagIcon>

            <div>
              <p className="text-xs text-[#A3A9B0] uppercase">
                SESSION 03
              </p>
              <p className="text-gray-900 font-medium">21-10-2025 7:00 PM</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 4.48438C13.2525 4.23687 10.74 4.10938 8.235 4.10938C6.75 4.10938 5.265 4.18438 3.78 4.33438L2.25 4.48438"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1373 6.85547L13.6498 14.408C13.5673 15.5855 13.4998 16.5005 11.4073 16.5005H6.5923C4.4998 16.5005 4.4323 15.5855 4.3498 14.408L3.8623 6.85547"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.74756 12.375H10.2451"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.125 9.375H10.875"
                stroke="#7E8792"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
        <button disabled className="w-full mt-6 bg-gray-200 text-gray-500 py-3 rounded-xl  transition">
        Book this session Slot
      </button>
      <Link href={'/booked-done'}><button className="w-full mt-6 bg-[#0A7676] hover:bg-teal-800 text-white py-3 rounded-xl font-semibold transition">
        Save & Continue
      </button></Link>
    </div>
  );
};

export default BookSession;
