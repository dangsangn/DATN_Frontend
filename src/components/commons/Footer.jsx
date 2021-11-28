import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Text>Copyright © Do an - 2021</Text>
    </Container>
  );
};

const Text = styled.p`
  text-align: center;
  padding: 12px;
  border-top: 1px solid #ccc;
`;
const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 1300px;
  margin: auto;
`;
export default Footer;
