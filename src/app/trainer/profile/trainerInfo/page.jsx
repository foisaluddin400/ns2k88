"use client";

import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import image from "../../../../../public/img/charecter.jpg";
import image1 from "../../../../../public/img/charecter.jpg";
import image2 from "../../../../../public/img/charecter.jpg";

import { Navigate } from "@/components/Navigate";
import ShareIcon from "@/app/coach/coachDetails/ShareIcon";
import LoveIcon from "@/app/coach/coachDetails/LoveIcon";
import DetailsInfo from "@/app/coach/coachDetails/DetailsInfo";
import Review from "@/app/coach/coachDetails/Review";
import TrainDetailsInfo from "./TrainDetailsInfo";
import TrainReviewInfo from "./TrainReviewInfo";


const page = () => {
  const images = [image, image1, image2];

  return (
    <div className=" -mt-20">
      
      <div className="flex justify-between items-center">
        <Navigate ></Navigate>
        <div className="flex gap-2">
          <div className="bg-white border rounded-full w-[50px] h-[50px] flex justify-center items-center">
            <ShareIcon></ShareIcon>
          </div>
          <div className="bg-white border rounded-full w-[50px] h-[50px] flex justify-center items-center">
            <LoveIcon></LoveIcon>
          </div>
        </div>
      </div>
     <div className="-mx-3">
       <Splide
        options={{
          type: "loop",
          perPage: 1,
          gap: "1.25rem",
          padding: "0rem",
          pagination: true,
          arrows: false,
          drag: true,
          rewind: true,
          autoplay: true,
          interval: 3000,
          breakpoints: {
            640: { perPage: 1 },
            768: { perPage: 1 },
            1024: { perPage: 1 },
          },
        }}
        aria-label="Upcoming Sessions"
      >
        {images.map((img, idx) => (
          <SplideSlide key={idx}>
            <div className="w-full  h-[30vh]  overflow-hidden shadow-md">
              <Image
                src={img}
                alt={`slider-image-${idx}`}
                className="object-cover w-full h-full"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
     </div>
      <TrainDetailsInfo></TrainDetailsInfo>
      <TrainReviewInfo></TrainReviewInfo>
    </div>
  );
};

export default page;
