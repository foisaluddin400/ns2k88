"use client";

import { useState } from "react";
import CameraImage from "../../signUp/CameraImage";
const categories = {
  Fitness: ["Gym", "Cardio", "Crossfit"],
  Kampfspart: ["Boxing", "Karate", "MMA"],
  Ernahrung: ["Diet", "Nutrition Plan", "Weight Loss"],
};
export default function TrainInfoEdit() {
  const [tab, setTab] = useState("Fitness");
  const [photos, setPhotos] = useState([null, null, null]);
  const [aboutText, setAboutText] = useState(
    "I help my clients improve strength, mobility and balance. My focus is on holistic training and sustainable results."
  );
  const [studioName, setStudioName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [instagram, setInstagram] = useState("");
  const [website, setWebsite] = useState("");
  const [yearsExperience, setYearsExperience] = useState("5");

  const certifications = [
    { id: "1", name: "Fitness B License" },
    { id: "2", name: "Personal Trainer Certificate" },
    { id: "3", name: "Nutrition Basics" },
  ];

  const handlePhotoUpload = (index, file) => {
    const newPhotos = [...photos];
    newPhotos[index] = file;
    setPhotos(newPhotos);
  };

  return (
    <div className="">
      <div className="">
        {/* Photo Upload */}
        <div className="">
          <label className="text-sm text-gray-600 mb-4 block">
            Upload more photos (max. 3)
          </label>

          <div className="flex gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id={`photo-${index}`}
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      handlePhotoUpload(index, e.target.files[0]);
                    }
                  }}
                />

                <label
                  htmlFor={`photo-${index}`}
                  className="aspect-square bg-gray-100 rounded-lg flex items-center h-[130px] justify-center cursor-pointer hover:bg-gray-200"
                >
                  {photo ? (
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm"><CameraImage></CameraImage></span>
                  )}
                </label>
              </div>
            ))}
          </div>
        </div>

        <h1 className="mb-2 mt-5">Specializations</h1>
        <div className="flex bg-[#EFEFEF] rounded-xl p-1">
          {Object.keys(categories).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 w-full py-1 rounded-xl ${
                tab === t ? "bg-white text-gray-500" : "text-gray-400"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 my-3">
          {categories[tab].map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-white rounded-full text-gray-600 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>

        {/* About You */}
        <div className=" mb-3">
          <label className="text-sm mt-7 mb-2 block">About you</label>
          <textarea
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
            maxLength={500}
            className="w-full h-32 p-2 bg-transparent border rounded-lg resize-none focus:ring-2 focus:ring-teal-700"
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {aboutText.length}/500
          </div>
        </div>

        {/* Studio Name */}
        <div className=" mb-3">
          <label className="text-sm  mb-2 block">Studio name</label>
          <input
            value={studioName}
            onChange={(e) => setStudioName(e.target.value)}
            placeholder="e.g. E.g. Peak Fit Gym"
            className="w-full px-3 py-2 border  rounded-lg focus:ring-2 focus:ring-teal-700"
          />
        </div>

        {/* Address */}
        <div className=" mb-3">
          <label className="text-sm mb-2 block">Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Your street and house number"
            className="w-full px-3 py-2 border  rounded-lg focus:ring-2 focus:ring-teal-700"
          />
        </div>

        {/* City */}
        <div className=" mb-3">
          <label className="text-sm  mb-2 block">City</label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. B. Berlin"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-700"
          />
        </div>

        {/* ZIP */}
        <div className=" mb-3">
          <label className="text-sm mb-2 block">ZIP code</label>
          <input
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="e.g. E.g. 12207"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-700"
          />
        </div>

        {/* Country */}
        <div className="mb-3">
          <label className="text-sm mb-2 block">Country</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g. E.g. Germany"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-700"
          />
        </div>

        {/* Instagram */}
        <div className="mb-3">
          <label className="text-sm mb-2 block">Instagram URL (optional)</label>
          <input
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            placeholder="Enter your Instagram URL"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-700"
          />
        </div>

        {/* Website */}
        <div className="mb-3">
          <label className="text-sm mb-2 block">
            Personal Website URL (optional)
          </label>
          <input
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Enter your Personal Website URL"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-700"
          />
        </div>

        {/* Experience */}
        <div className="mb-3">
          <label className="text-sm mb-2 block">Years of experience</label>
          <input
            type="number"
            value={yearsExperience}
            onChange={(e) => setYearsExperience(e.target.value)}
            placeholder="5"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-700"
          />
        </div>

        {/* Certifications (View Only) */}
        <div className="mb-3">
          <label className="text-sm mb-2 block">
            Certifications
          </label>
          <ul className="space-y-2 text-sm text-gray-700">
            {certifications.map((cert) => (
              <li key={cert.id} className="border px-3 py-2 rounded-lg">
                {cert.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Update */}
        <div className="">
          <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-teal-800">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
