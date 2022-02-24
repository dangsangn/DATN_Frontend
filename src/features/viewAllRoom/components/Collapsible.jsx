import React, { useState } from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Collapsible = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <Wrapper>
      <Header onClick={handleToggle}>
        <Title>{title}</Title>
        <Icon open={open}>
          <KeyboardArrowDownIcon fontSize="large" />
        </Icon>
      </Header>
      {open && <Body>{children}</Body>}
    </Wrapper>
  );
};

const Icon = styled.div`
  transform: rotateZ(${(props) => (props.open ? "-90deg" : "0deg")});
  transition: all 0.4s ease;
`;
const Title = styled.h4``;
const Body = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  padding-bottom: 16px;
`;
export default Collapsible;
