import { TextField } from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
export const InputField = ({
  name,
  control,
  label,
  placeholder,
  disabled,
  ...inputProps
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({ name, control });
  return (
    <WrapField>
      <Label>{label}</Label>
      <TextField
        fullWidth
        size="small"
        margin="normal"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        variant="outlined"
        inputRef={ref}
        error={invalid}
        placeholder={placeholder}
        helperText={error?.message}
        inputProps={inputProps}
        disabled={disabled}
      />
    </WrapField>
  );
};

const Label = styled.label`
  display: inline-block;
  margin-bottom: 4px;
  font-size: 12px;
`;
const WrapField = styled.div`
  .MuiFormControl-marginNormal {
    margin: 0;
  }
`;