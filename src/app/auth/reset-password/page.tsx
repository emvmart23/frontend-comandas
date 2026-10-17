"use client"

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import RequestStepContent from "./_components/RequestStepContent";
import SentStepContent from "./_components/SentStepContent";

export type ResetPasswordStep = "REQUEST" | "SENT";

export default function ResetPassword() {
  const [step, setStep] = useState<ResetPasswordStep>("REQUEST");
  return (
    <Card className="w-full max-w-md py-10 px-6">
        {step === "REQUEST" && <RequestStepContent setStep={setStep}/>}
        {step === "SENT" && <SentStepContent />}
    </Card>
  );
}
