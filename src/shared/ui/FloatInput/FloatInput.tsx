import { type ChangeEvent } from "react";
import type { TFloatInputAllProps } from "./type";
import { IconButton } from "../IconButton/IconButton";
import styles from "./FloatInput.module.css";

export const FloatInput = ({
  name,
  label,
  type,
  onChange,
  onClear,
  onBlur,
  error,
  value,
}: TFloatInputAllProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.name, e.target.value);
  };

  const handleClearClick = () => {
    onClear(name);
  };

  const handleBlur = () => {
    if (onBlur) onBlur(name);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        name={name}
        id={name}
        value={value}
        type={type ?? "text"}
        placeholder=" "
        onChange={handleInputChange}
        onBlur={handleBlur}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      />

      <label htmlFor={name} className={styles.areaLable}>
        {label}
      </label>

      {value && (
        <IconButton
          className={styles.clearButton}
          variant="clear"
          ariaLabel="очистить поле ввода"
          onClick={handleClearClick}
        />
      )}

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
