"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import logo from "../../../../public/img/logo5.png";

const Page = () => {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    if (e.target.value.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (e.target.value.length === 1 && index === 5) {
    }
  };

  return (
    <div>
      <div>
        <div className="px-3">
          <div className="flex justify-center mt-11">
            <Image src={logo} alt="logo" width={100} />
          </div>
          <h2 className="text-xl  my-11  font-bold text-gray-800 ">
            Verify Otp
          </h2>
          <p className="my-6">
            We&apos;ll send a verification code to your email. Check your inbox
            and enter the code here.
          </p>

          <div className="flex max-w-xl m-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-6 gap-4">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength="1"
                      className="bg-[#00000000] text-3xl text-center border rounded border-black md:h-[70px] h-[50px] focus:outline-none focus:ring-2 focus:ring-primary"
                      onInput={(e) => handleInputChange(e, i)}
                      ref={(el) => (inputRefs.current[i] = el)} 
                    />
                  ))}
              </div>
              <div className="flex justify-between">
                <p className="text-neutral-400">Didn&apos;t receive code?</p>
                <p className="font-semibold">Resend</p>
              </div>

              <Link href={"/signIn/newpass"}>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-primary text-white font-semibold rounded hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Submit
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
