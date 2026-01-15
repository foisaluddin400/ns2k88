"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft, FaTrash } from "react-icons/fa6";
import SendIcon from "../SendIcon";
import DotIcon from "../DotIcon";
import Array from "@/app/coach/Array";
import ReportIcon from "../ReportIcon";

const messages = [
  { id: 1, text: "Hello!", sender: "other" },
  { id: 2, text: "Hi, how are you?", sender: "me" },
  {
    id: 3,
    text: "Find strangers worldwide, the new modern Omegle and OmeTV alternative.",
    sender: "other",
  },
  { id: 4, text: "I am good 😊", sender: "me" },
  {
    id: 5,
    text: "Enjoy video chats with strangers worldwide.",
    sender: "other",
  },
];

const ChatDetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-[#F7F7F7]">
      {/* ================= HEADER (FIXED TOP) ================= */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#F7F7F7] border-b">
        <div className="flex justify-between items-center px-3 py-4 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="border w-[40px] h-[40px] flex justify-center items-center rounded-full"
            >
              <FaArrowLeft />
            </button>

            <img
              className="w-[45px] h-[45px] rounded-2xl"
              src="https://i.pravatar.cc/150?img=33"
              alt=""
            />

            <div>
              <h2 className="font-semibold text-[14px]">
                Chat with User {id}
              </h2>
              <span className="text-[12px] text-gray-500">Online</span>
            </div>
          </div>

          {/* Dot menu */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="p-2 rounded-full border"
            >
              <DotIcon />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border shadow-md rounded-md z-50">
                <button className="flex justify-between items-center w-full px-4 py-2 hover:bg-red-50">
                  <div className="flex items-center gap-2">
                    <FaTrash /> Delete
                  </div>
                  <Array />
                </button>

                <button className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-100">
                  <div className="flex items-center gap-2">
                    <ReportIcon /> Report
                  </div>
                  <Array />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= MESSAGES (SCROLLABLE) ================= */}
      <div className="flex-1 overflow-y-auto px-3 pt-[90px] pb-[90px] max-w-3xl mx-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[70%] px-4 py-2 text-sm mb-3 ${
              msg.sender === "me"
                ? "bg-[#BEE0E0] rounded-l-3xl rounded-tr-3xl ml-auto"
                : "bg-[#EFF0F2] rounded-r-3xl rounded-tl-3xl"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* ================= INPUT (FIXED BOTTOM) ================= */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="flex gap-2 p-3 max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 outline-none"
          />
          <button>
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatDetailsPage;
