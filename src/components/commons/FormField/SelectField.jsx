import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import styled from "styled-components";
import React from "react";
import { useController } from "react-hook-form";

export const SelectField = ({
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
    <FormControl size="small" fullWidth disabled={disabled} error={invalid}>
      <Label>{label}</Label>
      <Select
        labelId={name}
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

const Label = styled.label`
  display: inline-block;
  margin-bottom: 4px;
  font-size: 12px;
`;
