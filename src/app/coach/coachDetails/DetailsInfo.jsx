"use client";

import { useState } from "react";
import { Star, MapPin, Briefcase, Award, Info } from "lucide-react";
import { LocationIcon, MarkIcon } from "@/constant/svg.icon";
import { Modal } from "antd";
import Link from "next/link";
import { Navigate } from "@/components/Navigate";
import CertifcateIcon from "./CertifcateIcon";
import InfoIcon from "./InfoIcon";
import IconLocation from "./IconLocation";
import IconExperience from "./IconExperience";
import IconCertificate from "./IconCertificate";

export default function DetailsInfo() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showFullAbout, setShowFullAbout] = useState(false);

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
              <h1 className="text-2xl font-style1 font-extrabold  ">
                Ann Smith, 26
              </h1>
              <span>
                <MarkIcon></MarkIcon>
              </span>
            </div>
           <div className="flex gap-2 mt-3 flex-wrap">
  {(showAllSkills
    ? [
        "Yoga",
        "Stretching",
        "Pilates",
        "Cardio",
        "Strength",
        "Mobility",
        "Balance",
        "HIIT",
        "Core",
      ]
    : ["Yoga", "Stretching", "Pilates"]
  ).map((skill) => (
    <span
      key={skill}
      className="px-3 py-1 border text-[#7E8792] text-xs rounded-full font-medium"
    >
      {skill}
    </span>
  ))}

  <button
    onClick={() => setShowAllSkills((prev) => !prev)}
    className="px-3 py-1 border text-blue-700 text-xs rounded-full font-medium"
  >
    {showAllSkills ? "- Less" : "+7 More"}
  </button>
</div>

          </div>
        </div>

        {/* Fast Facts */}
        <div className="mt-8">
          <h2 className="text-base font-style1 font-extrabold mb-2">
            Fast facts
          </h2>

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
                <IconLocation></IconLocation>
              </button>
            </div>

            {/* Experience */}
            <div className="bg-white shadow-sm border p-4 rounded-2xl">
              <div className="flex items-center  gap-3">
                <IconExperience></IconExperience>

                <div>
                  <p className="text-xs text-[#A3A9B0] uppercase">Experience</p>
                  <p className="text-gray-900 font-medium">5 years</p>
                </div>
              </div>
            </div>

            {/* Certificate */}
            <div className="bg-white shadow-sm border p-4 rounded-2xl flex  justify-between">
              <div className="flex items-center  gap-3">
                <IconCertificate></IconCertificate>

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

          <div className="bg-white shadow-sm border p-4 rounded-2xl text-sm leading-relaxed">
            <p>
              {showFullAbout
                ? "I help my clients improve strength, mobility and balance. My focus is on holistic training and sustainable results. I design personalized programs based on individual goals, ensuring long-term progress, injury prevention, and mental well-being."
                : "I help my clients improve strength, mobility and balance..."}

              <button
                onClick={() => setShowFullAbout((prev) => !prev)}
                className="ml-1 text-blue-600 font-medium"
              >
                {showFullAbout ? "See Less" : "See More"}
              </button>
            </p>
          </div>
        </div>

        {/* Availability Preview */}
        <div className="mt-8">
          <h2 className="text-base font-style1 font-extrabold mb-2">
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
