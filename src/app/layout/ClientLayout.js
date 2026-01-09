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
    pathname === "/imprint" ||
    pathname === "/privacy" ||
    pathname === "/terms" ||
 
    pathname === "/favorite_trainer" ||
    pathname === "/book-proccess" ||
    pathname === "/codeConduct" ||
    pathname === "/notification" ||
    pathname === "/push_notification" ||
    pathname === "/auth/continue" ||
    pathname === "/signUp" ||
    pathname === "/booked-done" ||
    pathname === "/bookSession" ||
    pathname === "/booking-confirmed" ||
    pathname === "/coach/coachDetails" ||
    pathname === "/personal_information" ||
    pathname === "/signIn/forgot" ||
    pathname === "/password_security" ||
    pathname === "/signIn/verify" ||
    pathname === "/signIn/newpass" ||
    pathname === "/about" ||
    pathname === "/password" ||
    pathname === "/contact" ||
    pathname === "/signUp/done" ||
    pathname === "/signUp/seller" ||
    pathname === "/signUp/accountverify";

  const hideNavbarNav =
    pathname === "/signIn" ||
    pathname === "/book-proccess" ||
    pathname === "/favorite_trainer" ||
    pathname === "/coach/coachDetails" ||
    pathname === "/auth" ||
    pathname === "/terms" ||
    pathname === "/codeConduct" ||
    pathname === "/password" ||
    pathname === "/book" ||
    
    pathname === "/notification" ||
    pathname === "/imprint" ||
    pathname === "/privacy" ||
    pathname === "/contact" ||
    pathname === "/about" ||
    pathname === "/password_security" ||
    pathname === "/push_notification" ||
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
