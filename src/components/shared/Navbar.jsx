"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import HomeIcon from "./HomeIcon";
import ClientIcon from "./ClientIcon";
import CalenderIcon from "./CalenderIcon";
import ChatIcon from "./ChatIcon";
import UserIcon from "./UserIcon";

export const Navbar = () => {
  const pathname = usePathname();
  const [role, setRole] = useState(null);

  // 🔹 get role from localStorage
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  // 🔹 Client Nav
  const clientNavItems = [
    {
      label: "Home",
      path: "/client",
      icon: (active) => (
        <HomeIcon color={active ? "white" : "#A3A9B0"} className="w-7 h-7" />
      ),
    },
    {
      label: "Coach",
      path: "/coach",
      icon: (active) => (
        <ClientIcon color={active ? "white" : "#A3A9B0"} className="w-7 h-7" />
      ),
    },
    {
      label: "Booking",
      path: "/booking",
      icon: (active) => (
        <CalenderIcon color={active ? "white" : "#A3A9B0"} className="w-7 h-7" />
      ),
    },
    {
      label: "Chat",
      path: "/chat",
      icon: (active) => (
        <ChatIcon color={active ? "white" : "#A3A9B0"} className="w-7 h-7" />
      ),
    },
    {
      label: "Profile",
      path: "/profile",
      icon: (active) => (
        <UserIcon color={active ? "white" : "#A3A9B0"} className="w-7 h-7" />
      ),
    },
  ];

  // 🔹 Trainer Nav
  const trainerNavItems = [
    {
      label: "Home",
      path: "/trainer",
      icon: (active) => (
        <HomeIcon color={active ? "white" : "#A3A9B0"} className="w-7 h-7" />
      ),
    },
    {
      label: "Client",
      path: "/trainer/coach",
      icon: (active) => (
        <ClientIcon color={active ? "white" : "#A3A9B0"} className="w-7 h-7" />
      ),
    },
    {
      label: "Calendar",
      path: "/trainer/calendar",
      icon: (active) => (
        <CalenderIcon color={active ? "white" : "#A3A9B0"} className="w-7 h-7" />
      ),
    },
    {
      label: "Chat",
      path: "/chat",
      icon: (active) => (
        <ChatIcon color={active ? "white" : "#A3A9B0"} className="w-7 h-7" />
      ),
    },
    {
      label: "Profile",
      path: "/trainer/profile",
      icon: (active) => (
        <UserIcon color={active ? "white" : "#A3A9B0"} className="w-7 h-7" />
      ),
    },
  ];

  const navItems =
    role === "trainer" ? trainerNavItems : clientNavItems;

  const isPathActive = (item) => pathname === item.path;

  // ⏳ prevent hydration issue
  if (!role) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white z-50">
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
                  ? "bg-gradient-to-t from-[#0A7676] to-[#17A4A4] w-[55px] h-[55px] rounded-full -mt-6"
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
