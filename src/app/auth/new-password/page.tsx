"use client"

import { Card } from "@/components/ui/Card";
import { useState } from "react";
import ResetStepContent from "./_components/ResetStepContent";
import SuccessStepContent from "./_components/SuccessStepContent";

export type NewPasswordStep = "RESET" | "SUCCESS";

export default function NewPassword() {
  const [step, setStep] = useState<NewPasswordStep>("RESET");

  return <Card className="w-full max-w-md py-10 px-6">
    {step === "RESET" && <ResetStepContent setStep={setStep}/>}
    {step === "SUCCESS" && <SuccessStepContent/>}
  </Card>;
}
