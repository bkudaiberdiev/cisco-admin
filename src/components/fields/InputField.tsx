import { useState } from "react";
import { hideEyeSVG, showEyeSVG } from "../../assets/icons";
import classes from "./Fields.module.scss";

export interface IInputFieldProps {
  id?: string;
  placeholder?: string;
  name?: string;
  label?: string;
  value?: string | number;
  type?: string;
  className?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  required?: boolean;
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
  name,
  required,
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
            name={name}
            required={required}
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
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          name={name}
          type={type}
          {...inputProps}
        />
      )}
    </label>
  );
}

export default InputField;
