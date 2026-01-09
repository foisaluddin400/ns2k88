"use client";
import { Navigate } from "@/components/Navigate";
import React from "react";

const notifications = [
  {
    id: 1,
    title: "Session Confirmed",
    message: "Your session with Ann Smith has been confirmed.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    title: "Payment Successful",
    message: "Your payment for the January session was successful.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    title: "New Message",
    message: "You have received a new message from your trainer.",
    time: "2 days ago",
    unread: false,
  },
];

const Notification = () => {
  return (
   <div className="px-3 -mt-20 -mb-20">
      <Navigate></Navigate>
      <div className=" space-y-3">
        {notifications.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl p-4 border flex gap-3 ${
              item.unread
                ? "bg-[#E6F7F7] border-[#1CA7A6]"
                : "bg-white border-gray-200"
            }`}
          >
            {/* Dot */}
            <div className="mt-1">
              {item.unread && (
                <span className="block w-2 h-2 rounded-full bg-[#1CA7A6]" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <span className="text-xs text-gray-500">{item.time}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{item.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (optional later) */}
      {/* 
      <div className="flex flex-col items-center justify-center h-[70vh] text-gray-400">
        <p>No notifications yet</p>
      </div>
      */}
    </div>
  );
};

export default Notification;
