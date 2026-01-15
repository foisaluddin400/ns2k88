"use client";

import { Navigate } from "@/components/Navigate";
import { useState } from "react";

const PriceSetup = () => {
      const [prices, setPrices] = useState({
    individual: "",
    pack5: "",
    pack10: "",
  });

  const [toggles, setToggles] = useState({
    individual: true,
    pack5: true,
    pack10: true,
    freeTrial: false,
  });

  const [cancelPolicy, setCancelPolicy] = useState("always-free");

  const handlePriceChange = (key, value) => {
    setPrices((prev) => ({ ...prev, [key]: value }));
  };

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
       <div className=" -mt-20">
        <Navigate></Navigate>
      <div className="">
        {/* Header */}
        <div className="mb-8 text-center mt-7">
          <h1 className="text-xl font-bold text-gray-900">Setup your prices</h1>
          <p className="mt-2 text-gray-500">
            Set your session fees. You can change them later at any time.
          </p>
        </div>

        {/* Price Section */}
        <div className="space-y-8">
          {/* Individual Session */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-900">
                Price per individual session
              </label>
              <button
                onClick={() => handleToggle("individual")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  toggles.individual ? "bg-amber-400" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    toggles.individual ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
            <input
              type="text"
              value={prices.individual || "$0.00"}
              onChange={(e) => handlePriceChange("individual", e.target.value)}
              placeholder="$0.00"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Pack of 5 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm  text-gray-900">
                Price for pack of 5
              </label>
              <button
                onClick={() => handleToggle("pack5")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  toggles.pack5 ? "bg-amber-400" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    toggles.pack5 ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
            <input
              type="text"
              value={prices.pack5 || "$0.00"}
              onChange={(e) => handlePriceChange("pack5", e.target.value)}
              placeholder="$0.00"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Pack of 10 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm  text-gray-900">
                Price for pack of 10
              </label>
              <button
                onClick={() => handleToggle("pack10")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  toggles.pack10 ? "bg-amber-400" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    toggles.pack10 ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
            <input
              type="text"
              value={prices.pack10 || "$0.00"}
              onChange={(e) => handlePriceChange("pack10", e.target.value)}
              placeholder="$0.00"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Offer Free Trial */}
          <div className="flex items-center justify-between pt-4">
            <label className="text-sm text-gray-900">Offer free trial</label>
            <button
              onClick={() => handleToggle("freeTrial")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                toggles.freeTrial ? "bg-teal-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  toggles.freeTrial ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Cancel & Reschedule Policy */}
          <div className="space-y-4 pt-4">
            <label className="text-sm text-gray-900">Cancel & reschedule policy:</label>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="policy"
                  value="always-free"
                  checked={cancelPolicy === "always-free"}
                  onChange={(e) => setCancelPolicy(e.target.value)}
                  className="h-5 w-5 cursor-pointer border-2 border-gray-300 rounded-full accent-teal-700"
                />
                <span className="text-sm text-gray-700">always free</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="policy"
                  value="up-12h"
                  checked={cancelPolicy === "up-12h"}
                  onChange={(e) => setCancelPolicy(e.target.value)}
                  className="h-5 w-5 cursor-pointer border-2 border-gray-300 rounded-full accent-teal-700"
                />
                <span className="text-sm text-gray-700">up to 12h</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="policy"
                  value="up-24h"
                  checked={cancelPolicy === "up-24h"}
                  onChange={(e) => setCancelPolicy(e.target.value)}
                  className="h-5 w-5 cursor-pointer border-2 border-gray-300 rounded-full accent-primary"
                />
                <span className="text-sm text-gray-700">up to 24 hours</span>
              </label>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-12">
          <button className="w-full rounded-full bg-teal-700 px-6 py-3 text-center text-lg font-semibold text-white transition-colors hover:bg-teal-800">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default PriceSetup