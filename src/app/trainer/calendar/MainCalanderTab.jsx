"use client";

import React, { useState } from "react";
import TranCalendarWithSlots from "./TranCalendar";
import ListSection from "./ListSection";


const MainCalanderTab = () => {
  const [activeTab, setActiveTab] = useState("calendar"); // "calendar" or "list"

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-300 mb-4">
        <button
          className={`flex-1 py-2 text-center font-semibold ${
            activeTab === "calendar"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("calendar")}
        >
          Calendar
        </button>
        <button
          className={`flex-1 py-2 text-center font-semibold ${
            activeTab === "list"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("list")}
        >
          List
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "calendar" && <TranCalendarWithSlots />}
        {activeTab === "list" && (
          <ListSection></ListSection>
        )}
      </div>
    </div>
  );
};

export default MainCalanderTab;
