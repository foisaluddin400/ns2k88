import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/img/logo5.png";
const forgot = () => {
  return (
    <div>
      <div>
        <div className="px-3">
          <div className="flex justify-center mt-11">
            <Image src={logo} alt="logo" width={100} />
          </div>
          <h2 className="text-2xl  my-11  font-bold text-gray-800 ">
            Forgot Password ?
          </h2>
          <p className="my-6">
            Enter your details below to request an your capture award account
            password reset.
          </p>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semiboldtext-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full p-2 border  bg-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary bg-[#00000000]"
                placeholder="Email"
                required
              />
            </div>

            <Link href={"/signIn/verify"}>
              <button
                type="submit"
                className="w-full py-2 px-4 mt-5 bg-primary text-white font-semibold rounded hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default forgot;
