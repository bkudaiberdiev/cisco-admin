import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import classes from "./Button.module.scss";

interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string;
  img: string;
  disabled: boolean;
  width: number;
  height: number;
  className: string;
}
function Button({
  text,
  img,
  disabled,
  width,
  height,
  className,
  onClick,
  ...props
}: Partial<IButtonProps>) {
  return (
    <button
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={{ width, height }}
      type="button"
      {...props}
    >
      {text} {img && img}
    </button>
  );
}

export default Button;
