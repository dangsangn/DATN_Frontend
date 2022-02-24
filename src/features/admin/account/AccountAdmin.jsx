import React from "react";
import styled from "styled-components";
import Changepassword from "./components/ChangePassword";
import Infoaccount from "./components/InfoAccount";

export default function AccountAdmin() {
  return (
    <Wrapper>
      <Infoaccount />
      <Changepassword />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 50px 30px;
  background-color: #f7f7f7;
`;
