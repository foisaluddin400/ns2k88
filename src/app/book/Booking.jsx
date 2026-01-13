"use client";
import { Navigate } from "@/components/Navigate";
import { MarkIcon } from "@/constant/svg.icon";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const packages = [
  {
    id: "trial",
    title: "Trial Session",
    price: "0 €",
    subtitle: "PAKET ZUM KENNENLERNEN UND ERSTE ZIELANALYSE.",
    badge: null,
  },
  {
    id: "10",
    title: "10 Session Pack",
    price: "750 €",
    subtitle: "FOR THE BEST RESULT\nRECOMMENDED BY MOST CUSTOMERS",
    badge: "BESTSELLER",
  },
  {
    id: "5",
    title: "05-Session Pack",
    price: "400 €",
    subtitle: "BEST FOR REAL PROGRESS\n80€ PER SESSION",
    badge: null,
  },
  {
    id: "single",
    title: "Single Session",
    price: "90 €",
    subtitle: "PAY AS YOU GO",
    badge: null,
  },
];

const Booking = () => {
  const [selected, setSelected] = useState("trial");

  return (
    <div className=" -mt-20 -mb-20">
      <Navigate></Navigate>
      {/* Coach info */}
      <div className="flex bg-white  rounded-3xl border border  hover:shadow-md transition-shadow items-center gap-3 mb-6 p-3">
        <Image
          width={300}
          height={200}
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          alt="Coach"
          className="w-20 h-20 rounded-2xl object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg flex items-center gap-1">
            Ann Smith <span className="text-green-500"></span>
            <span className="">
                            <MarkIcon ></MarkIcon>
                          </span>
          </h3>
          <div className="flex gap-2 mt-1">
            <span className="text-xs text-[#7E8792] bg-gray-100 px-2 py-0.5 rounded-full">
              Yoga
            </span>
            <span className="text-xs text-[#7E8792] bg-gray-100 px-2 py-0.5 rounded-full">
              Stretching
            </span>
            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
              +1 more
            </span>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <h2 className="text-xl font-semibold mb-1 italic">Pricing & Packages</h2>
      <p className="text-sm text-gray-500 mb-4">
        Choose your Package for your goals.
      </p>

      {/* Packages */}
      <div className="space-y-4">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => setSelected(pkg.id)}
            className={`relative border rounded-2xl p-4 cursor-pointer transition ${
              selected === pkg.id
                ? "border-teal-600 bg-[#0A76760D]"
                : "border-gray-200 bg-white"
            }`}
          >
            {/* Radio */}
            <div className="absolute top-4 right-4">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  selected === pkg.id ? "border-teal-600" : "border-gray-300"
                }`}
              >
                {selected === pkg.id && (
                  <div className="w-3 h-3 rounded-full bg-teal-600" />
                )}
              </div>
            </div>

            {/* Badge */}
            {pkg.badge && (
              <span className="absolute right-4 bottom-4 text-[10px] bg-[#0A76760D] text-teal-700 px-2 py-0.5 rounded-full font-semibold">
                {pkg.badge}
              </span>
            )}

            <h3 className="font-semibold text-sm mb-1">{pkg.title}</h3>
            <p className="text-teal-700 text-lg font-bold mb-2">{pkg.price}</p>
            <p className="text-xs text-[#A3A9B0] whitespace-pre-line">
              {pkg.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link href={"/book-proccess"}>
        <button className="w-full mt-6 bg-[#0A7676] hover:bg-teal-800 text-white py-3 rounded-2xl italic font-semibold transition">
          Continue to Checkout
        </button>
      </Link>
    </div>
  );
};

export default Booking;
