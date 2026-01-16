"use client";

import { useState } from "react";
import { Star, MapPin, Briefcase, Award, Info } from "lucide-react";
import { LocationIcon, MarkIcon } from "@/constant/svg.icon";
import { Modal } from "antd";
import Link from "next/link";
import { Navigate } from "@/components/Navigate";
import CertifcateIcon from "./CertifcateIcon";
import InfoIcon from "./InfoIcon";

export default function DetailsInfo() {
  const [selectedDate, setSelectedDate] = useState(20);
  const [selectedTime, setSelectedTime] = useState("2:00 p.m.");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [activeTab, setActiveTab] = useState("Fitness");
  const openModal = () => {
    setOpen(true);
  };

  const timeSlots = [
    "11:00",
    "12:00",
    "1:00 p.m.",
    "2:00 p.m.",
    "3:00 p.m.",
    "4:00 p.m.",
  ];
  const daysOfWeek = ["M", "D", "W", "D", "F", "S", "S"];
  const dateRange = [18, 19, 20, 21, 22, 23, 24];

  const tabContent = {
    Fitness: ["Yoga", "Stretching", "Pilates", "Cardio", "Strength"],
    "Martial Arts": ["Karate", "Taekwondo", "Judo", "Boxing", "MMA"],
    Nutrition: ["Weight Loss", "Muscle Gain", "Diet Plan", "Vegan", "Keto"],
  };
  const openModal1 = () => {
    setOpen1(true);
  };
  return (
    <div className="">
      {/* Header Section */}
      <div className=" mt-8">
        {/* Name and Rating */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-[20px] italic font-bold ">Ann Smith, 26</h1>
              <span>
                <MarkIcon></MarkIcon>
              </span>
            </div>
            <div className="flex gap-2 mt-3">
              <span className="px-3 py-1 border  text-[#7E8792] text-xs rounded-full font-medium">
                Yoga
              </span>
              <span className="px-3 py-1 border  text-[#7E8792] text-xs rounded-full font-medium">
                Stretching
              </span>
              <span className="px-3 py-1 border  text-[#7E8792] text-xs rounded-full font-medium">
                Pilates
              </span>
              <span
                onClick={openModal}
                className="px-3 cursor-pointer py-1 border  text-blue-700 text-xs rounded-full font-medium"
              >
                +7 More
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1  ">
            <span className="font-semibold ">4.9</span>
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>

        {/* Fast Facts */}
        <div className="mt-8">
          <h2 className="text-lg font-bold italic mb-4">Fast facts</h2>

          <div className="space-y-3">
            {/* Location */}
            <div className="bg-white shadow-sm border p-4 rounded-2xl flex  justify-between">
              <div className="flex items-center gap-3">
                <LocationIcon></LocationIcon>
                <div>
                  <p className="text-xs text-[#A3A9B0]  uppercase">Location</p>
                  <p className="text-gray-900 font-medium">
                    Los Angeles, CA - Griffith Park Fields
                  </p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>

            {/* Experience */}
            <div className="bg-white shadow-sm border p-4 rounded-2xl">
              <div className="flex items-center  gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.0006 16.5H12.0006C15.0156 16.5 15.5556 15.2925 15.7131 13.8225L16.2756 7.8225C16.4781 5.9925 15.9531 4.5 12.7506 4.5H5.2506C2.0481 4.5 1.5231 5.9925 1.7256 7.8225L2.2881 13.8225C2.4456 15.2925 2.9856 16.5 6.0006 16.5Z"
                    stroke="#7E8792"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 4.5V3.9C6 2.5725 6 1.5 8.4 1.5H9.6C12 1.5 12 2.5725 12 3.9V4.5"
                    stroke="#7E8792"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 9.75V10.5C10.5 10.5075 10.5 10.5075 10.5 10.515C10.5 11.3325 10.4925 12 9 12C7.515 12 7.5 11.34 7.5 10.5225V9.75C7.5 9 7.5 9 8.25 9H9.75C10.5 9 10.5 9 10.5 9.75Z"
                    stroke="#7E8792"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.2375 8.25C14.505 9.51 12.525 10.26 10.5 10.515"
                    stroke="#7E8792"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.96484 8.45312C3.65234 9.60812 5.55734 10.3056 7.49984 10.5231"
                    stroke="#7E8792"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div>
                  <p className="text-xs text-[#A3A9B0] uppercase">Experience</p>
                  <p className="text-gray-900 font-medium">5 years</p>
                </div>
              </div>
            </div>

            {/* Certificate */}
            <div className="bg-white shadow-sm border p-4 rounded-2xl flex  justify-between">
              <div className="flex items-center  gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.28516 9.00055L8.09266 10.8155L11.7152 7.18555"
                    stroke="#7E8792"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.06266 1.83773C8.58016 1.39523 9.42766 1.39523 9.95266 1.83773L11.1377 2.85773C11.3627 3.05273 11.7827 3.21023 12.0827 3.21023H13.3577C14.1527 3.21023 14.8052 3.86273 14.8052 4.65773V5.93273C14.8052 6.22523 14.9627 6.65273 15.1577 6.87773L16.1777 8.06273C16.6202 8.58023 16.6202 9.42773 16.1777 9.95273L15.1577 11.1377C14.9627 11.3627 14.8052 11.7827 14.8052 12.0827V13.3577C14.8052 14.1527 14.1527 14.8052 13.3577 14.8052H12.0827C11.7902 14.8052 11.3627 14.9627 11.1377 15.1577L9.95266 16.1777C9.43516 16.6202 8.58766 16.6202 8.06266 16.1777L6.87766 15.1577C6.65266 14.9627 6.23266 14.8052 5.93266 14.8052H4.63516C3.84016 14.8052 3.18766 14.1527 3.18766 13.3577V12.0752C3.18766 11.7827 3.03016 11.3627 2.84266 11.1377L1.83016 9.94523C1.39516 9.42773 1.39516 8.58773 1.83016 8.07023L2.84266 6.87773C3.03016 6.65273 3.18766 6.23273 3.18766 5.94023V4.65023C3.18766 3.85523 3.84016 3.20273 4.63516 3.20273H5.93266C6.22516 3.20273 6.65266 3.04523 6.87766 2.85023L8.06266 1.83773Z"
                    stroke="#7E8792"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div>
                  <p className="text-xs text-[#A3A9B0]  uppercase">
                    Certificate
                  </p>
                  <p className="text-gray-900 font-medium">3</p>
                </div>
              </div>
              <button
                onClick={openModal1}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="mt-8">
          <h2 className="text-[14px] font-bold italic mb-3">About me</h2>
          <p className="bg-white shadow-sm border p-4 rounded-2xl text-sm leading-relaxed">
            I help my clients improve strength, mobility and balance. My focus
            is on holistic training and sustainable results.
            <button className="  ml-1">See More</button>
          </p>
        </div>

        {/* Availability Preview */}
        <div className="mt-8">
          <h2 className="text-[14px] font-bold italic mb-4">
            Availability preview
          </h2>

          {/* Calendar */}
          <div className="bg-white shadow-sm border rounded-2xl p-4 mb-4">
            <div className="grid grid-cols-7 gap-2 mb-6">
              {daysOfWeek.map((day, idx) => (
                <div
                  key={idx}
                  className={`text-center ${
                    selectedDate === dateRange[idx]
                      ? "border border-secondary bg-[#0A767640] rounded-md p-1 text-blacke"
                      : "bg-gray-50  rounded-md"
                  }`}
                >
                  <p className="text-xs  mb-2">{day}</p>
                  <button
                    onClick={() => setSelectedDate(dateRange[idx])}
                    className={`w-full py-2 flex items-center justify-center rounded-lg font-semibold text-sm transition-colors ${
                      selectedDate === dateRange[idx]
                        ? "bg-white text-black"
                        : " hover:bg-gray-100"
                    }`}
                  >
                    {dateRange[idx]}
                  </button>
                </div>
              ))}
            </div>

            {/* Time Slots */}
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 bg-gray-50 rounded-lg text-sm font-medium transition-colors ${
                    selectedTime === time
                      ? "bg-white border border-black "
                      : "text-gray-400"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white shadow-sm border p-3 rounded-2xl flex gap-3">
            <div className="bg-accent w-11 h-11 flex justify-center items-center rounded ">
              <InfoIcon></InfoIcon>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">
                Cancellations Policy
              </p>
              <p className="text-xs text-[#A3A9B0] mt-1">
                Cancellations Less Than 12 Hours Before The Session Will Be
                Charged
              </p>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <Link href={"/book"}>
          <button className="w-full mt-8 mb-8 bg-primary text-white font-bold py-3 rounded-2xl italic transition-colors">
          Preise und Pakete
          </button>
        </Link>
      </div>
      <Modal open={open} footer={null} onCancel={() => setOpen(false)} centered>
        <h1 className="text-2xl font-semibold mb-4">
          Expertise & Specialization
        </h1>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex overflow-x-auto scrollbar-hide bg-accent rounded-lg p-1 shadow-sm">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 w-full py-3 rounded-lg text-[12px] font-medium whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex gap-2 mt-3 flex-wrap">
          {tabContent[activeTab].map((item) => (
            <span
              key={item}
              className="px-3 py-1 border text-gray-600 text-xs rounded-full font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </Modal>

      <Modal
        open={open1}
        footer={null}
        onCancel={() => setOpen1(false)}
        centered
      >
        <h1 className="text-2xl font-semibold mb-5">Certificate</h1>

        <div className="flex gap-2 items-center">
          <CertifcateIcon></CertifcateIcon>
          <h1>Fitness B License</h1>
        </div>
        <div className="flex gap-2 py-3 items-center">
          <CertifcateIcon></CertifcateIcon>
          <h1>Nutrition Coach</h1>
        </div>
        <div className="flex gap-2 items-center">
          <CertifcateIcon></CertifcateIcon>
          <h1>Fitness B License</h1>
        </div>
      </Modal>
    </div>
  );
}
