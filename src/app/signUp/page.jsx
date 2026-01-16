"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/img/logo5.png";
import { FaApple, FaArrowLeft } from "react-icons/fa6";
import GoogleIcon from "./GoogleIcon";
import IconEmail from "../signIn/IconEmail";
import IconPassWord from "../signIn/IconPassWord";
import IconNavigate from "@/components/IconNavigate";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  return (
    <div className="h-screen -mt-20 -mb-20 overflow-hidden flex flex-col">
      <div className="relative flex items-center justify-center mt-4">
        <button
          onClick={() => router.back()}
          className="absolute left-0 text-gray-600 border bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full"
        >
          <FaArrowLeft />
        </button>

        {/* Center Logo */}
        <IconNavigate />
      </div>

      <div className="flex-grow flex flex-col justify-center">
        <h2 className="text-2xl font-style1 font-extrabold py-2 text-center text-gray-800">
        Create your account
        </h2>

        <h2 className="text-sm text-center text-gray-500 mb-6">
         Join us and start your fitness journey.
        </h2>

        <form className="space-y-3">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 block w-full p-3 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <IconEmail />
              </span>
              <input
                type="email"
                placeholder="Enter your email address"
                className="block w-full p-3 pl-10 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <IconPassWord />
              </span>
              <input
                type="password"
                placeholder="New Password"
                className="block w-full p-3 pl-10 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <IconPassWord />
              </span>
              <input
                type="password"
                placeholder="Enter your password"
                className="block w-full p-3 pl-10 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <Link href="/signIn">
            <button
              type="submit"
              className="w-full py-2 mt-5 bg-primary text-white rounded-xl"
            >
              Register
            </button>
          </Link>
        </form>
 <h2 className="text-sm text-center mt-3 text-gray-500 mb-6">
     By registering you agree to our Terms of Use and Privacy Policy.
        </h2>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t" />
          <span className="px-3 text-sm italic font-bold">Or continue with</span>
          <div className="flex-grow border-t" />
        </div>

        <div className="flex justify-center gap-5">
          <button className="w-[60px] h-[60px] rounded-full flex items-center justify-center  hover:bg-gray-50">
            <GoogleIcon />
          </button>

          <button className="w-[60px] h-[60px] rounded-full flex items-center justify-center  hover:bg-gray-50">
            <FaApple className="text-black text-3xl" />
          </button>
        </div>
      </div>
      <p className="text-sm mb-6 mt-auto text-gray-600 text-center">
        Already have an account? <br />
        <Link href="/signIn" className="text-primary hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
