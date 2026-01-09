"use client";
import React from "react";
import { Home, User, MessageSquare, CalendarDays } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeIcon from "./HomeIcon";
import ClientIcon from "./ClientIcon";
import CalenderIcon from "./CalenderIcon";
import ChatIcon from "./ChatIcon";
import UserIcon from "./UserIcon";

export const Navbar = () => {
  const pathname = usePathname();

const navItems = [
  {
    label: "Home",
    path: "/",
    icon: (active) => (
      <HomeIcon
        color={active ? "white" : "#A3A9B0"}
        className="w-7 h-7"
      />
    ),
  },
  {
    label: "Coach",
    path: "/coach",
    icon: (active) => (
      <ClientIcon
        color={active ? "white" : "#A3A9B0"}
        className="w-7 h-7"
      />
    ),
  },
  {
    label: "Booking",
    path: "/booking",
    icon: (active) => (
      <CalenderIcon
               color={active ? "white" : "#A3A9B0"}
        className="w-7 h-7"
      />
    ),
  },
  {
    label: "Chat",
    path: "/chat",
    icon: (active) => (
      <ChatIcon
               color={active ? "white" : "#A3A9B0"}
        className="w-7 h-7"
      />
    ),
  },
  {
    label: "Profile",
    path: "/profile",
    icon: (active) => (
      <UserIcon
               color={active ? "white" : "#A3A9B0"}
        className="w-7 h-7"
      />
    ),
  },
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
  className={`flex justify-center items-center ${
    isPathActive(item)
      ? "bg-primary w-[55px] h-[55px] rounded-full -mt-6"
      : ""
  }`}
>
  {item.icon(isPathActive(item))}
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
