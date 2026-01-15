"use client";

import React, { useState } from "react";
import { Drawer, DatePicker } from "antd";
import { BlocksIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import dayjs from "dayjs";
import TrainCalanderIcon from "./TrainCalanderIcon";
import TrainArray from "./TrainArray";
import TrainSureIcon from "./TrainSureIcon";
import CalenderIcon from "@/components/shared/CalenderIcon";
import TrainCalendIcon from "./TrainCalendIcon";
import { MdOutlineBlock } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const availableDays = [2, 6, 21, 23, 24, 25, 26, 28];

const TranCalendarWithSlots = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  // Drawer States
  const [unavailabilityDrawer, setUnavailabilityDrawer] = useState(false);
  const [confirmUnavailabilityDrawer, setConfirmUnavailabilityDrawer] =
    useState(false);
  const [editDrawer, setEditDrawer] = useState(false);
  const [cancelReasonDrawer, setCancelReasonDrawer] = useState(false);
  const [blockDrawer, setBlockDrawer] = useState(false);

  // Long Unavailability Dates
  const [unavailFrom, setUnavailFrom] = useState(null);
  const [unavailUntil, setUnavailUntil] = useState(null);

  // Dummy bookedSlots
  const bookedSlots = {
    "2026-01-24": [
      {
        time: "09:00 - 10:00",
        user: {
          name: "Ann Smith",
          image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
        },
      },
      {
        time: "14:30 - 15:30",
        user: {
          name: "John Doe",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
        },
      },
    ],
    "2026-01-02": [
      {
        time: "09:00 - 10:00",
        user: {
          name: "Ann Smith",
          image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
        },
      },
      { time: "11:10 - 12:10", available: true },
    ],
  };

  const daysInMonth = currentMonth.daysInMonth();
  const monthLabel = currentMonth.format("MMMM YYYY");

  const goPrev = () => setCurrentMonth((p) => p.subtract(1, "month"));
  const goNext = () => setCurrentMonth((p) => p.add(1, "month"));

  const selectedDateStr = selectedDate
    ? dayjs(selectedDate).format("YYYY-MM-DD")
    : null;
  const slots = selectedDateStr ? bookedSlots[selectedDateStr] || [] : [];

  const drawerStyle = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    maxWidth: "768px",
    width: "100%",
    backgroundColor: "#F7F7F7",
  };

  return (
    <div>
      {/* CALENDAR */}
      <div className="bg-white p-4 rounded-[16px] mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold">{monthLabel}</h2>
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

        <div className="grid grid-cols-7 gap-3 text-sm">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
            <span key={d} className="text-gray-400 pl-2">
              {d}
            </span>
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const date = currentMonth.date(day);
            const dateStr = date.format("YYYY-MM-DD");

            const isAvailable =
              availableDays.includes(day) || bookedSlots[dateStr];
            const isSelected = selectedDateStr === dateStr;

            return (
              <button
                key={day}
                onClick={() => isAvailable && setSelectedDate(date.toDate())}
                className={`h-8 w-8 rounded-full flex items-center justify-center relative
                  ${isSelected ? "bg-black text-white" : "hover:bg-gray-100"}
                  ${!isAvailable ? "opacity-30 cursor-not-allowed" : ""}`}
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

      {/* LONG UNAVAILABILITY */}
      <h1
        className="flex items-center justify-between rounded-xl gap-2 mb-4 bg-white p-3 cursor-pointer"
        onClick={() => setUnavailabilityDrawer(true)}
      >
        <span className="flex items-center gap-3">
          <TrainCalanderIcon /> Set a long Unavailability
        </span>{" "}
        <TrainArray />
      </h1>

      {/* SLOT LIST */}
      {selectedDate && (
        <div>
          <div className="flex justify-between">
            <h4 className="font-semibold mb-3">
              {dayjs(selectedDate).format("dddd, MMMM D, YYYY")}
            </h4>
            <button
              className="text-gray-500"
              onClick={() => setEditDrawer(true)}
            >
              Edit
            </button>
          </div>

          {slots.length === 0 ? (
            <div className="text-gray-500 italic">No slots available</div>
          ) : (
            <div className="space-y-3">
              {slots.map((slot, idx) => (
                <div
                  className="flex items-center font-bold italic bg-white rounded-xl p-1"
                  key={idx}
                >
                  <div
                    className={`font-bold text-[14px] w-[150px] ${
                      slot.available ? "text-green-700" : ""
                    }`}
                  >
                    {slot.time}
                  </div>
                  <div
                    className={`${
                      slot.available
                        ? "bg-[#E2F8F8] w-full rounded-xl border-green-200 flex justify-between items-center px-2"
                        : "bg-[#F0F8FF] rounded-xl px-2 py-1 font-bold w-full text-[#355979] flex justify-between items-center"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {!slot.available && slot.user && (
                        <>
                          <Image
                            src={slot.user.image}
                            width={30}
                            height={30}
                            alt={slot.user.name}
                            className="rounded-full"
                          />
                          <div className="text-sm">{slot.user.name}</div>
                        </>
                      )}
                      {slot.available && (
                        <div className="text-sm py-2 text-green-700 font-semibold">
                          Available
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      
      <Drawer
        placement="bottom"
        height={340}
        onClose={() => setUnavailabilityDrawer(false)}
        open={unavailabilityDrawer}
        closable={false}
        getContainer={false}
        style={drawerStyle}
      >
        <h1 className="text-base font-bold italic">
          Set a long Unavaliablity{" "}
        </h1>
        <p className="text-gray-400 text-sm">
          Select a Date Range for Long Unavailability
        </p>
        <button
          onClick={() => setUnavailabilityDrawer(false)}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <div className="space-y-4 mt-8">
          <label htmlFor="fromDate">
            {" "}
            From{" "}
            <DatePicker
              style={{ height: "40px" }}
              placeholder="From"
              onChange={(date) => setUnavailFrom(date)}
              className="w-full"
            />
          </label>
          <div>
            <label htmlFor="">
              Until
              <DatePicker
                style={{ height: "40px" }}
                placeholder="Until"
                onChange={(date) => setUnavailUntil(date)}
                className="w-full"
              />
            </label>
          </div>
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setUnavailabilityDrawer(false)}
              className=" px-4 py-3 w-full rounded-xl bg-[#EFF0F1]"
            >
              Back
            </button>
            <button
              className="bg-primary w-full  text-white px-4 py-2 rounded-xl"
              onClick={() => {
                setUnavailabilityDrawer(false);
                setConfirmUnavailabilityDrawer(true);
              }}
            >
              Proceed Anyway
            </button>
          </div>
        </div>
      </Drawer>

      {/* 2. CONFIRM UNAVAILABILITY DRAWER */}
      <Drawer
        placement="bottom"
        height={290}
        onClose={() => setConfirmUnavailabilityDrawer(false)}
        open={confirmUnavailabilityDrawer}
        closable={false}
        getContainer={false}
        style={drawerStyle}
      >
        <button
          onClick={() => setConfirmUnavailabilityDrawer(false)}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <div className="text-center">
          <div className="flex justify-center">
            <TrainSureIcon></TrainSureIcon>
          </div>
          <h1 className="text-xl font-bold italic py-4">Hey!</h1>
          <p className="text-gray-400 mb-3">
            Are you sure you want to set unavailability for{" "}
            {unavailFrom?.format("MMM D")} – {unavailUntil?.format("MMM D")}?
            Users will not be able to book sessions during this period, and all
            sessions already scheduled within these dates will be cancelled.
          </p>
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setConfirmUnavailabilityDrawer(false)}
              className="px-4 py-3 w-full rounded-xl bg-[#EFF0F1]"
            >
              Back
            </button>
            <button className="bg-primary w-full  text-white px-4 py-2 rounded-xl">
              Proceed Anyway
            </button>
          </div>
        </div>
      </Drawer>

      {/* 3. EDIT SLOT DRAWER */}
      <Drawer
        placement="bottom"
        height={400}
        onClose={() => setEditDrawer(false)}
        open={editDrawer}
        closable={false}
        getContainer={false}
        style={drawerStyle}
      >
        <h1 className="text-base font-bold italic">
          {dayjs(selectedDate).format("dddd, MMMM D, YYYY")}
        </h1>
        <p className="text-gray-400 text-sm">
          choose a time window you warn to block
        </p>
        <button
          onClick={() => setEditDrawer(false)}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <div className="space-y-2 mt-8">
          <p className="text-gray-400 text-[10px]">TIME SELECTION</p>
          {slots.length === 0 ? (
            <div className="text-gray-500 italic">No slots available</div>
          ) : (
            slots.map((slot, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4  font-bold italic bg-white border rounded-xl p-2"
              >
                <div className="bg-[#F7F7F7] w-[50px] h-[50px] flex justify-center items-center rounded-xl">
                  <TrainCalendIcon></TrainCalendIcon>
                </div>
                <div className="w-full">
                  <div className=" text-[12px] mb-2">{slot.time}</div>
                  <div className="flex gap-2 ">
                    <div
                      className={`${
                        slot.available
                          ? "bg-[#E2F8F8] w-full rounded-xl border-green-200  items-center px-2"
                          : "bg-[#F0F8FF] rounded-xl px-2  font-bold w-full text-[#355979] flex justify-between items-center"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {!slot.available && slot.user && (
                          <>
                            <Image
                              src={slot.user.image}
                              width={25}
                              height={25}
                              alt={slot.user.name}
                              className="rounded-full"
                            />
                            <div className="text-sm">{slot.user.name}</div>
                          </>
                        )}
                        {slot.available && (
                          <div className="text-sm text-[#0A7676] font-semibold">
                            Available
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      {!slot.available && (
                        <button
                          onClick={() => {
                            setEditDrawer(false);
                            setCancelReasonDrawer(true);
                          }}
                          className="p-2 text-[#ECECEC] bg-[#BBBDC4]  rounded-full"
                        >
                          <RxCross2 className="text-xl" />
                        </button>
                      )}
                      {slot.available && (
                        <button
                          onClick={() => {
                            setEditDrawer(false);
                            setBlockDrawer(true);
                          }}
                          className="p-2 text-[#ECECEC] bg-[#BBBDC4]  rounded-full"
                        >
                          <MdOutlineBlock className="text-xl" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
          <div className="">
            <button className="px-4 py-3 mt-5 w-full rounded-xl bg-[#EFF0F1]">
              <span className="flex justify-center items-center gap-2">
                <MdOutlineBlock></MdOutlineBlock> Back All Day
              </span>
            </button>
            <button className="bg-primary w-full mt-4 text-white px-4 py-2 rounded-xl">
              Proceed Anyway
            </button>
          </div>
        </div>
      </Drawer>

      {/* 4. CANCEL REASON DRAWER */}
      <Drawer
        placement="bottom"
        height={300}
        onClose={() => setCancelReasonDrawer(false)}
        open={cancelReasonDrawer}
        closable={false}
        getContainer={false}
        style={drawerStyle}
      >
        <h1 className="text-base font-bold italic">Cancel</h1>
        <p className="text-gray-400 text-sm">
          Specify the reason for the cancellation
        </p>
        <button
          onClick={() => setCancelReasonDrawer(false)}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex flex-col gap-3 mt-5">
          {["Illness", "Travel", "Vacation", "Different reasons"].map(
            (reason) => (
              <label
                key={reason}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="cancelReason"
                  value={reason}
                  className="accent-[#0A7676] w-4 h-4"
                />
                <span className="">{reason}</span>
              </label>
            )
          )}
        </div>
        <div className=" mt-4">
          <button
            className="bg-primary w-full mt-4 text-white px-4 py-2 rounded-xl"
            onClick={() => setCancelReasonDrawer(false)}
          >
            Cancel
          </button>
        </div>
      </Drawer>

      {/* 5. BLOCK SLOT DRAWER */}
      <Drawer
        placement="bottom"
        height={290}
        onClose={() => setBlockDrawer(false)}
        open={blockDrawer}
        closable={false}
        getContainer={false}
        style={drawerStyle}
      >
        <button
          onClick={() => setBlockDrawer(false)}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="text-center">
          <div className="flex justify-center">
            <TrainSureIcon></TrainSureIcon>
          </div>
          <h1 className="text-xl font-bold italic py-4">Hey!</h1>
          <p className="text-gray-400 mb-3">
            Are you sure you want to block this slot? <br />
            Users won’t be able to book a session at this time.
          </p>
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setBlockDrawer(false)}
              className="px-4 py-3 w-full rounded-xl bg-[#EFF0F1]"
            >
              Back
            </button>
            <button className="bg-primary w-full  text-white px-4 py-2 rounded-xl">
              Proceed Anyway
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default TranCalendarWithSlots;
