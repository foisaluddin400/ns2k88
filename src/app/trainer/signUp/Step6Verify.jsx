import { useSelector } from "react-redux";

const Step6Verify = ({ onVerify }) => {
  const registerData = useSelector((state) => state.trainerRegister);

  const handleVerify = async () => {
    console.log(registerData);
    onVerify();
  };

  return (
    <div className="">
      <div>
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
         
 <button className="w-full mt-4 bg-primary text-white py-2 rounded-full font-medium" onClick={handleVerify}>submit</button>
          {/* Footer */}
          <p className="mt-6 text-xs font-medium italic text-gray-500">
            Powered by Stripe
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Step6Verify;
