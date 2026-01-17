import Link from "next/link";
import IconSuccess from "./IconSuccess";

const StepDone = () => (
  <div className="text-center space-y-3">
    <div className="flex justify-center">
      <IconSuccess
    ></IconSuccess>
    </div>
    <h2 className="text-2xl font-style1 font-extrabold py-2 text-center text-gray-800">Your trainer profile is live!</h2>
    <p>
    You're all set and ready to connect with new clients. Welcome to the team!
    </p>
 <Link href={'/trainer'}>   <button
      
      className="w-full mt-5 bg-primary text-white py-2 rounded-2xl"
    >
      Go To Dashboard
    </button></Link>
  </div>
);

export default StepDone;
