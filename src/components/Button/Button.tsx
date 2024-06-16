import { FC } from "react";
import buttonStyles from "./Button.module.css";
import { Spinner } from "@components/Spinner";

interface ButtonProps {
  title: string;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({
  disabled,
  isLoading,
  title,
  className,
  onClick,
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${buttonStyles.button} ${disabled && buttonStyles.disabled} ${className}`}
    >
      {isLoading ? <Spinner /> : title}
    </button>
  );
};
