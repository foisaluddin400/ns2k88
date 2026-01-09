import { Navigate } from "@/components/Navigate";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";

const BookedDone = () => {
  return (
    <div className="px-3 -mt-20 -mb-20">
        <Navigate></Navigate>
      <div className="text-center mb-5">
        <div>
          <div className="flex justify-center">
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64.6799 32.2197L60.5999 27.4797C59.8199 26.5797 59.1899 24.8997 59.1899 23.6997V18.5997C59.1899 15.4197 56.5799 12.8097 53.3999 12.8097H48.2999C47.1299 12.8097 45.4199 12.1797 44.5199 11.3997L39.7799 7.31969C37.7099 5.54969 34.3199 5.54969 32.2199 7.31969L27.5099 11.4297C26.6099 12.1797 24.8999 12.8097 23.7299 12.8097H18.5399C15.3599 12.8097 12.7499 15.4197 12.7499 18.5997V23.7297C12.7499 24.8997 12.1199 26.5797 11.3699 27.4797L7.31989 32.2497C5.57989 34.3197 5.57989 37.6797 7.31989 39.7497L11.3699 44.5197C12.1199 45.4197 12.7499 47.0997 12.7499 48.2697V53.3997C12.7499 56.5797 15.3599 59.1897 18.5399 59.1897H23.7299C24.8999 59.1897 26.6099 59.8197 27.5099 60.5997L32.2499 64.6797C34.3199 66.4497 37.7099 66.4497 39.8099 64.6797L44.5499 60.5997C45.4499 59.8197 47.1299 59.1897 48.3299 59.1897H53.4299C56.6099 59.1897 59.2199 56.5797 59.2199 53.3997V48.2997C59.2199 47.1297 59.8499 45.4197 60.6299 44.5197L64.7099 39.7797C66.4499 37.7097 66.4499 34.2897 64.6799 32.2197ZM48.4799 30.3297L33.9899 44.8197C33.5699 45.2397 32.9999 45.4797 32.3999 45.4797C31.7999 45.4797 31.2299 45.2397 30.8099 44.8197L23.5499 37.5597C22.6799 36.6897 22.6799 35.2497 23.5499 34.3797C24.4199 33.5097 25.8599 33.5097 26.7299 34.3797L32.3999 40.0497L45.2999 27.1497C46.1699 26.2797 47.6099 26.2797 48.4799 27.1497C49.3499 28.0197 49.3499 29.4597 48.4799 30.3297Z"
                fill="#0A7676"
              />
            </svg>
          </div>
          <h1 className="text-lg font-bold italic">Booking Confirmed</h1>
          <p className="text-gray-400">
            {" "}
            Your session with Ann Smith is scheduled
          </p>
        </div>
      </div>
       <div className="flex bg-white  rounded-3xl shadow-sm border border-gray-100  hover:shadow-md transition-shadow items-center gap-3 mb-6 p-4">
     <Image
                     width={300}
                     height={200}
               src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          alt="Coach"
          className="w-20 h-20 rounded-2xl object-cover"
        />
        <div>
          <h3 className="font-semibold text-sm flex items-center gap-1">
            Ann Smith <span className="text-green-500"></span>
          </h3>
          <div className="flex gap-2 mt-1">
            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
              Yoga
            </span>
            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
              Stretching
            </span>
            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
              +1 more
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-3 bg-white border rounded-2xl p-2 shadow-sm">
        {/* Location */}
        <div className="  border-b p-2 pb-4  flex items-start justify-between">
          <div className="flex gap-3">
            <div className="bg-gray-100 w-[40px] h-[40px] flex justify-center items-center rounded-md">
              <MapPin className="w-5  h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">
                Location
              </p>
              <p className="text-gray-900 font-medium">
                Los Angeles, CA - Griffith Park Fields
              </p>
            </div>
          </div>
        </div>

        <div className="border-b p-2 pb-4  flex items-start justify-between">
          <div className="flex gap-3">
            <div className="bg-gray-100 w-[40px] h-[40px] flex justify-center items-center rounded-md">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.43 1.5H6.57003C3.75003 1.5 3.53253 4.035 5.05503 5.415L12.945 12.585C14.4675 13.965 14.25 16.5 11.43 16.5H6.57003C3.75003 16.5 3.53253 13.965 5.05503 12.585L12.945 5.415C14.4675 4.035 14.25 1.5 11.43 1.5Z"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">
                TRAINING TIME
              </p>
              <p className="text-gray-900 font-medium">60 Minutes</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="border-b p-2 pb-4  flex items-start justify-between">
          <div className="flex gap-3">
            <div className="bg-gray-100 w-[40px] h-[40px] flex justify-center items-center rounded-md">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1825 11.0185C14.1825 11.986 14.9775 12.7735 15.945 12.7735C15.945 15.586 15.24 16.291 12.4275 16.291H5.3925C2.58 16.291 1.875 15.586 1.875 12.7735V12.4285C2.8425 12.4285 3.6375 11.6335 3.6375 10.666C3.6375 9.69852 2.8425 8.90352 1.875 8.90352V8.55852C1.8825 5.74602 2.58 5.04102 5.3925 5.04102H12.42C15.2325 5.04102 15.9375 5.74602 15.9375 8.55852V9.26352C14.97 9.26352 14.1825 10.0435 14.1825 11.0185Z"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.1583 5.04187H5.34082L7.53832 2.84438C9.33082 1.05187 10.2308 1.05187 12.0233 2.84438L12.4733 3.29437C12.0008 3.76687 11.8883 4.46437 12.1583 5.04187Z"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.40918 5.04297L7.40918 16.293"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-dasharray="5 5"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">
                PRICING OPTIONS
              </p>
              <p className="text-gray-900 font-medium">5x session</p>
            </div>
          </div>
        </div>

        {/* Certificate */}
        <div className=" p-2 pb-4  flex items-start justify-between">
          <div className="flex gap-3">
            <div className="bg-gray-100 w-[40px] h-[40px] flex justify-center items-center rounded-md">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1.5V3.75"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 1.5V3.75"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.625 6.81836H15.375"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 17.25C15.1569 17.25 16.5 15.9069 16.5 14.25C16.5 12.5931 15.1569 11.25 13.5 11.25C11.8431 11.25 10.5 12.5931 10.5 14.25C10.5 15.9069 11.8431 17.25 13.5 17.25Z"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3024 15.0825L12.7124 13.5"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.2875 13.5156L12.6975 15.1056"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.75 6.375V12.27C15.2025 11.6475 14.4 11.25 13.5 11.25C11.8425 11.25 10.5 12.5925 10.5 14.25C10.5 14.8125 10.6575 15.345 10.935 15.795C11.0925 16.065 11.295 16.305 11.5275 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
                  stroke="#7E8792"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">
                Certificate
              </p>
              <p className="text-gray-900 font-medium">3</p>
            </div>
          </div>
        </div>
      </div>

      <Link href={'/booking'}><button className="w-full mt-6 bg-[#0A7676] hover:bg-teal-800 text-white py-3 rounded-xl font-semibold transition">
        See my bookings
      </button></Link>
    </div>
  );
};

export default BookedDone;
