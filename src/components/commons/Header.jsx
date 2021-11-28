import { publictRouter } from "data/routers";
import { useCheckscrollDown } from "hook/checkScrollDown";
import Logo from "images/home.png";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { themes } from "themes";
const Header = () => {
  const isDown = useCheckscrollDown();
  return (
    <WrapHeader status={isDown?.height > 100 && isDown?.status}>
      <WrapContent>
        <Container>
          <WrapLogo to="">
            <img src={Logo} alt="" />
          </WrapLogo>
          <ListMenu>
            {publictRouter.map((item) => (
              <ItemMenu key={item.name}>
                <LinkMenu classnameactive="active" to={item.path}>
                  {item.name}
                </LinkMenu>
              </ItemMenu>
            ))}
          </ListMenu>
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
const LinkMenu = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  font-family: ${themes.fontFamilySecond};
  transition: all 0.4s ease-in-out;
  &:hover {
    color: ${themes.primary};
  }
`;
const ItemMenu = styled.li`
  margin: 0 16px;
  &:last-child {
    margin-right: 0;
  }
`;
const ListMenu = styled.ul`
  display: flex;
  align-items: center;
`;
const WrapLogo = styled(Link)`
  width: 46px;
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
