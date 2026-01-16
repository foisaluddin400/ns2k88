"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import logo from "../../../../public/img/logo5.png";

import { FaArrowLeft } from "react-icons/fa6";
import IconNavigate from "@/components/IconNavigate";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    if (e.target.value.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (e.target.value.length === 1 && index === 5) {
    }
  };

  return (
    <div className="h-screen -mt-20 -mb-20 overflow-hidden flex flex-col ">
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
      <div>
        <h2 className="text-2xl font-style1 font-extrabold py-2 text-center text-gray-800">
          Verification code
        </h2>

        <h2 className="text-sm text-center text-gray-500 mb-6">
          We have sent the verification code to your email address
ann.smith@gmail.com
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className="bg-[#00000000] text-3xl text-center border  bg-white rounded-xl  h-[90px] focus:outline-none focus:ring-2 focus:ring-primary"
                  onInput={(e) => handleInputChange(e, i)}
                  ref={(el) => (inputRefs.current[i] = el)}
                />
              ))}
          </div>
        
          <Link href={"/signIn/newpass"}>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-semibold mt-5 rounded-xl hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Submit
            </button>
          </Link>
        </form>
         <p className="text-sm  mt-5 text-gray-600 text-center">
        You don't get the code? <br />
        <button className="text-primary hover:underline">
          Resend
        </button>
      </p>
      </div>
    </div>
  );
};

export default Page;
