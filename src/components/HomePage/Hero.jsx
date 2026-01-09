"use client";
import { CalenderIcon, MessageIcon } from "@/constant/svg.icon";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // default theme (clean & minimal)
import { Calendar1Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GiConfirmed } from "react-icons/gi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const sessions = [
  {
    id: 1,
    name: "Ann Smith",
    age: 26,
    date: "21-10-2025",
    time: "7:00 pm",
    location: "e.g. Berlin or Peak Fitness",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Ann Smith",
    age: 26,
    date: "21-10-2025",
    time: "7:00 pm",
    location: "e.g. Berlin or Peak Fitness",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Ann Smith",
    age: 26,
    date: "21-10-2025",
    time: "7:00 pm",
    location: "e.g. Berlin or Peak Fitness",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Ann Smith",
    age: 26,
    date: "21-10-2025",
    time: "7:00 pm",
    location: "e.g. Berlin or Peak Fitness",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
  },
  // Add more as needed...
];
const Hero = () => {
  return (
    <div className="px-3 font-style">
      <div>
        <h1 className="text-2xl font-bold italic mb-2">Hello, Alex!</h1>
      </div>

      <div className="flex items-center gap-3 bg-secondary p-5 rounded-md">
        <div>
          <CalenderIcon />
        </div>
        <div>
          <h1 className="text-xl font-semibold italic pb-2">
            Book Your next session!
          </h1>
          <p>This will increase the level of customer confidence</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-neutral mb-2 mt-7 ">
        Upcoming sessions
      </h2>

      <Splide
        options={{
          type: "slide",
          perPage: 2,
          perMove: 1,
          gap: "1.25rem",
          padding: "0.5rem",
          pagination: false,
          arrows: false,
          drag: true,
          autoplay: false,
          rewind: true,
          focus: 0,
          breakpoints: {
            640: { perPage: 1.2 },
            768: { perPage: 1.8 },
            1024: { perPage: 2 },
            1280: { perPage: 2 },
          },
        }}
        aria-label="Upcoming Sessions"
      >
        {sessions.map((session) => (
          <SplideSlide key={session.id}>
            <div className="bg-white text-sm rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full">
              <div className="flex items-start p-2 gap-4">
                {/* Profile Image */}
                <Link href={"/coach/coachDetails"}>
                  {" "}
                  <div className="relative flex-shrink-0">
                    <Image
                      src={session.image}
                      alt={session.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover border-4 border-white shadow-md"
                    />
                  </div>
                </Link>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className=" font-bold text-gray-900 truncate">
                      {session.name}, {session.age}
                    </h3>
                    <button className="bg-[#E2F8F8] hover:bg-teal-600 text-primary text-sm px-2 py-1 rounded-full transition whitespace-nowrap">
                      Confirm
                    </button>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="font-medium">
                      {session.date} {session.time}
                    </p>
                    <p className="flex items-center gap-2">
                      {session.location}
                    </p>
                  </div>

                  <div className="flex gap-3 mt-5">
                    <button className="flex-1 border border-gray-300 text-gray-700 py-1 rounded-xl font-medium hover:bg-gray-50 transition">
                      Cancel
                    </button>
                    <button className="flex-1 border border-black text-black py-1 rounded-xl font-medium  transition">
                      Reschedule
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <div className="space-y-4 mt-7">
           <h2 className="text-xl font-semibold text-neutral mb-2 mt-7 ">
        Latest activities
      </h2>
        <div className="flex items-center gap-3 bg-white p-5 rounded-md">
          <div className="bg-accent p-2 rounded-md">
            <IoIosCheckmarkCircleOutline className="w-6 h-6" />
          </div>
          <div>
            <h1 className="pb-2">Session with James K, completed</h1>
            <p className="text-neutral text-sm">YESTERDAY, 6:30 AM</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white p-5 rounded-md">
          <div className="bg-accent p-2 rounded-md">
            <MessageIcon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="pb-2">Session with James K, completed</h1>
            <p className="text-neutral text-sm">YESTERDAY, 6:30 AM</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white p-5 rounded-md">
          <div className="bg-accent p-2 rounded-md">
            <IoIosCheckmarkCircleOutline className="w-6 h-6" />
          </div>
          <div>
            <h1 className="pb-2">Session with James K, completed</h1>
            <p className="text-neutral text-sm">YESTERDAY, 6:30 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
