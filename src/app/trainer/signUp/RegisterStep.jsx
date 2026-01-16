"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Step1Personal from "./Step1Personal";
import Step2Specialization from "./Step2Specialization";
import Step3Studio from "./Step3Studio";
import Step4Certification from "./Step4Certification";
import Step5Agreement from "./Step5Agreement";
import Step6Verify from "./Step6Verify";
import StepDone from "./StepDone";
import IconNavigate from "@/components/IconNavigate";
import { FaArrowLeft } from "react-icons/fa6";

const RegisterStep = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const totalSteps = 6;

  return (
    <div className="h-screen -mt-20 -mb-20 overflow-hidden flex flex-col">

      {/* Top Bar */}
      <div className="relative flex items-center justify-center h-[60px] mt-4">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute left-0 text-gray-600 border bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full"
        >
          <FaArrowLeft />
        </button>

        {/* Center Logo */}
        <IconNavigate />
      </div>

      {/* Step Progress Bar */}
      {step <= totalSteps && (
        <div className="grid grid-cols-6 gap-3 mb-6 mt-7">
          {Array.from({ length: totalSteps }).map((_, index) => {
            const stepNumber = index + 1;
            const isActiveOrCompleted = stepNumber <= step;

            return (
              <div
                key={stepNumber}
                className={`h-[10px] rounded-full transition-all ${
                  isActiveOrCompleted ? "bg-[#075c5c94]" : "bg-gray-200"
                }`}
              />
            );
          })}
        </div>
      )}

      {/* Step Content */}
      <div className="flex-1 overflow-y-auto">
        {step === 1 && <Step1Personal onNext={() => setStep(2)} />}
        {step === 2 && <Step2Specialization onNext={() => setStep(3)} />}
        {step === 3 && <Step3Studio onNext={() => setStep(4)} />}
        {step === 4 && <Step4Certification onNext={() => setStep(5)} />}
        {step === 5 && <Step5Agreement onNext={() => setStep(6)} />}
        {step === 6 && <Step6Verify onVerify={() => setStep(7)} />}
        {step === 7 && <StepDone />}
      </div>
    </div>
  );
};

export default RegisterStep;
