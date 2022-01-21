import { useCheckscrollDown } from "hook/checkScrollDown";
import Logo from "images/home.jpg";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { themes } from "themes";
import Routerheader from "./RouterHeader";
const Header = () => {
  const isDown = useCheckscrollDown();
  return (
    <WrapHeader status={isDown?.height > 100 && isDown?.status}>
      <WrapContent>
        <Container>
          <WrapLogo to="">
            <img src={Logo} alt="" />
          </WrapLogo>
          <Routerheader />
        </Container>
      </WrapContent>
    </WrapHeader>
  );
};

const WrapContent = styled.div`
  padding: 0 32px;
  max-width: 1440px;
  margin: auto;
`;

const WrapLogo = styled(Link)`
  width: 70px;
  height: 46px;
  display: block;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin: auto;
  .active {
    color: ${themes.primary};
  }
`;

const WrapHeader = styled.div`
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background: #fff;
  position: fixed;
  top: ${(props) => (props?.status ? "-63px" : 0)};
  left: 0;
  right: 0;
  z-index: 1000;
  transition: top 0.3s ease-in-out;
`;

export default Header;
