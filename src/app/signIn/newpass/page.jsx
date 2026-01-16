'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa6";
import IconNavigate from "@/components/IconNavigate";
import IconPassWord from "../IconPassWord";

const New = () => {
  const router = useRouter();

  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <div className="h-screen -mt-20 -mb-20 overflow-hidden flex flex-col">

      {/* Top Bar */}
      <div className="relative flex items-center justify-center h-[60px] mt-4">
        <button
          onClick={() => router.back()}
          className="absolute left-0 text-gray-600 border bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full"
        >
          <FaArrowLeft />
        </button>

        <IconNavigate />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-style1 font-extrabold py-2 text-center text-gray-800">
        Create New Password
      </h2>

      <p className="text-sm text-center text-gray-500 mb-8">
        Your new password must be different from <br />
        previously used passwords.
      </p>

      {/* Form */}
      <form className="space-y-6">

        {/* New Password */}
        <div>
          <label className="block text-sm text-gray-700">
            New Password
          </label>

          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <IconPassWord />
            </span>

            <input
              type={showNewPass ? "text" : "password"}
              placeholder="Enter new password"
              className="w-full p-3 pl-10 pr-10 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            <button
              type="button"
              onClick={() => setShowNewPass(!showNewPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showNewPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm text-gray-700">
            Confirm New Password
          </label>

          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <IconPassWord />
            </span>

            <input
              type={showConfirmPass ? "text" : "password"}
              placeholder="Confirm new password"
              className="w-full p-3 pl-10 pr-10 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            <button
              type="button"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default New;
