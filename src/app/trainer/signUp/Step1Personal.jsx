"use client";

import { Upload } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { savePersonalInfo } from "@/redux/features/trainerRegisterSlice";
import CameraImage from "./CameraImage";

const Step1Personal = ({ onNext }) => {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState(""); // optional
  const [photo, setPhoto] = useState(null);

  const handleNext = () => {
    dispatch(
      savePersonalInfo({
        fullName,
        address,
        city,
        zipCode,
        country,
        phone,
        photo,
      })
    );
    onNext();
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-[20px] font-bold italic">Personal Information</h2>
        <p className="text-[14px] text-[#7E8792]">
          Enter your personal information
        </p>
      </div>

      {/* Profile Image */}
      <div>
        <div className="flex justify-center">
          <Upload
            maxCount={1}
            beforeUpload={(file) => {
              setPhoto(file);
              return false;
            }}
          >
            <div className="bg-[#EFF0F1] p-2 rounded-xl cursor-pointer">
              <CameraImage />
            </div>
          </Upload>
        </div>
        <p className="text-[#7E8792] text-[14px] text-center pt-2">
          Upload profile photo
        </p>
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-sm mb-1">Full Name</label>
        <input
          className="w-full border p-2 rounded-xl"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm mb-1">Address</label>
        <input
          className="w-full border p-2 rounded-xl"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      {/* City */}
      <div>
        <label className="block text-sm mb-1">City</label>
        <input
          className="w-full border p-2 rounded-xl"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      {/* ZIP Code */}
      <div>
        <label className="block text-sm mb-1">ZIP Code</label>
        <input
          className="w-full border p-2 rounded-xl"
          placeholder="ZIP Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </div>

      {/* Country */}
      <div>
        <label className="block text-sm mb-1">Country</label>
        <input
          className="w-full border p-2 rounded-xl"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      {/* Telephone Number (Optional) */}
      <div>
        <label className="block text-sm mb-1">
          Telephone Number <span className="text-gray-400">(optional)</span>
        </label>
        <input
          className="w-full border p-2 rounded-xl"
          placeholder="Telephone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button
        onClick={handleNext}
        disabled={!fullName || !address || !city || !zipCode || !country}
        className="w-full bg-primary text-white py-2 rounded-2xl disabled:opacity-50"
      >
        Continue
      </button>
    </div>
  );
};

export default Step1Personal;
