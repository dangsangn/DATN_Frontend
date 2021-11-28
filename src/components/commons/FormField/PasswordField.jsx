import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import { useController } from "react-hook-form";

export const PasswordField = ({ name, control, label, ...inputProps }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({ name, control });
  const [showPassword, setshowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl size="small" fullWidth error={invalid} variant="outlined">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        id={name}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputRef={ref}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};
