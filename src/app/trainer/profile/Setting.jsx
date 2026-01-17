"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import IconActivity from "../IconActivity";
import IconPackage from "../IconPackage";
import IconAvailable from "../IconAvailable";

const Setting = () => {
  const router = useRouter();

  // Dummy user data
  const user = {
    name: "Alex Doe",
    email: "alex.doe@email.com",
    image:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y", // replace with your image path or URL
  };
 const handleLogout = () => {
    // 🔥 remove role
    localStorage.removeItem("role");

    // 🔁 redirect to signIn
    router.push("/signIn");
  };




  const completeAccount = [
    { title: "Active your Payment", route: "/trainer/activePayment",icon: <IconActivity></IconActivity> },
    { title: "Set Prices", route: "/trainer/priceSetup",icon: <IconPackage></IconPackage> },
    { title: "Set Availability", route: "/trainer/availability", icon: <IconAvailable></IconAvailable> },
  ];


  // Sections data
  const accountSection = [
    { title: "Personal Information", route: "/personal_information" },
    { title: "Trainer Information", route: "/trainer/profile/trainerInfo" },
     { title: "Package and price", route: "/favorite_trainer" },
      { title: "My availability", route: "/favorite_trainer" },
    { title: "Connected Account", route: "/coach" },
    { title: "Earnings", route: "/coach" },
   
  ];

  const settingsSection = [
    { title: "Push notifications", route: "/push_notification" },
    { title: "Password & security", route: "/password_security" },
  ];

  const supportSection = [
    { title: "About us", route: "/about" },
     { title: "Imprint", route: "/imprint" },
    { title: "Contact", route: "/contact" },
    { title: "Service Agreement", route: "/service-agreement" },
    { title: "Terms of use", route: "/terms" },
    { title: "Privacy policy", route: "/privacy" },
   
    { title: "Code of conduct", route: "/codeConduct" },
  ];




  const socialLinks = [
    { icon: <FaInstagram />, title: "Instagram", url: "https://instagram.com" },
    { icon: <SiTiktok />, title: "TikTok", url: "https://tiktok.com" },
    { icon: <FaLinkedin />, title: "LinkedIn", url: "https://linkedin.com" },
  ];

  return (
    <div className=" text-gray-600">
      {/* Profile Header */}
      <div className="text-center space-y-2">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
          <Image
            src={user.image}
            width={96}
            height={96}
            alt={user.name}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-500 text-sm">{user.email}</p>
      </div>

       
      <div>
        <h3 className=" font-semibold mt-6 mb-2 text-[#0A7676]">ACCOUNT SECTION</h3>
        <div className="space-y-2">
          {completeAccount.map((item, idx) => (
            <div
              key={idx}
              onClick={() => router.push(item.route)}
              className="flex justify-between items-center p-2 bg-white rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <div className="flex items-center gap-2 text-[#0A7676]">
                <span>{item.icon}</span><span>{item.title}</span>
              </div>
              <span>
                <MdKeyboardArrowRight />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Account Section */}
      <div>
        <h3 className=" font-semibold mt-6 mb-2">ACCOUNT SECTION</h3>
        <div className="space-y-2">
          {accountSection.map((item, idx) => (
            <div
              key={idx}
              onClick={() => router.push(item.route)}
              className="flex justify-between items-center p-2 bg-white rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <span>{item.title}</span>
              <span>
                <MdKeyboardArrowRight />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Section */}
      <div>
        <h3 className=" mt-6 font-semibold mb-2">SETTINGS SECTION</h3>
        <div className="space-y-2">
          {settingsSection.map((item, idx) => (
            <div
              key={idx}
              onClick={() => router.push(item.route)}
              className="flex justify-between items-center p-2 bg-white rounded-lg cursor-pointer hover:bg-gray-200"
            >
              <span>{item.title}</span>
              <span>
                <MdKeyboardArrowRight />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Support & Legal Section */}
      <div>
        <h3 className=" mt-6 font-semibold mb-2">SUPPORT & LEGAL SECTION</h3>
        <div className="space-y-2">
          {supportSection.map((item, idx) => (
            <div
              key={idx}
              onClick={() => router.push(item.route)}
              className="flex justify-between items-center p-2 bg-white rounded-lg cursor-pointer hover:bg-gray-200"
            >
              <span>{item.title}</span>
              <span>
                <MdKeyboardArrowRight />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Log out Button */}
      <button
      onClick={handleLogout}
      className="w-full my-5 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800"
    >
      Log out
    </button>

      {/* Social Links */}
      <div className="space-y-2">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-3 p-2 bg-white rounded-lg hover:bg-gray-200"
          >
            <span className="text-xl">{link.icon}</span>
            <span>{link.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Setting;
