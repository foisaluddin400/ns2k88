const Step3Studio = ({ onNext }) => (
  <div className="space-y-4">
<div className="text-center">
        <h2 className="text-[20px] font-bold italic">Set up your training location</h2>
        <p className="text-[14px] text-[#7E8792]">
        Please provide the address of the studio where you conduct training sessions. Remember that training sessions cannot be held at home.
        </p>
      </div>

    {/* Studio Name */}
    <div>
      <label className="block text-sm mb-1">Studio Name</label>
      <input
        className="w-full border p-2 rounded-xl"
        placeholder="Studio Name"
      />
    </div>

    {/* Address */}
    <div>
      <label className="block text-sm mb-1">Address</label>
      <input
        className="w-full border p-2 rounded-xl"
        placeholder="Address"
      />
    </div>

    {/* City */}
    <div>
      <label className="block text-sm mb-1">City</label>
      <input
        className="w-full border p-2 rounded-xl"
        placeholder="City"
      />
    </div>

    {/* Zip Code */}
    <div>
      <label className="block text-sm mb-1">ZIP Code</label>
      <input
        className="w-full border p-2 rounded-xl"
        placeholder="ZIP Code"
      />
    </div>

    {/* Country */}
    <div>
      <label className="block text-sm mb-1">Country</label>
      <input
        className="w-full border p-2 rounded-xl"
        placeholder="Country"
      />
    </div>

    <button
      onClick={onNext}
      className="w-full bg-primary text-white py-2 rounded-2xl"
    >
      Continue
    </button>
  </div>
);

export default Step3Studio;
