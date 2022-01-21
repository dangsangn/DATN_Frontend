import Radio from "@mui/material/Radio";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import styled from "styled-components";
import React from "react";
import { useController } from "react-hook-form";
import { FormHelperText } from "@mui/material";

export const RadioField = ({
  name,
  control,
  label,
  options,
  disabled,
  ...radioProps
}) => {
  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({ name, control });
  return (
    <FormControl disabled={disabled} error={invalid} component="fieldset">
      <Label>{label}</Label>
      <RadioGroup
        aria-label={name}
        defaultValue={value}
        name={name}
        onChange={onChange}
        value={value}
      >
        {options.map((item) => (
          <FormControlLabel
            value={item.value}
            control={<Radio />}
            label={item.label}
            key={item.value}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

const Label = styled.label`
  display: inline-block;
  font-size: 12px;
`;
