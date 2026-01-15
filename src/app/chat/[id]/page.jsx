"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft, FaTrash, FaFlag, FaAngleRight } from "react-icons/fa6"; // icons
import SendIcon from "../SendIcon";
import DotIcon from "../DotIcon";
import Array from "@/app/coach/Array";
import ReportIcon from "../ReportIcon";

const messages = [
  {
    id: 1,
    text: "Hello! ",
    sender: "other",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 2,
    text: "Hi, how are you?",
    sender: "me",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 3,
    text: "Find strangers worldwide, the new modern Omegle and OmeTV alternative. Connect with real people, enjoy ad free text and video chats, and build genuine friendships.",
    sender: "other",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 4,
    text: "I am good 😊",
    sender: "other",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 5,
    text: "Find strangers worldwide, the new modern Omegle and OmeTV alternative. Connect with real people, enjoy ad free text and video chats, and build genuine friendships.",
    sender: "me",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 6,
    text: "I am good 😊",
    sender: "other",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 7,
    text: "Enjoy video chats with strangers worldwide, our platform is designed to make it easy and safe to connect with people from all over the world. Meet new people, make friends, and have fun! Discover new people, make real and genuine connections, learn new languages or just have casual text or video chats. Our platform is designed to help you experience the best of online chatting. ",
    sender: "other",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 8,
    text: "I am good 😊",
    sender: "me",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
];

const ChatDetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDotClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="min-h-[90vh] flex flex-col -mb-20 ">
      {/* Header */}
      <div className="flex justify-between -mt-24 py-7 items-center relative">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="border w-[40px] h-[40px] flex justify-center items-center rounded-full"
          >
            <FaArrowLeft />
          </button>
          <img className="w-[45px] h-[45px] rounded-2xl" src={"https://i.pravatar.cc/150?img=33"} alt="" />
          <div>
            <h2 className="font-semibold text-[14px]">Chat with User {id}</h2>
            <span className="text-[12px]">Online</span>
          </div>
        </div>

        {/* Dot Icon + Dropdown */}
        <div className="relative">
          <button onClick={handleDotClick} className="p-2 rounded-full border hover:bg-gray-200">
            {/* Your DotIcon could be three dots */}
           <DotIcon></DotIcon>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border shadow-md rounded-md overflow-hidden z-50">
              {/* Delete */}
              <button className="flex justify-between items-center w-full px-4 py-2 hover:bg-red-50 ">
                <div className="flex items-center gap-2">
                  <FaTrash /> Delete
                </div>
                <Array></Array>
              </button>
              {/* Report */}
              <button className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-100 text-gray-800">
                <div className="flex items-center gap-2">
                  <ReportIcon></ReportIcon> Report
                </div>
               <Array></Array>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-3 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[70%] px-4 py-2 text-sm ${
              msg.sender === "me"
                ? "bg-[#BEE0E0] rounded-l-3xl rounded-tr-3xl text-black ml-auto"
                : "bg-[#EFF0F2] rounded-r-3xl rounded-tl-3xl text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 -mx-3 bg-white flex gap-2">
        <input type="text" placeholder="Type a message..." className="flex-1 px-4 py-2 outline-none" />
        <button>
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default ChatDetailsPage;
