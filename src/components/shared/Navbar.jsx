"use client";
import React from "react";
import { Home, User, MessageSquare, CalendarDays } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/", icon: <Home className="w-7 h-7" /> },
    { label: "Coach", path: "/coach", icon: <User className="w-7 h-7" /> },
    {
      label: "Booking",
      path: "/booking",
      icon: <CalendarDays className="w-7 h-7" />,
    },
    {
      label: "Chat",
      path: "/chat",
      icon: <MessageSquare className="w-7 h-7" />,
    },
    { label: "Profile", path: "/profile", icon: <User className="w-7 h-7" /> },
  ];

  const isPathActive = (item) => pathname === item.path;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white  z-50">
      {/* Center container like layout */}
      <div className="max-w-3xl mx-auto border-t flex items-center justify-between px-4 py-2">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.path}
            className="flex flex-col items-center"
          >
            <div
              className={`flex justify-center items-center  ${
                isPathActive(item)
                  ? "bg-primary text-white w-[55px] h-[55px] rounded-full -mt-6"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item.icon}
            </div>
            <p
              className={`text-sm mt-1 ${
                isPathActive(item)
                  ? "text-primary font-medium"
                  : "text-gray-600"
              }`}
            >
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
