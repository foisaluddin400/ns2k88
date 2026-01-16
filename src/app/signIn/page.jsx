"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaApple } from "react-icons/fa6";
import GoogleIcon from "../signUp/GoogleIcon";
import IconNavigate from "@/components/IconNavigate";
import IconEmail from "./IconEmail";
import IconPassWord from "./IconPassWord";



export default function SignIn() {
  const router = useRouter();

  const handleRedirect = () => {
    if (typeof window === "undefined") return;

    const storedRole = localStorage.getItem("role");

    if (storedRole === "trainer") {
      router.push("/trainer");
    } else if (storedRole === "client") {
      router.push("/client");
    } else {
      router.push("/auth/continue");
    }
  };

  return (
    <div className="h-screen -mt-20 -mb-20 overflow-hidden flex flex-col ">

      {/* 🔝 Top Bar */}
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

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center">
        <h2 className="text-2xl font-style1 font-extrabold py-2 text-center text-gray-800">
          Welcome back!
        </h2>

        <h2 className="text-sm text-center text-gray-500 mb-6">
          Let's get started!
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>

            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <IconEmail />
              </span>
              <input
                type="email"
                className="w-full p-3 pl-10 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Password
            </label>

            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <IconPassWord />
              </span>
              <input
                type="password"
                className="w-full p-3 pl-10 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="text-end">
            <Link
              href="/signIn/forgot"
              className="text-sm text-primary hover:underline"
            >
              Forgot Your Password?
            </Link>
          </div>

          <button
            type="button"
            onClick={handleRedirect}
            className="w-full py-3 bg-primary text-white rounded-xl"
          >
            SIGN IN
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t" />
          <span className="px-3 text-sm font-bold italic">
            Or continue with
          </span>
          <div className="flex-grow border-t" />
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-5">
          <button className="w-[60px] h-[60px] rounded-full flex items-center justify-center hover:bg-gray-50">
            <GoogleIcon />
          </button>

          <button className="w-[60px] h-[60px] rounded-full flex items-center justify-center hover:bg-gray-50">
            <FaApple className="text-black text-3xl" />
          </button>
        </div>
      </div>

      {/* 🔻 Bottom Register */}
      <p className="text-sm mb-6 text-gray-600 text-center">
        New here? <br />
        <Link href="/" className="text-primary hover:underline ">
          Register Now
        </Link>
      </p>
    </div>
  );
}
