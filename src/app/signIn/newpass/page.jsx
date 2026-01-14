import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/img/logo5.png";
const New = () => {
  return (
    <div>
      <div>
        <div className="px-3">
          <div className="flex justify-center mt-11">
            <Image src={logo} alt="logo" width={100} />
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Enter New Password
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full p-2 border  bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary "
                placeholder="Enter New Password"
                required
              />
              <label
                htmlFor="email"
                className="block mt-5  text-sm font-semibold text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full p-2 border  bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary "
                placeholder="Confirm Password"
                required
              />
            </div>

            <Link href={"/signIn"}>
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

export default New;
