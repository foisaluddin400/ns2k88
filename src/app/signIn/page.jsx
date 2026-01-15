'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/img/logo5.png";
import { FaGoogle, FaApple } from "react-icons/fa";
import GoogleIcon from "../signUp/GoogleIcon";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const router = useRouter();

 const handleRedirect = () => {
  if (typeof window === "undefined") return;

  const storedRole = localStorage.getItem("role"); // "client" | "trainer" | null

  if (storedRole === "trainer") {
    router.push("/trainer");
  } else if (storedRole === "client") {
    router.push("/client");
  } else {
    
    router.push("/auth/continue");
  }
};

  return (
    <div>
      <div className="">
        {/* Logo */}
        <div className="flex justify-center mt-11">
          <Image src={logo} alt="logo" width={100} />
        </div>

        <h2 className="text-2xl text-center my-11 font-bold text-gray-800">
          Great to have you back!
        </h2>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              User Name or Email
            </label>
            <input
              type="email"
              className="mt-1 w-full p-2 border bg-whiterounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white rounded-xl"
              placeholder="Email"
            />
          </div>

          <div>
            <div className="flex justify-between">
              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>
            </div>
            <input
              type="password"
              className="mt-1 w-full p-2 border bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Password"
            />
          </div>
          <div className="text-end">
            <Link
              href="/signIn/forgot"
              className="text-sm  text-primary hover:underline"
            >
              Forgot Your Password?
            </Link>
          </div>

        <button
      type="button"
      onClick={handleRedirect}
      className="w-full py-2 bg-primary text-white mt-4 rounded-xl"
    >
      SIGN IN
    </button>
        </form>

        {/* Divider */}
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

        <p className="text-sm mt-11 text-gray-600 text-center">
          New here? <br />
          <Link href="/" className="text-primary hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}
