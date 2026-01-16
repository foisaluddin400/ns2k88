"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import IconNavigate from "@/components/IconNavigate";
import IconEmail from "../IconEmail";

const Forgot = () => {
  const router = useRouter();

  return (
    <div className="h-screen -mt-20 -mb-20 overflow-hidden flex flex-col ">
      {/* ================= Header (Top) ================= */}
      <div className="relative flex items-center justify-center h-[60px] mt-4">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute left-0 text-gray-600 border bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full"
        >
          <FaArrowLeft />
        </button>

        {/* Logo Center */}
        <IconNavigate />
      </div>

      {/* ================= Center Content ================= */}
      <div className="">
        <h2 className="text-2xl font-style1 font-extrabold py-2 text-center text-gray-800">
          Reset password
        </h2>

        <h2 className="text-sm text-center text-gray-500 mb-6">
          Enter your email address to receive a link to reset your password.
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm  text-gray-700">
              Email Address
            </label>

            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <IconEmail />
              </span>
              <input
                type="email"
                className="w-full p-3 pl-10 border bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <Link href="/signIn/verify">
            <button
              type="submit"
              className="w-full mt-5 py-3 bg-primary text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
