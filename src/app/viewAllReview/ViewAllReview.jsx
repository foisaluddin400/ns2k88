"use client";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const ViewAllReview = () => {
  const reviews = [
    {
      id: 1,
      name: "Ann Smith",
      date: "24-10-2025",
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet consectetur. Felis et lacus ut egestas urna aliquam scelerisque pretium mauris. Risus aliquam varius ut a. In est viverra dui.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Ann Smith",
      date: "24-10-2025",
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet consectetur. Felis et lacus ut egestas urna aliquam scelerisque pretium mauris. Risus aliquam varius ut a. In est viverra dui.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Ann Smith",
      date: "24-10-2025",
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet consectetur. Felis et lacus ut egestas urna aliquam scelerisque pretium mauris. Risus aliquam varius ut a. In est viverra dui.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Ann Smith",
      date: "24-10-2025",
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet consectetur. Felis et lacus ut egestas urna aliquam scelerisque pretium mauris. Risus aliquam varius ut a. In est viverra dui.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    },
  ];

  return (
    <div className="px-3">
        <h2 className=" mb-2 font-semibold">Review - 23</h2>
      {reviews.map((review) => (
        <div key={review.id}  className="bg-white rounded-3xl mb-3 p-4 shadow-sm border border-gray-200 h-full">
          {/* Top Section */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={review.image}
                alt={review.name}
                width={40}
                height={40}
                className="rounded-3xl"
              />

              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 font-semibold">
              <span>{review.rating}</span>
              <FaStar className="text-yellow-400 text-sm" />
            </div>
          </div>

          {/* Review Text */}
          <p className="text-sm text-gray-700 mt-3 leading-5">{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewAllReview;
