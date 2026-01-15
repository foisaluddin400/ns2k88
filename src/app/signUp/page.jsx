import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/img/logo5.png";
import { FaApple, FaGoogle } from "react-icons/fa6";
import GoogleIcon from "./GoogleIcon";
export default function SignUp() {
  return (
    <div>
      <div>
        <div className="flex justify-center mt-11">
          <Image src={logo} alt="logo" width={100} />
        </div>

        <h1 className="text-center mt-4 text-xl font-semibold">
          Create your account
        </h1>
        <p className="text-center mb-2">
          Join us and start your fitness journey
        </p>
        <form className="space-y-6 ">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full p-2 border  bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              placeholder="+88##########48"
              className="mt-1 block w-full p-2 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder=".....@gmail.com"
              className="mt-1 block w-full p-2 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="New Password"
              className="mt-1 block w-full p-2 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Enter your password"
              className="mt-1 block w-full p-2 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Dhaka, Bangladesh"
              className="mt-1 block w-full p-2 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <Link href={"/signIn"}>
            <button
              type="submit"
              className="w-full py-2 mt-5 px-4 bg-primary text-white  rounded-xl  focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Register
            </button>
          </Link>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t" />
          <span className="px-3 text-sm text-gray-500">Or continue with</span>
          <div className="flex-grow border-t" />
        </div>

        {/* Social Login */}
        <div className=" flex justify-center gap-5">
          {/* Google */}
          <button
            type="button"
            className="w-[60px] h-[60px] rounded-full flex items-center justify-center gap-3 bg-gray-200 py-2 hover:bg-gray-50"
          >
            <GoogleIcon></GoogleIcon>
          </button>

          {/* Apple */}
          <button
            type="button"
            className=" w-[60px] h-[60px] rounded-full flex items-center justify-center gap-3 bg-gray-200 py-2 hover:bg-gray-50"
          >
            <FaApple className="text-black text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
