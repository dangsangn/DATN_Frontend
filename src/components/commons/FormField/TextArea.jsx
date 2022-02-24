import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
import { color } from "themes";

const Textarea = ({ name, control, label, placeholder }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control });
  return (
    <Wrapper>
      <Label>{label}</Label>
      <MInput
        type="textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows="4"
        name={name}
      ></MInput>
      {error?.message && <MessageError>{error.message}</MessageError>}
    </Wrapper>
  );
};

const MessageError = styled.p`
  font-size: 12px;
  color: red;
  margin-left: 8px;
`;
const MInput = styled.textarea`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  padding: 8px;
  font-size: 16px;
  &:focus {
    outline: none !important;
    border: 2px solid ${color.primary.newPurple};
  }
`;
const Label = styled.label`
  display: inline-block;
  margin-bottom: 4px;
  font-size: 12px;
`;
const Wrapper = styled.div``;
export default Textarea;
