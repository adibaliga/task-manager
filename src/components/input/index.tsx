// Input.tsx
import React from "react";
import styles from "./index.module.css";

interface InputProps {
  label: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: "text" | "password" | "textarea" | "email";
  required?: boolean;
  className?: string;
  autofocus?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  type = "text",
  onChange,
  required = false,
  className = "",
  autofocus = false,
}) => {
  const renderInput = () => {
    if (type === "textarea") {
      return (
        <textarea
          value={value}
          onChange={onChange}
          className={styles.input}
          required={required}
          autoFocus={autofocus}
        />
      );
    } else {
      return (
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={styles.input}
          required={required}
          autoFocus={autofocus}
        />
      );
    }
  };

  return (
    <div className={`${styles.inputContainer} ${className}`}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      {renderInput()}
    </div>
  );
};
export default Input;
