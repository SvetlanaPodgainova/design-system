import { useState } from "react";
import type { TRegistrationStep } from "../../model/type";
import { PhoneStep } from "../PhoneStep";
import { CodeStep } from "../CodeStep";
import styles from './RegistrationFlow.module.css'

export const RegistrationFlow = () => {
  const [step, setStep] = useState<TRegistrationStep>("phone");

  return (
    <div>
      <h1 className={styles.title}>Регистрация</h1>
      {step === "phone" && <PhoneStep />}
      {step === "code" && <CodeStep />}
    </div>
  );
};
