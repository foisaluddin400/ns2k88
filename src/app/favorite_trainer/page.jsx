"use client";
import { Navigate } from "@/components/Navigate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";

const Favorite = () => {
  const coaches = [
    {
      id: 1,
      name: "Ann Smith",
      age: 26,
      specialties: ["Yoga", "Stretching"],
      location: 'B. Berlin or "Peak Fitness..."',
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
      location: 'B. Berlin or "Peak Fitness..."',
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
      location: 'B. Berlin or "Peak Fitness..."',
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
      location: 'B. Berlin or "Peak Fitness..."',
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
      location: 'B. Berlin or "Peak Fitness..."',
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
      location: 'B. Berlin or "Peak Fitness..."',
      price: "€32.00 /hr",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    },
    // Add more or set to [] to see empty state
  ];

  return (
    <div className="px-3 -mt-20 -mb-20">
      <Navigate></Navigate>
      <div className="space-y-4 ">
        {coaches.map((coach) => (
          <Link href={"/coach/coachDetails"} key={coach.id}>
            <div className="bg-white mb-2 rounded-3xl shadow-sm border border-gray-100  hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex gap-5 items-center p-5">
                <div className="flex w-full items-center  gap-4">
                  <div className="relative flex-shrink-0">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      width={80}
                      height={80}
                      className="rounded-3xl object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                          {coach.name}
                          <div className="flex items-center gap-1 font-semibold">
                            <span>{coach.rating}</span>
                            <FaStar className="text-yellow-500" />
                          </div>
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          {coach.specialties.map((s, i) => (
                            <span key={i}>
                              {s}
                              {i < coach.specialties.length - 1 && (
                                <span className="mx-1 text-gray-400">•</span>
                              )}
                            </span>
                          ))}
                          {coach.specialties.length > 1 && (
                            <span className="text-indigo-600 font-medium">
                              +{coach.specialties.length - 1} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3 text-sm">
                      <div className="text-gray-500">
                        <span className="text-gray-400">Location</span>{" "}
                        {coach.location}
                      </div>
                      <div className="flex items-center gap-3"></div>
                    </div>
                  </div>
                </div>
                <RiArrowRightSLine />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
