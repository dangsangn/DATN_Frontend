import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";
export default function Loading({ props }) {
  return (
    <Wrapper>
      <CircularProgress {...props} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
