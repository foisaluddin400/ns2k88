"use client"

import { useState } from "react"
import { Eye, EyeOff, Lock } from "lucide-react"
import { Navigate } from "@/components/Navigate"

export default function Page() {
  const [showOld, setShowOld] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <div className="-mt-20 -mb-20">
      <Navigate></Navigate>
      {/* Old Password */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">
          Old Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type={showOld ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full h-14 pl-12 pr-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={() => setShowOld(!showOld)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showOld ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* New Password */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">
          New password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type={showNew ? "text" : "password"}
            placeholder="Enter your new password"
            className="w-full h-14 pl-12 pr-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={() => setShowNew(!showNew)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Password Rules */}
      <div className="mb-6 space-y-2 text-sm">
        <div className="flex items-center gap-2 text-teal-600 font-medium">
          <span className="w-5 h-5 rounded-full border-2 border-teal-600 flex items-center justify-center">
            ✓
          </span>
          Minimum 8 characters.
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <span className="w-5 h-5 rounded-full border"></span>
          One number
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <span className="w-5 h-5 rounded-full border"></span>
          One uppercase letter
        </div>
      </div>

      {/* Confirm Password */}
      <div className="mb-8">
        <label className="block text-lg font-medium mb-2">
          Confirm New Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm your New Password"
            className="w-full h-14 pl-12 pr-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      {/* Update Button */}
      <button className="w-full h-14 bg-primary hover:bg-[#0A7676] text-white text-lg font-semibold rounded-full transition">
        Update password
      </button>
    </div>
  )
}
