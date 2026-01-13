"use client";

import Image from "next/image";
import { Search, Users, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FilterIcon, LocationIcon } from "@/constant/svg.icon";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import { Drawer } from "antd";
import Svg from "@/components/HomePage/Svg";
import Array from "./Array";

const coaches = [
  {
    id: 1,
    name: "Ann Smith",
    age: 26,
    specialties: ["Yoga", "Stretching"],
    location: 'B. Berlin ',
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
    location: 'B. Berlin or ',
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
    location: 'B. Berlin ',
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
    location: 'B. Berlin ',
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
    location: 'B. Berlin',
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
    location: 'B. Berlin ',
    price: "€32.00 /hr",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
  // Add more or set to [] to see empty state
];
const CoachPage = () => {
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
        <h1 className="text-xl font-semibold mt-4 mb-2 italic">Who are you looking for today?</h1>
        {/* Search + Filter */}
        <div className="flex sticky top-5 z-40 w-full items-center gap-4 pt-1 pb-4 bg-gray-50">
          <div className="w-full">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Looking for a trainer..."
                className="w-full pl-12 pr-12 py-2 bg-transparent rounded-full  border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <button className="bg-gray-100 w-[45px] h-[45px] rounded-full flex justify-center items-center" onClick={() => setIsFilterOpen(true)}>
            <FilterIcon />
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex  overflow-x-auto scrollbar-hide bg-accent rounded-lg p-1 shadow-sm">
            {["All coaches", "Most popular", "Best rated"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={` w-full py-3 rounded-lg text-[12px] font-medium whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "bg-white text-black "
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Coaches List */}
        <div className="space-y-4 ">
          {coaches.map((coach) => (
            <Link href={"/coach/coachDetails"} key={coach.id}>
              <div className="bg-white mb-2 rounded-3xl  border  hover:shadow-md transition-shadow cursor-pointer">
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
                          <div className="flex items-center gap-2 text-sm text-gray-600  mt-1">
                            {coach.specialties.map((s, i) => (
                              <span className="bg-[#F7F7F7] text-[10.8px] rounded-full px-2" key={i}>
                                {s}
                                {i < coach.specialties.length - 1 && (
                                  <span className="mx-1  text-gray-400">•</span>
                                )}
                              </span>
                            ))}
                            {coach.specialties.length > 1 && (
                              <span className=" font-medium">
                                +{coach.specialties.length - 1} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-3 text-sm">
                        <div className="text-gray-500 flex text-[12px] items-center gap-2">
                          <span className="text-gray-400"><LocationIcon></LocationIcon></span>{" "}
                          {coach.location}
                        </div>
                        <div className="flex items-center gap-3"></div>
                      </div>
                    </div>
                  </div>
                  <Array></Array>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Simple Bottom Sheet Modal - No Animation */}
      <div className="">
        {/* Filter Drawer */}
        <Drawer
          placement="bottom"
          open={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          closable={false}
          height="90%"
          
       
        >
          {/* Drag Handle */}
        
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-4 pb-3 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Filter</h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>

            {/* Short by */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Short by
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700">
                <option>Most popular</option>
                <option>Best rated</option>
                <option>Price: Low to High</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700">
                <option>€50–75</option>
                <option>€30–50</option>
                <option>Under €30</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700">
                <option>3–6 years</option>
                <option>1–3 years</option>
                <option>6+ years</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter your city and zip code"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400"
              />
            </div>

            {/* Specifications */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Specifications
              </label>

              {/* Tabs */}
              <div className="flex bg-accent rounded-lg p-1 mb-5">
                {["Fitness", "Kampfsport", "Ernährung"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveSpecTab(tab)}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium ${
                      activeSpecTab === tab
                        ? "bg-white text-black shadow-sm"
                        : "text-gray-600"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {currentSpecs.map((spec) => (
                  <span
                    key={spec}
                    className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${
                      spec === "Strength Training" ||
                      spec === "Boxing" ||
                      spec === "Nutritional Advice"
                        ? "bg-secondary text-primary border border-primary"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="p-6 border-t border-gray-200 bg-white">
            <button className="w-full bg-primary hover:bg-teal-700 text-white font-bold py-4 rounded-full text-lg">
              Submit
            </button>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default CoachPage;
