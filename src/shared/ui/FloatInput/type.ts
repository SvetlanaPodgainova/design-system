type NativeInputProps = React.InputHTMLAttributes<HTMLInputElement>;

type TFloatInputProps = {
  name: string;
  type: string;
  label: string;
  value?: string;
  onClear: (name: string) => void;
  onChange: (name: string, value: string) => void;
  onBlur?: (name: string) => void;
  error?: string;
};

export type TFloatInputAllProps = TFloatInputProps & NativeInputProps;
