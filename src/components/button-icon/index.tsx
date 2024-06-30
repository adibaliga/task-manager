import React, { MouseEventHandler } from "react";
import styles from "./index.module.css";
interface ButtonIconProps {
  icon: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: React.CSSProperties;
}
const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  onClick,
  disabled = false,
  style = {},
}) => {
  return (
    <button
      className={styles.buttonIcon}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {icon}
    </button>
  );
};

export default ButtonIcon;
