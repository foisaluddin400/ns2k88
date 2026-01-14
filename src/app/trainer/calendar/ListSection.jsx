"use client";

import Image from "next/image";
import { useState } from "react";
import { Drawer } from "antd";
import { X } from "lucide-react";
import { LocationIcon, MarkIcon, SvgICon1 } from "@/constant/svg.icon";
import ChatIcon from "@/components/shared/ChatIcon";
import Link from "next/link";
import TrainChatIcoList from "./TrainChatIcoList";

const ListSection = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [cancelDrawerOpen, setCancelDrawerOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedReason, setSelectedReason] = useState("");

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
      location: "e.g. Berlin ",
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
      Status: "Canceled By me",
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

  const openCancelDrawer = (session) => {
    setSelectedSession(session);
    setCancelDrawerOpen(true);
  };

  const closeCancelDrawer = () => {
    setCancelDrawerOpen(false);
    setSelectedReason("");
  };

  const submitCancel = () => {
    console.log("Cancel reason for", selectedSession?.name, selectedReason);
    closeCancelDrawer();
  };

  const getStatusBg = (status) => {
    switch (status) {
      case "Confirm":
        return "bg-[#E2F8F8] text-[#0A7676]";
      case "Complete":
        return "bg-[#F0F8FF] text-[#355979]";
      case "Canceled By me":
        return "bg-[#F7F7F7] text-[#FF4151]";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

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
          <div key={session.id} className="bg-white rounded-2xl border p-2">
            <div className="flex gap-4">
             <div> <Image
                src={session.image}
                alt={session.name}
                width={80}
                height={80}
                className="rounded-2xl"
              /></div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold flex items-center gap-1 text-[14px]">
                    {session.name}, {session.age} 
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusBg(
                      session.Status
                    )}`}
                  >
                    {session.Status}
                  </span>
                </div>

                <p className="font-medium text-[12px] flex gap-1 items-center">
                  <SvgICon1 />
                  {session.date} {session.time}
                </p>
                <p className="text-gray-600 text-[12px] flex gap-1 items-center">
                  <LocationIcon />
                  {session.location}
                </p>

                <div className="mt-4 flex gap-3">
                  {activeTab === "Upcoming" && session.Status === "Confirm" && (
                    <>
                      <button
                        onClick={() => openCancelDrawer(session)}
                        className="bg-gray-200 py-1 w-full rounded-full hover:bg-gray-50 px-3"
                      >
                        Cancel
                      </button>
                      <button className="border border-black w-[35px] h-[35px] rounded-full flex justify-center items-center">
                        <TrainChatIcoList></TrainChatIcoList>
                      </button>
                    </>
                  )}

                  {activeTab === "Past" && (
                    <Link
                      href="/review"
                      className="w-full border border-black py-1 rounded-xl text-center"
                    >
                      See Review
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cancel Drawer */}
      
      <Drawer
        
        placement="bottom"
        height={300}
        onClose={closeCancelDrawer}
        closable={false}
        open={cancelDrawerOpen}
        getContainer={false}
  style={{
    position: "absolute",
    left: "50%",                
    transform: "translateX(-50%)", 
    maxWidth: "768px",         
    width: "100%",
    
  }}

      >
        <button
          onClick={closeCancelDrawer}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
<h1 className="text-base font-bold italic">Cancel</h1>
        <p className="text-gray-400 text-sm">
          Specify the reason for the cancellation
        </p>
        <div className="flex flex-col gap-3 mt-6">
          {["Illness", "Travel", "Vacation", "Different reasons"].map(
            (reason) => (
              <label
                key={reason}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="cancelReason"
                  value={reason}
                  className="accent-[#0A7676] w-4 h-4"
                  checked={selectedReason === reason}
                  onChange={() => setSelectedReason(reason)}
                />
                <span className="text-[#0A7676]">{reason}</span>
              </label>
            )
          )}
        </div>

        <div className="">
          <button
            className="bg-primary w-full mt-4 text-white px-4 py-2 rounded-xl"
            onClick={closeCancelDrawer}
          >
            Cancel
          </button>
         
        </div>
      </Drawer>
    </div>
  );
};

export default ListSection;
