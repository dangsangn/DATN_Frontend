import React from "react";
import styled from "styled-components";
import { color } from "themes";
import Noticesuccess from "../components/NoticeSuccess";

const FormAddRoomSuccess = () => {
  return (
    <Wrapper>
      <Noticesuccess />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 100px auto;
  max-width: 400px;
  border: 1px solid ${color.primary.Shades6};
  box-shadow: 0 0 10px ${color.primary.Shades7};
  padding: 32px 16px;
  border-radius: 10px;
`;
export default FormAddRoomSuccess;
