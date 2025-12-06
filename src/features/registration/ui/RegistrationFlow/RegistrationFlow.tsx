import { useState } from "react";
import type { TRegistrationStep } from "../../model/type";
import { PhoneStepForm } from "../PhoneStepForm/PhoneStepForm";
import { CodeStepForm } from "../CodeStepForm/CodeStepForm";
import styles from "./RegistrationFlow.module.css";

export const RegistrationFlow = () => {
  const [step, setStep] = useState<TRegistrationStep>("phone");

  return (
    <div className={styles.wrapper}>
      {step === "phone" && <PhoneStepForm />}
      {step === "code" && <CodeStepForm />}
    </div>
  );
};
