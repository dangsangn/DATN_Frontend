import { TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";

export const InputField = ({ name, control, label, ...inputProps }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({ name, control });
  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      label={label}
      variant="outlined"
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
      inputProps={inputProps}
    />
  );
};
