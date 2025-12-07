export function validatePhone(value: string): string | null {
  const phone = value.trim();

  if (phone.length === 0) return "Укажите номер телефона";

  const allowedChars = /^[0-9()+\- ]+$/;
  if (!allowedChars.test(phone)) {
    return "Телефон может содержать только цифры и знак +";
  }

  const plusCount = (phone.match(/\+/g) || []).length;

  if (plusCount > 1) {
    return "Символ + может быть только один";
  }

  if (plusCount === 1 && phone[0] !== "+") {
    return "Символ + должен быть в начале номера";
  }

  const digits = phone.replace(/\D/g, "");

  if (digits.length !== 11) return "Номер должен содержать 11 цифр";

  return null;
}
