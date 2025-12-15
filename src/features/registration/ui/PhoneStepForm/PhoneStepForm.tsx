import { useForm } from "../../../../shared/lib/hooks/useFrom";
import { FloatInput } from "../../../../shared/ui/FloatInput/FloatInput";
import { validatePhone } from "../../lib/phone";

export const PhoneStepForm = () => {
  const {
    formState,
    handleChange,
    handleClearInput,
    handleBlur,
    setFieldError,
    errors,
  } = useForm({
    phone: "" as string,
  });

  const handleFieldBlur = (name: string) => {
    handleBlur(name);
    if (name === "phone") {
      const value = formState[name];
      const error = validatePhone(value);
      setFieldError(name, error || undefined);
    }
  };

  return (
    <form>
      <FloatInput
        value={formState.phone}
        name="phone"
        type="tel"
        label="Введите номер телефона в формате +7900 или 8900"
        onChange={handleChange}
        onClear={handleClearInput}
        onBlur={handleFieldBlur}
        error={errors.phone}        
      />
    </form>
  );
};
