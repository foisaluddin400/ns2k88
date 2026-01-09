"use client";

import { usePathname } from "next/navigation";

import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import TopBar from "@/components/shared/TopBar";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const hideNavbarFooter =
    pathname === "/signIn" ||
    pathname === "/auth" ||
    pathname === "/book" ||
      pathname === "/book-proccess" ||
    pathname === "/auth/continue" ||
    pathname === "/signUp" ||
    pathname === "/booked-done" ||
    pathname === "/bookSession" ||
    pathname === "/booking-confirmed" ||
    pathname === "/coach/coachDetails" ||
    pathname === "/personal_information" ||
    pathname === "/signIn/forgot" ||
    pathname === "/signIn/verify" ||
    pathname === "/signIn/newpass" ||
    pathname === "/signUp/done" ||
    pathname === "/signUp/seller" ||
    pathname === "/signUp/accountverify";

  const hideNavbarNav =
    pathname === "/signIn" ||
    pathname === "/book-proccess" ||
     pathname === "/coach/coachDetails" ||
    pathname === "/auth" ||
    pathname === "/book" ||
    pathname === "/booked-done" ||
    pathname === "/bookSession" ||
    pathname === "/booking-confirmed" ||
    pathname === "/auth/continue" ||
    pathname === "/signUp" ||
    pathname === "/personal_information" ||
    pathname === "/signIn/forgot" ||
    pathname === "/signIn/verify" ||
    pathname === "/signIn/newpass" ||
    pathname === "/signUp/done" ||
    pathname === "/signUp/seller" ||
    pathname === "/signUp/accountverify";

  return (
    <>
      <div className="flex flex-col bg-slate-50 min-h-screen max-w-3xl m-auto">
        <div className="fixed z-10 px-3 bg-white top-0 w-[48rem]">
          {!hideNavbarNav && (
            <div className="py-4 ">
              <TopBar></TopBar>
            </div>
          )}
        </div>
        <div className=" text-black flex-grow mt-20 mb-20">{children}</div>
        <div className=" ">
          {!hideNavbarFooter && (
            <div>
              <Navbar />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
