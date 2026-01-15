"use client";
import { useState } from "react";
import Step1Personal from "./Step1Personal";
import Step2Specialization from "./Step2Specialization";
import Step3Studio from "./Step3Studio";
import Step4Certification from "./Step4Certification";
import Step5Agreement from "./Step5Agreement";
import Step6Verify from "./Step6Verify";
import StepDone from "./StepDone";
import LogoImage from "@/components/shared/LogoImage";

const RegisterStep = () => {
  const [step, setStep] = useState(1);

  const totalSteps = 6;

  return (
    <div className=" ">
      <div className="-mt-16 flex justify-center">
         <LogoImage></LogoImage>
      </div>
      <div className="mt-7">
       
        {step <= totalSteps && (
          <div className="grid grid-cols-6 gap-3 mb-6">
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
