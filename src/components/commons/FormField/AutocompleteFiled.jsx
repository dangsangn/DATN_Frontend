import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Autocomplete,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

export const AutocompleteField = ({
  name,
  control,
  label,
  options,
  disabled,
  placeholder,
  ...radioProps
}) => {
  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({ name, control });
  return (
    <Wrapper>
      <FormControl size="small" fullWidth disabled={disabled} error={invalid}>
        <Label>{label}</Label>
        <Autocomplete
          disablePortal
          id={name}
          options={options}
          popupIcon={<KeyboardArrowDownIcon />}
          // renderOption={(props, option) => option}
          // filterOptions={(props, options) => options}
          onChange={(event, value) => onChange(value)}
          value={value}
          renderInput={(params) => (
            <TextField {...params} placeholder={placeholder} />
          )}
        />
        <FormHelperText>{error?.message}</FormHelperText>
      </FormControl>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  && {
    .MuiAutocomplete-input {
      padding: 0 !important;
    }
  }
`;
const Label = styled.label`
  display: inline-block;
  margin-bottom: 4px;
  font-size: 14px;
`;
