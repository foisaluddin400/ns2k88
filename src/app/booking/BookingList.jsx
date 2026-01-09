"use client";

import Image from "next/image";
import { useState } from "react";
import { Drawer, Rate, Input, Calendar } from "antd";
import ResheduleDrawar from "./ResheduleDrawar";

const { TextArea } = Input;

const BookingList = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [reviewOpen, setReviewOpen] = useState(false);
  const [rescheduleConfirmOpen, setRescheduleConfirmOpen] = useState(false);
  const [rescheduleOpen, setRescheduleOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const upcomingSessions = [
    {
      id: 1,
      name: "Ann Smith",
      age: 26,
      date: "21-10-2025",
      Status: "Confirm",
      time: "7:00 pm",
      location: "e.g. Berlin or Peak Fitness",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    },
  ];

  const pastSessions = [
    {
      id: 2,
      name: "Ann Smith",
      age: 26,
      date: "10-09-2025",
      Status: "Complete",
      time: "6:00 pm",
      location: "e.g. Berlin or Peak Fitness",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    },
  ];

  const canceledSessions = [
    {
      id: 3,
      name: "Ann Smith",
      age: 26,
      date: "01-08-2025",
      Status: "Canceled",
      time: "5:00 pm",
      location: "e.g. Berlin or Peak Fitness",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    },
  ];

  const getSessions = () => {
    if (activeTab === "Upcoming") return upcomingSessions;
    if (activeTab === "Past") return pastSessions;
    return canceledSessions;
  };

  // Review handlers
  const openReviewModal = (session) => {
    setSelectedSession(session);
    setReviewOpen(true);
  };
  const closeReviewModal = () => {
    setReviewOpen(false);
    setRating(0);
    setReviewText("");
  };
  const submitReview = () => {
    console.log({
      coach: selectedSession?.name,
      rating,
      reviewText,
    });
    closeReviewModal();
  };

  // Reschedule handlers
  const openRescheduleConfirm = (session) => {
    setSelectedSession(session);
    setRescheduleConfirmOpen(true);
  };
  const closeRescheduleConfirm = () => setRescheduleConfirmOpen(false);
  const proceedReschedule = () => {
    setRescheduleConfirmOpen(false);
    setRescheduleOpen(true);
  };
  const closeReschedule = () => setRescheduleOpen(false);

  // Drawer touch handlers
  const [startY, setStartY] = useState(null);
  const handleTouchStart = (e) => setStartY(e.touches[0].clientY);
  const handleTouchMove = (e) => {
    if (startY === null) return;
    const currentY = e.touches[0].clientY;
    if (currentY - startY > 80) {
      closeReviewModal();
      closeRescheduleConfirm();
      closeReschedule();
      setStartY(null);
    }
  };
  const handleTouchEnd = () => setStartY(null);

  return (
    <div className="mt-8">
      {/* Tabs */}
      <div className="flex gap-3 bg-accent rounded-lg p-1 shadow-sm">
        {["Upcoming", "Past", "Canceled"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 w-full py-3 rounded-lg text-sm font-medium ${
              activeTab === tab
                ? "bg-white shadow-sm"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sessions */}
      <div className="space-y-4 mt-5">
        {getSessions().map((session) => (
          <div key={session.id} className="bg-white rounded-2xl border p-3">
            <div className="flex gap-4">
              <Image
                src={session.image}
                alt={session.name}
                width={80}
                height={80}
                className="rounded-full"
              />

              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold">
                    {session.name}, {session.age}
                  </h3>
                  <span className="bg-[#E2F8F8] text-primary px-2 py-1 rounded-full text-xs">
                    {session.Status}
                  </span>
                </div>

                <p className="font-medium">
                  {session.date} {session.time}
                </p>
                <p className="text-gray-600">{session.location}</p>

                <div className="mt-4 flex gap-3">
                  {activeTab === "Upcoming" && (
                    <>
                      <button className="flex-1 border border-gray-300 py-1 rounded-xl hover:bg-gray-50">
                        Cancel
                      </button>
                      <button
                        className="flex-1 border border-black py-1 rounded-xl"
                        onClick={() => openRescheduleConfirm(session)}
                      >
                        Reschedule
                      </button>
                    </>
                  )}

                  {activeTab === "Past" && (
                    <button
                      onClick={() => openReviewModal(session)}
                      className="w-full border border-black py-1 rounded-xl"
                    >
                      Review
                    </button>
                  )}

                  {activeTab === "Canceled" && (
                    <button
                      className="w-full border border-black py-1 rounded-xl"
                      onClick={() => openRescheduleConfirm(session)}
                    >
                      Reschedule
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Review Drawer */}
      <Drawer
        placement="bottom"
        height="45%"
        open={reviewOpen}
        onClose={closeReviewModal}
        closable={false}
        className="app-drawer"
      >
        {selectedSession && (
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4 cursor-pointer"
              onClick={closeReviewModal}
            />

            <div className="flex items-center gap-3 mb-4">
              <Image
                src={selectedSession.image}
                alt={selectedSession.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold">{selectedSession.name}</h3>
                <p className="text-xs text-gray-500">
                  {selectedSession.date} • {selectedSession.time}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-medium mb-2">Rate your session</p>
              <Rate value={rating} onChange={setRating} />
            </div>

            <div className="mb-4">
              <TextArea
                rows={4}
                placeholder="Write your review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </div>

            <button
              onClick={submitReview}
              className="w-full mt-6 bg-[#0A7676] hover:bg-teal-800 text-white py-3 rounded-xl font-semibold transition"
            >
              Rate
            </button>
          </div>
        )}
      </Drawer>

      {/* 🔹 Reschedule Confirm Drawer */}
      <Drawer
        placement="bottom"
        height="30%"
        open={rescheduleConfirmOpen}
        onClose={closeRescheduleConfirm}
        closable={false}
        className="app-drawer"
      >
        <div className="text-center">
          <div className="flex justify-center">
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64.6801 32.2202L60.6301 27.4802C59.8801 26.5802 59.2501 24.9002 59.2501 23.7002V18.6002C59.2501 15.4202 56.6401 12.8102 53.4601 12.8102H48.3601C47.1601 12.8102 45.4501 12.1802 44.5501 11.4302L39.8101 7.38023C37.7401 5.61023 34.3501 5.61023 32.2801 7.38023L27.4801 11.4302C26.5801 12.1802 24.9001 12.8102 23.7001 12.8102H18.5101C15.3301 12.8102 12.7201 15.4202 12.7201 18.6002V23.7002C12.7201 24.8702 12.1201 26.5502 11.3701 27.4502L7.32014 32.2202C5.58014 34.3202 5.58014 37.6802 7.32014 39.7202L11.3701 44.4902C12.1201 45.3602 12.7201 47.0702 12.7201 48.2402V53.3702C12.7201 56.5502 15.3301 59.1602 18.5101 59.1602H23.7301C24.9001 59.1602 26.6101 59.7902 27.5101 60.5402L32.2501 64.5902C34.3201 66.3602 37.7101 66.3602 39.7801 64.5902L44.5201 60.5402C45.4201 59.7902 47.1001 59.1602 48.3001 59.1602H53.4001C56.5801 59.1602 59.1901 56.5502 59.1901 53.3702V48.2702C59.1901 47.0702 59.8201 45.3902 60.5701 44.4902L64.6201 39.7502C66.4501 37.7102 66.4501 34.3202 64.6801 32.2202ZM33.7501 24.3902C33.7501 23.1602 34.7701 22.1402 36.0001 22.1402C37.2301 22.1402 38.2501 23.1602 38.2501 24.3902V38.8802C38.2501 40.1102 37.2301 41.1302 36.0001 41.1302C34.7701 41.1302 33.7501 40.1102 33.7501 38.8802V24.3902ZM36.0001 50.6102C34.3501 50.6102 33.0001 49.2602 33.0001 47.6102C33.0001 45.9602 34.3201 44.6102 36.0001 44.6102C37.6501 44.6102 39.0001 45.9602 39.0001 47.6102C39.0001 49.2602 37.6801 50.6102 36.0001 50.6102Z"
                fill="#FDBA45"
              />
            </svg>
          </div>
<h1 className="text-2xl font-bold mb-3">Hey!</h1>
          <p className="text-sm  mb-4">
            Are you sure you want to cancel/reschedule? Do you still want to proceed?
          </p>
        
          <button
            onClick={proceedReschedule}
            className="bg-[#0A7676] w-full text-white py-3 px-6 rounded-xl font-semibold"
          >
            Proceed anyway
          </button>
        </div>
      </Drawer>

      {/* 🔹 Reschedule Drawer */}
      <ResheduleDrawar
        open={rescheduleOpen}
        onClose={closeReschedule}
      ></ResheduleDrawar>
    </div>
  );
};

export default BookingList;
