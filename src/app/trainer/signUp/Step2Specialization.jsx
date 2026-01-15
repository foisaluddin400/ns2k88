import { useState } from "react";

const categories = {
  Fitness: ["Gym", "Cardio", "Crossfit"],
  Kampfspart: ["Boxing", "Karate", "MMA"],
  Ernahrung: ["Diet", "Nutrition Plan", "Weight Loss"],
};

const Step2Specialization = ({ onNext }) => {
  const [tab, setTab] = useState("Fitness");

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-[20px] font-bold italic">Personal Information</h2>
        <p className="text-[14px] text-[#7E8792]">
          Choose your focus areas. You can <br />
          select more than one.
        </p>
      </div>
      <h1>Specializations</h1>
      <div className="flex bg-[#EFEFEF] p-1">
        {Object.keys(categories).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 w-full py-1 rounded ${
              tab === t ? "bg-white text-gray-500" : "text-gray-500"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {categories[tab].map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-white rounded-full cursor-pointer"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="py-5">
        <label htmlFor="">
          Years of Experience{" "}
          <input
            className="w-full border p-2 rounded-2xl"
            placeholder="Years of Experience"
          />
        </label>
      </div>
      <label htmlFor="">
        Enter Your Instagram URL
        <input
          className="w-full border p-2 rounded-2xl"
          placeholder="Enter Your Instagram URL"
        />
      </label>

      <div className="">
        <label htmlFor="">
          Personal website URL (optional)
          <input
            className="w-full border p-2 rounded-2xl"
            placeholder="Enter your Personal Website URL"
          />
        </label>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-primary text-white py-2 rounded-2xl   "
      >
        Continue
      </button>
    </div>
  );
};

export default Step2Specialization;
