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
import styled from "styled-components";

export const PasswordField = ({
  name,
  control,
  label,
  placeholder,
  ...inputProps
}) => {
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
    <WrapField>
      <FormControl size="small" fullWidth error={invalid} variant="outlined">
        <Label>{label}</Label>
        <OutlinedInput
          id={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
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
        />
        <FormHelperText>{error?.message}</FormHelperText>
      </FormControl>
    </WrapField>
  );
};

const Label = styled.label`
  display: inline-block;
  margin-bottom: 4px;
  font-size: 14px;
`;
const WrapField = styled.div`
  .MuiFormControl-marginNormal {
    margin: 0;
  }
`;
