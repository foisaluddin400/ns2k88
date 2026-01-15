"use client";

import { Navigate } from "@/components/Navigate";
import React from "react";

export default function PaymentActivation() {
  return (
    <div className="-mt-20">
      <div>
        <Navigate></Navigate>
        <div className="w-full text-center">
          {/* Header */}
          <h1 className="font-bold text-gray-900">Activate your payment</h1>
          <p className="mt-1 text-sm font-medium text-gray-600">(2 minutes)</p>

          {/* Description */}
          <p className="mt-6 text-sm text-gray-600">
            So you can safely and automatically for your
          </p>
          <p className="text-sm text-gray-600">Get paid for sessions.</p>

          {/* Button */}
          <button
            onClick={() => {
              // Handle payment activation
            }}
            className="mt-8 w-full rounded-full bg-primary py-3 text-white font-medium hover:bg-teal-800 transition"
          >
            Activate payment
          </button>

          {/* Footer */}
          <p className="mt-6 text-xs font-medium italic text-gray-500">
            Powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
}
