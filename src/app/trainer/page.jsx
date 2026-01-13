import { CalenderIcon } from "@/constant/svg.icon";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex items-center gap-3 bg-secondary p-3 mt-6 rounded-2xl">
        <div>
          <CalenderIcon />
        </div>
        <div>
          <h1 className="text-[14px] font-semibold italic pb-2">
            Book Your next session!
          </h1>
          <p className="text-[12px] text-[#161F37]">
            This will increase the level of customer confidence
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
