"use client";
import React, { useState } from "react";
import { Drawer, Input } from "antd";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { SearchOutlined } from "@ant-design/icons";
import { Navigate } from "@/components/Navigate";
const trainers = [
  {
    id: 1,
    name: "John Smith",
    location: "Berlin, Germany",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Anna Muller",
    location: "Munich, Germany",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "David Lee",
    location: "Hamburg, Germany",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const faqs = [
  {
    q: "How do I book a session?",
    a: "Choose a trainer that fits your goals and book an available slot.",
  },
  {
    q: "How does payment work?",
    a: "Payments are processed securely after confirming your session.",
  },
  {
    q: "Problems with my trainer?",
    a: "You can report issues using the form below.",
  },
];

const Page = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [topic, setTopic] = useState("");
  const [trainerDrawer, setTrainerDrawer] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const [startY, setStartY] = useState(null);

  const handleTouchStart = (e) => setStartY(e.touches[0].clientY);
  const handleTouchMove = (e) => {
    if (startY === null) return;
    const currentY = e.touches[0].clientY;
    if (currentY - startY > 80) {
      setTrainerDrawer(false);
      setStartY(null);
    }
  };
  const handleTouchEnd = () => setStartY(null);

  return (
    <div className=" -mt-20 -mb-20">
         <Navigate></Navigate>
      <div className="">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-center mb-6">
          How can we help you?
        </h1>

        {/* FAQ */}
        <h2 className="font-semibold mb-3">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow cursor-pointer"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium">{item.q}</p>
                {openFaq === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              {openFaq === index && (
                <p className="text-sm text-gray-600 mt-2">{item.a}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <h2 className="font-semibold mt-8 mb-3">Send us a message</h2>

        {/* Topic */}
        <select
          className="w-full border rounded-lg px-4 py-3 mb-4"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option value="">Select topic</option>
          <option value="general">General Inquiry</option>
          <option value="session">Session Failure</option>
        </select>

        {/* Trainer Field */}
        {topic === "session" && (
          <div
            className="w-full border rounded-lg px-4 py-3 mb-4 cursor-pointer bg-white"
            onClick={() => setTrainerDrawer(true)}
          >
            {selectedTrainer ? selectedTrainer.name : "Select Trainer"}
          </div>
        )}

        {/* Message */}
        <textarea
          rows="4"
          placeholder="Your message"
          className="w-full border rounded-lg px-4 py-3 mb-6"
        />

        <button className="w-full bg-teal-600 text-white py-3 rounded-full font-semibold">
          Send message
        </button>
      </div>

      <Drawer
        placement="bottom"
        height="50%"
        open={trainerDrawer}
        onClose={() => setTrainerDrawer(false)}
        closable={false}
        className="app-drawer"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-2 "
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <h3 className="font-semibold text-2xl">Search Trainer</h3>
          <button
            onClick={() => setTrainerDrawer(false)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Trainer List */}
        <div className=" py-3 space-y-4">
            <Input
           
            placeholder="Search by name..."
            prefix={<SearchOutlined />}
            style={{ maxWidth: "100%", height: "40px", borderRadius: '30px' }}
          />
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="flex items-center bg-white border gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedTrainer(trainer);
                setTrainerDrawer(false);
              }}
            >
              <img
                src={trainer.image}
                className="w-12 h-12 rounded-full"
                alt=""
              />
              <div>
                <p className="font-medium">{trainer.name}</p>
                <p className="text-sm text-gray-500">{trainer.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Page;
