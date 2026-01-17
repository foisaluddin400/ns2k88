"use client";

import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";


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

const TrainReviewInfo = () => {
  return (
    <div className="">
      {/* <h2 className="text-lg font-semibold mb-3">Reviews (23)</h2> */}

      {/* <Splide
        options={{
          type: "slide",
          perPage: 2,
          perMove: 1,
          gap: "1rem",
          padding: "0.5rem",
          pagination: false,
          arrows: false,
          drag: true,
          breakpoints: {
            640: { perPage: 1 },
            768: { perPage: 1.5 },
            1024: { perPage: 2 },
          },
        }}
      >
        {reviews.map((review) => (
          <SplideSlide key={review.id}>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 h-full">
          
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full"
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

            
              <p className="text-sm text-gray-700 mt-3 leading-5">
                {review.text}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide> */}

      {/* Bottom Link */}
      {/* <div className="text-center mt-4">
        <Link href={'/viewAllReview'}><button className="text-primary font-medium">View all reviews</button></Link>
      </div> */}

      <div className="">
        <div className="space-y-3">
          {/* Location */}
          <div className="bg-white shadow-sm border p-4 rounded-2xl flex items-start justify-between">
            <div className="flex gap-3">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.071 0H4.02913C1.80742 0 0 1.80795 0 4.03032V11.3896C0 13.612 1.80742 15.4199 4.02913 15.4199H12.071C14.2927 15.4199 16.1001 13.612 16.1001 11.3896V4.03032C16.1001 1.80795 14.2927 0 12.071 0ZM1.42135 4.03032C1.42135 2.59215 2.59139 1.42176 4.02913 1.42176H12.071C13.5087 1.42176 14.6788 2.59215 14.6788 4.03032V11.3896C14.6788 12.8278 13.5087 13.9982 12.071 13.9982H4.02913C2.59139 13.9982 1.42135 12.8278 1.42135 11.3896V4.03032Z"
                  fill="#7E8792"
                />
                <path
                  d="M8.04856 11.4587C10.1146 11.4587 11.7963 9.77733 11.7963 7.70981C11.7963 5.64228 10.1155 3.96094 8.04856 3.96094C5.98164 3.96094 4.30078 5.64228 4.30078 7.70981C4.30078 9.77733 5.98164 11.4587 8.04856 11.4587ZM8.04856 5.3836C9.3315 5.3836 10.375 6.42739 10.375 7.71072C10.375 8.99404 9.3315 10.0378 8.04856 10.0378C6.76561 10.0378 5.72213 8.99404 5.72213 7.71072C5.72213 6.42739 6.76561 5.3836 8.04856 5.3836Z"
                  fill="#7E8792"
                />
                <path
                  d="M12.1426 4.56704C12.6989 4.56704 13.1524 4.11438 13.1524 3.55697C13.1524 2.99955 12.6998 2.54688 12.1426 2.54688C11.5853 2.54688 11.1328 2.99955 11.1328 3.55697C11.1328 4.11438 11.5853 4.56704 12.1426 4.56704Z"
                  fill="#7E8792"
                />
              </svg>

              <div>
                <p className="text-xs text-gray-900 uppercase">
                  Instagram
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white shadow-sm border p-4 rounded-2xl">
            <div className="flex gap-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.99922 2.25H6.74922C5.28672 6.63 5.28672 11.37 6.74922 15.75H5.99922"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.25 2.25C12.7125 6.63 12.7125 11.37 11.25 15.75"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.25 12V11.25C6.63 12.7125 11.37 12.7125 15.75 11.25V12"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.25 6.74922C6.63 5.28672 11.37 5.28672 15.75 6.74922"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div>
                <p className="text-xs text-gray-900  uppercase">
                  Portfolio
                </p>
              </div>
            </div>
          </div>

          {/* Certificate */}
        <Link href={"/trainer/profile/trainerInfo/trainerEdit"}>
          <button className="w-full mt-8 mb-8 bg-primary text-white font-bold py-3 rounded-2xl italic transition-colors">
           Edit
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainReviewInfo;
