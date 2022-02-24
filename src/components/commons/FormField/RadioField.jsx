import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  RadioGroup,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

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
      {label && <Label>{label}</Label>}
      <RadioGroup
        aria-label={name}
        defaultValue={+value}
        name={name}
        onChange={onChange}
        value={+value}
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
