"use client";

import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { ChatIcon, MarkIcon, RemainningIcon } from "@/constant/svg.icon";
import BookingList from "./BookingList";
import { Drawer, Modal } from "antd";
import BookingNextSession from "./BookingNextSession";

const Page = () => {
  const sessions = [
    {
      id: 1,
      name: "Ann Smith",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      remaining: 8,
      total: 10,
    },
    {
      id: 2,
      name: "Smith Smith",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      remaining: 2,
      total: 10,
    },
    {
      id: 3,
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      remaining: 5,
      total: 10,
    },
    {
      id: 4,
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      remaining: 3,
      total: 10,
    },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [rescheduleOpen, setNextSessionOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  // Drawer touch handlers
  const [startY, setStartY] = useState(null);
  const handleTouchStart = (e) => setStartY(e.touches[0].clientY);
  const handleTouchMove = (e) => {
    if (startY === null) return;
    const currentY = e.touches[0].clientY;
    if (currentY - startY > 80) {
      setDrawerOpen(false);
      setStartY(null);
    }
  };
  const handleTouchEnd = () => setStartY(null);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => {
    setDrawerOpen(false);
    setSelectedTrainer(null);
  };

  const handleSelectTrainer = (trainer) => setSelectedTrainer(trainer);

  const proceedBooking = () => {
    if (!selectedTrainer) return alert("Please select a trainer");
    // Drawer close & Next Session modal open
    setDrawerOpen(false);
    setNextSessionOpen(true);
  };

  const closeReschedule = () => {
    setNextSessionOpen(false);
    setSelectedTrainer(null);
  };

  return (
    <div className="">
      <h2 className="text-[14px] font-semibold text-black italic mb-3 mt-7">
        My Bookings
      </h2>

      {/* Sessions Slider */}
      <Splide
        options={{
          perPage: 2,
          gap: "1.25rem",
          pagination: false,
          arrows: false,
          drag: true,
          breakpoints: {
            640: { perPage: 1 },
            768: { perPage: 1.5 },
          },
        }}
      >
        {sessions.map((item) => (
          <SplideSlide key={item.id}>
            <div className="bg-white rounded-2xl border border-gray-200 p-3 flex items-center gap-4 shadow-sm">
              <Image
                src={item.image}
                width={60}
                height={60}
                alt={item.name}
                className="rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <h3 className="font-bold text-gray-900 text-[14px]">
                    {item.name}
                  </h3>
                  <span>
                    <MarkIcon></MarkIcon>
                  </span>
                </div>
                <p className="text-[10px] flex text-gray-600 mt-1">
                  <span className="mr-1">
                    <RemainningIcon></RemainningIcon>
                  </span>{" "}
                  REMAINING SESSION{" "}
                  <h1 className="flex ">
                    <span className="text-primary font-semibold">
                      {item.remaining}
                    </span>
                    of {item.total}
                  </h1>
                </p>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(item.remaining / item.total) * 100}%`,
                      backgroundColor: "#1CA7A6",
                    }}
                  ></div>
                </div>
              </div>

              <button className="w-10 h-10 bg-[#A2A4A9] rounded-full flex items-center justify-center">
                <ChatIcon />
              </button>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Book Next Session Button */}
      <button
        className="bg-primary w-full p-3 rounded-xl text-white mt-4"
        onClick={openDrawer}
      >
        Book your next session
      </button>

      {/* 🔹 Drawer for Trainer Selection */}
      <Drawer
        placement="bottom"
        height="60%"
        open={drawerOpen}
        onClose={closeDrawer}
        closable={false}
        className="app-drawer"
      >
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="p-4"
        >
          <h2 className="text-lg font-semibold mb-4 text-center">
            Select Your Trainer
          </h2>

          <div className="space-y-3 max-h-[50%] overflow-y-auto">
            {sessions.map((trainer) => (
              <div
                key={trainer.id}
                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer ${
                  selectedTrainer?.id === trainer.id
                    ? "border-primary bg-[#E0F7F7]"
                    : "border-gray-200 bg-white"
                }`}
                onClick={() => handleSelectTrainer(trainer)}
              >
                <Image
                  src={trainer.image}
                  width={60}
                  height={60}
                  alt={trainer.name}
                  className="rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{trainer.name}</h3>
                  <p className="text-sm text-gray-500">
                    ⏳ Remaining Sessions: {trainer.remaining} of{" "}
                    {trainer.total}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="w-full mt-6 bg-[#0A7676] text-white py-3 rounded-xl font-semibold"
            onClick={proceedBooking}
          >
            Proceed to Booking
          </button>
        </div>
      </Drawer>

     
      <BookingNextSession
        open={rescheduleOpen}
        onClose={closeReschedule}
        trainer={selectedTrainer} 
      />
      {/* <BookingNextSession
        open={rescheduleOpen}
        onClose={closeReschedule}
      ></BookingNextSession> */}
      {/* Existing Booking List Component */}
      <BookingList />
    </div>
  );
};

export default Page;
