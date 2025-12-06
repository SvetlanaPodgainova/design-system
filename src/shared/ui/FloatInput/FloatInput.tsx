import { memo, useCallback, type ChangeEvent } from "react";
import type { TFloatInputProps } from "./type";
import { IconButton } from "../IconButton/IconButton";
import styles from "./FloatInput.module.css";

export const FloatInput = memo(
  ({ name, label, onChange, error, value }: TFloatInputProps) => {
    const handleInputChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.name, e.target.value);
      },
      [onChange]
    );

    return (
      <div className={styles.inputWrapper}>
        <input
          name={name}
          value={value}
          placeholder=" "
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />

        <label htmlFor={name} className={styles.areaLable}>
          {label}
        </label>

        <IconButton
          className={styles.clearButton}
          variant="clear"
          ariaLabel="очистить поле ввода"
        />

        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);
