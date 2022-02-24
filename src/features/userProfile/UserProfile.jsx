import ChangePassword from "features/admin/account/components/ChangePassword";
import Infoaccount from "features/admin/account/components/InfoAccount";
import React from "react";
import styled from "styled-components";

const Userprofile = () => {
  return (
    <Wrapper>
      <Infoaccount />
      <ChangePassword />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 50px 32px;
`;
export default Userprofile;
