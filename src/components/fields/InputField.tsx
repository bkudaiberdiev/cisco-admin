import { useState } from "react";
import { hideEyeSVG, showEyeSVG } from "../../assets/icons";
import classes from "./Fields.module.scss";

export interface IInputFieldProps {
  id?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
}
function InputField({
  id,
  label,
  placeholder,
  value,
  type = "text",
  className,
  disabled,
  onChange,
  ...inputProps
}: IInputFieldProps) {
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  return (
    <label htmlFor={id} className={`${classes.input__field} ${className}`}>
      {label && <span className={classes.input__field_label}>{label}</span>}
      {type === "password" ? (
        <div className={classes.input__field_password}>
          <input
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            type={isPasswordShow ? "text" : "password"}
            {...inputProps}
          />
          <img
            aria-hidden
            src={isPasswordShow ? showEyeSVG : hideEyeSVG}
            onClick={() => setIsPasswordShow(!isPasswordShow)}
            alt=""
          />
        </div>
      ) : (
        <input
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          type={type}
          {...inputProps}
        />
      )}
    </label>
  );
}

export default InputField;
