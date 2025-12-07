import { useState } from "react";

export const useForm = <T extends Record<string, string | boolean>>(
  initialState: T
) => {
  const [formState, setFormState] = useState<T>(initialState);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  const handleChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleClearInput = (name: string) => {
    handleChange(name, "");
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const setFieldError = (name: string, error?: string) => {
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleResetForm = () => {
    setFormState(initialState);
    setTouched({});
    setErrors({});
  };

  return {
    formState,
    handleChange,
    handleClearInput,
    handleBlur,
    handleResetForm,
    setFieldError,
    errors,
  };
};
