"use client";

import { useState } from "react";
import { Star, MapPin, Briefcase, Award, Info } from "lucide-react";

import { Modal } from "antd";
import Link from "next/link";
import { Navigate } from "@/components/Navigate";

import IconCertificate from "@/app/coach/coachDetails/IconCertificate";
import IconExperience from "@/app/coach/coachDetails/IconExperience";
import IconLocation from "@/app/coach/coachDetails/IconLocation";
import { LocationIcon, MarkIcon } from "@/constant/svg.icon";
import InfoIcon from "@/app/coach/coachDetails/InfoIcon";
import CertifcateIcon from "@/app/coach/coachDetails/CertifcateIcon";

export default function DetailsInfo() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showFullAbout, setShowFullAbout] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
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
              <h1 className="text-2xl font-style1 font-extrabold ">Ann Smith, 26</h1>
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
          <h2 className="text-base font-style1 font-extrabold mb-2">Fast facts</h2>

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
        <div className="mt-8 mb-5">
          <h2 className="text-base font-style1 font-extrabold mb-2">About me</h2>

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

      

    
       
      </div>
     

      <Modal
        open={open1}
        footer={null}
        onCancel={() => setOpen1(false)}
        centered
      >
        <h1 className="text-2xl font-semibold mb-5">Certificate</h1>

        <div className="flex gap-2 items-center">
          <div className="bg-gray-100 w-[35px] h-[35px] flex justify-center items-center rounded-xl">
            <CertifcateIcon></CertifcateIcon>
          </div>
          <h1>Fitness B License</h1>
        </div>
        <div className="flex gap-2 py-3 items-center">
   <div className="bg-gray-100 w-[35px] h-[35px] flex justify-center items-center rounded-xl">
            <CertifcateIcon></CertifcateIcon>
          </div>
          <h1>Nutrition Coach</h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-gray-100 w-[35px] h-[35px] flex justify-center items-center rounded-xl">
            <CertifcateIcon></CertifcateIcon>
          </div>
          <h1>Fitness B License</h1>
        </div>
      </Modal>
    </div>
  );
}
