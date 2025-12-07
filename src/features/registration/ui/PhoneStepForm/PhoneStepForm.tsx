import { useForm } from "../../../../shared/lib/hooks/useFrom";
import { FloatInput } from "../../../../shared/ui/FloatInput/FloatInput";

export const PhoneStepForm = () => {
  const { formState, handleChange, handleClearInput, handleBlur, errors } = useForm({
    phone: "",
  });

  return (
    <form>
      <FloatInput
        value={formState.phone}
        name="phone"
        type="tel"
        label="Введите номер телефона"
        onChange={handleChange}
        onClear={handleClearInput}
        onBlur={handleBlur}
        error={errors.phone}
      />
    </form>
  );
};
