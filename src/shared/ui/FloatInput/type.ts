export type TFloatInputProps = {  
  name: string;
  label: string;
  value?: string;
  onClear?: () => void;
  onChange: (name: string, value: string) => void;
  error?: string;
}
