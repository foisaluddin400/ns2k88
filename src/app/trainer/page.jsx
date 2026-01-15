import TrainUserIcon from "@/components/trainerIcon/TrainUserIcon";
import { CalenderIcon } from "@/constant/svg.icon";
import React from "react";
import CalendarSection from "./TrainerHomeCalender";
import NewActivity from "./NewActivity";
import CompleteYourAccount from "./CompleteYourAccount";

const page = () => {
  return (
    <div>
      <div className="flex items-center gap-3 bg-secondary p-3 mt-6 rounded-2xl">
        <div>
          <TrainUserIcon></TrainUserIcon>
        </div>
        <div>
          <h1 className="text-[14px] font-semibold italic pb-2">
            Share with your friends!
          </h1>
          <p className="text-[12px] text-[#161F37]">
         Lorem ipsum dolor sit amet consectetur. Ut arcu dignissim vitae.
          </p>
        </div>
      </div>
      <CalendarSection></CalendarSection>
      <NewActivity></NewActivity>
      <CompleteYourAccount></CompleteYourAccount>
    </div>
  );
};

export default page;
