import React from "react";
import TrainCalanderIcon from "./calendar/TrainCalanderIcon";
import TrainArray from "./calendar/TrainArray";
import IconPackage from "./IconPackage";
import IconAvailable from "./IconAvailable";
import IconActivity from "./IconActivity";
import IconVerify from "./IconVerify";
import Link from "next/link";

const CompleteYourAccount = () => {
  return (
    <div className="pt-4 ">
        <h1 className="font-bold italic text-[#7E8792] pb-2">Complete your account:</h1>
      <Link href={'/trainer/priceSetup'}><h1 className="flex items-center justify-between rounded-xl gap-2 mb-2 bg-white p-3 cursor-pointer">
        <span className="flex items-center gap-3 font-bold italic text-sm">
          <IconPackage /> Setup your package prices
        </span>{" "}
        <TrainArray />
      </h1></Link>
      <Link href={'/trainer/availability'}> <h1 className="flex items-center justify-between rounded-xl gap-2 mb-2 bg-white p-3 cursor-pointer">
        <span className="flex items-center gap-3 font-bold italic text-sm">
          <IconAvailable /> Setup your availability
        </span>{" "}
        <TrainArray />
      </h1></Link>
      
    <Link href={'/trainer/activePayment'}>
       <h1 className="flex items-center justify-between rounded-xl gap-2 mb-2 bg-white p-3 cursor-pointer">
        <span className="flex items-center gap-3 font-bold italic text-sm">
          <IconActivity /> Activate your payment
        </span>{" "}
        <TrainArray />
      </h1></Link>
    </div>
  );
};

export default CompleteYourAccount;
