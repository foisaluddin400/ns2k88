"use client";

import { usePathname } from "next/navigation";

import Footer from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import TopBar from "@/components/shared/TopBar";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAuthRoute = pathname.startsWith("/auth");
const isChatWithId =
  pathname.startsWith("/chat/") && pathname !== "/chat";

  const noPadding = isHome || isAuthRoute;

  const hideNavbarFooter =
    pathname === "/" ||
    pathname === "/signIn" ||
    pathname === "/auth" ||
    pathname === "/book" ||
    pathname === "/imprint" ||
    pathname === "/privacy" ||
    pathname === "/terms" ||
    isChatWithId ||
    pathname === "/favorite_trainer" ||
    pathname === "/book-proccess" ||
    pathname === "/trainer/signUp" ||
    pathname === "/trainer/priceSetup" ||
    pathname === "/trainer/availability" ||
    pathname === "/trainer/activePayment" ||
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
    pathname === "/" ||
    pathname === "/signIn" ||
    pathname === "/book-proccess" ||
    pathname === "/favorite_trainer" ||
    pathname === "/coach/coachDetails" ||
    pathname === "/auth" ||
    pathname === "/trainer/priceSetup" ||
    pathname === "/trainer/availability" ||
    pathname === "/trainer/activePayment" ||
    pathname === "/terms" ||
    pathname === "/trainer/signUp" ||
     isChatWithId ||
    pathname === "/chat" ||
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
      <div className="flex flex-col bg-[#F7F7F7] min-h-screen max-w-3xl m-auto">
        <div className="fixed z-10 px-3 bg-[#F7F7F7] top-0 container">
          {!hideNavbarNav && (
            <div className="py-4 pt-4 ">
              <TopBar></TopBar>
            </div>
          )}
        </div>
        <div
          className={`text-black flex-grow mt-20 mb-20 ${
            noPadding ? "" : "px-3"
          }`}
        >
          {children}
        </div>

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
