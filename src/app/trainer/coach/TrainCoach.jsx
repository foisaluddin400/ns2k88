"use client";

import Image from "next/image";
import { Search, Users, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";

import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import { Drawer } from "antd";

import { CalenderIcon, FilterIcon, LocationIcon } from "@/constant/svg.icon";
import Svg from "@/components/HomePage/Svg";
import Array from "@/app/coach/Array";
import TrainChatIcon from "@/components/trainerIcon/TrainChatIcon";

const coaches = [
  {
    id: 1,
    name: "Ann Smith",
    age: 26,
    specialties: ["Yoga", "Stretching"],
    location: "Next meeting: tomorrow ",
    price: "€32.00 /hr",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Joyce Daniel",
    age: 28,
    specialties: ["Yoga", "Stretching"],
    location: "Next meeting: tomorrow ",
    price: "€32.00 /hr",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Joyce Daniel",
    age: 28,
    specialties: ["Yoga", "Stretching"],
    location: "Next meeting: tomorrow",
    price: "€32.00 /hr",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Joyce Daniel",
    age: 28,
    specialties: ["Yoga", "Stretching"],
    location: "Next meeting: tomorrow ",
    price: "€32.00 /hr",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Joyce Daniel",
    age: 28,
    specialties: ["Yoga", "Stretching"],
    location: "Next meeting: tomorrow",
    price: "€32.00 /hr",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Joyce Daniel",
    age: 28,
    specialties: ["Yoga", "Stretching"],
    location: "Next meeting: tomorrow ",
    price: "€32.00 /hr",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
  // Add more or set to [] to see empty state
];
const TrainCoach = () => {
  const [activeTab, setActiveTab] = useState("All coaches");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeSpecTab, setActiveSpecTab] = useState("Fitness");

  const specifications = {
    Fitness: [
      "Weight Loss",
      "Strength Training",
      "CrossFit",
      "Yoga",
      "HIIT",
      "Pilates",
      "Cardio",
      "Functional Training",
    ],
    Kampfsport: [
      "Boxing",
      "Muay Thai",
      "Brazilian Jiu-Jitsu",
      "MMA",
      "Kickboxing",
      "Karate",
      "Taekwondo",
      "Self Defense",
    ],
    Ernährung: [
      "Nutritional Advice",
      "Meal Planning",
      "Weight Gain Diet",
      "Fat Loss Nutrition",
      "Muscle Building Diet",
      "Vegan Nutrition",
      "Sports Nutrition",
      "Gut Health",
    ],
  };

  const currentSpecs = specifications[activeSpecTab];
  return (
    <>
      {/* Main Page Content */}
      <div className=" bg-gray-50 ">
        <h1 className="text-xl font-semibold mt-4 mb-2 italic">
          Who are you looking for today?
        </h1>
        {/* Search + Filter */}
        <div className="my-6">
          <div className="w-full">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search customers by name…"
                className="w-full pl-12 pr-12 py-2 bg-transparent rounded-full  border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

     
        {/* Coaches List */}
        <div className="space-y-3 ">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className=" bg-white mb-2 rounded-3xl  border  hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex gap-5 items-center p-3">
                <div className="flex w-full items-center  gap-4">
                  <div className="relative flex-shrink-0">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      width={80}
                      height={80}
                      className="rounded-3xl object-cover "
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="text-[14px] font-bold text-gray-900 flex items-center gap-2">
                          {coach.name}
                          <div className="flex items-center gap-1 font-semibold">
                            <span>{coach.rating}</span>
                            <Svg></Svg>
                          </div>
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-1 text-sm">
                      <div className="">
                        <div className="text-gray-500 flex text-[12px] items-center gap-2">
                          <span className="text-gray-400">
                            <CalenderIcon width={15}></CalenderIcon>
                          </span>{" "}
                          {coach.location}
                        </div>
                        <h1 className="text-[#A3A9B0] mt-1 ml-1 text-[12px]">
                          remaining session{" "}
                        </h1>
                      </div>
                      <div className="flex items-center gap-3"></div>
                    </div>
                  </div>
                </div>
                <div className="w-[100px] flex justify-end">
                  <div>
                    <Link href={'/chat'}><div className="flex justify-end">
                      <TrainChatIcon></TrainChatIcon>
                    </div></Link>
                    <span className="text-[#A3A9B0] ">8 of 10</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrainCoach;
