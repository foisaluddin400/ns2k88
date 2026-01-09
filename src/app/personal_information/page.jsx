"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigate } from "@/components/Navigate"

const defaultProfile = {
  fullName: "Alex Doe",
  address: "Street, house number",
  city: "Berlin",
  postalCode: "12207",
  country: "Germany",
  email: "ann.smith@gmail.com",
  phoneNumber: "+49 69 1234 5678",
}

export default function ProfileCard() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState(defaultProfile)
  const [editData, setEditData] = useState(defaultProfile)

  const handleEditChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    setProfile(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData(profile)
    setIsEditing(false)
  }

  return (
    <div className="-mt-20 -mb-20">
      {/* Header */}
      <Navigate></Navigate>
      <div className="px-3 border-b">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-teal-500/20">
            <Image
              src="/images/image.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center">
            {!isEditing ? (
              <>
                <h1 className="text-3xl font-bold">{profile.fullName}</h1>
                <p className="text-sm text-gray-500">
                  Profile Information
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-500">
                Edit your information
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-8 space-y-6">
        {/* Full Name */}
        <div>
          <label className="text-xs font-semibold uppercase text-gray-500">
            Full name
          </label>
          {isEditing ? (
            <input
              className="w-full mt-2 p-3 border rounded-lg"
              value={editData.fullName}
              onChange={(e) =>
                handleEditChange("fullName", e.target.value)
              }
            />
          ) : (
            <p className="profile-box">{profile.fullName}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="text-xs font-semibold uppercase text-gray-500">
            Address
          </label>
          {isEditing ? (
            <input
              className="w-full mt-2 p-3 border rounded-lg"
              value={editData.address}
              onChange={(e) =>
                handleEditChange("address", e.target.value)
              }
            />
          ) : (
            <p className="profile-box">{profile.address}</p>
          )}
        </div>

        {/* City & Postal */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-xs font-semibold uppercase text-gray-500">
              City
            </label>
            {isEditing ? (
              <input
                className="w-full mt-2 p-3 border rounded-lg"
                value={editData.city}
                onChange={(e) =>
                  handleEditChange("city", e.target.value)
                }
              />
            ) : (
              <p className="profile-box">{profile.city}</p>
            )}
          </div>

          <div>
            <label className="text-xs font-semibold uppercase text-gray-500">
              Postal code
            </label>
            {isEditing ? (
              <input
                className="w-full mt-2 p-3 border rounded-lg"
                value={editData.postalCode}
                onChange={(e) =>
                  handleEditChange("postalCode", e.target.value)
                }
              />
            ) : (
              <p className="profile-box">{profile.postalCode}</p>
            )}
          </div>
        </div>

        {/* Country */}
        <div>
          <label className="text-xs font-semibold uppercase text-gray-500">
            Country
          </label>
          {isEditing ? (
            <input
              className="w-full mt-2 p-3 border rounded-lg"
              value={editData.country}
              onChange={(e) =>
                handleEditChange("country", e.target.value)
              }
            />
          ) : (
            <p className="profile-box">{profile.country}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-xs font-semibold uppercase text-gray-500">
            Email
          </label>
          {isEditing ? (
            <input
              type="email"
              className="w-full mt-2 p-3 border rounded-lg"
              value={editData.email}
              onChange={(e) =>
                handleEditChange("email", e.target.value)
              }
            />
          ) : (
            <p className="profile-box">{profile.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="text-xs font-semibold uppercase text-gray-500">
            Phone
          </label>
          {isEditing ? (
            <input
              className="w-full mt-2 p-3 border rounded-lg"
              value={editData.phoneNumber}
              onChange={(e) =>
                handleEditChange("phoneNumber", e.target.value)
              }
            />
          ) : (
            <p className="profile-box">{profile.phoneNumber}</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="px-8 py-8 bg-gray-50 border-t flex gap-3">
        {!isEditing ? (
          <button
            onClick={() => {
              setEditData(profile)
              setIsEditing(true)
            }}
            className="w-full h-12 bg-[#0A7676] text-white rounded-lg font-semibold"
          >
            Edit
          </button>
        ) : (
          <>
            <button
              onClick={handleSave}
              className="flex-1 h-12 bg-[#0A7676] text-white rounded-lg font-semibold"
            >
              Save Changes
            </button>
            <button
              onClick={handleCancel}
              className="flex-1 h-12 border rounded-lg font-semibold"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  )
}
