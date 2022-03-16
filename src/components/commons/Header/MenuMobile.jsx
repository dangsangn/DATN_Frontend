import React, { useRef } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { themes } from "themes";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "features/login/loginSlice";
const menus = [
  {
    link: "/post-room",
    title: "Đăng phòng",
  },
  {
    link: "/my-room",
    title: "Bài đăng",
  },
  {
    link: "/conversation",
    title: "Hộp thoại",
  },
  {
    link: "/order",
    title: "Phòng đã đặt",
  },
  {
    link: "/profile",
    title: "Hồ sơ",
  },
];

const Menumobile = () => {
  const burger = useRef();
  const nav = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducers);
  const handleToggleMenu = () => {
    burger.current.classList.toggle("burger-open");
    nav.current.classList.toggle("nav-open");
  };

  const handleClearActive = () => {
    burger.current.classList.remove("burger-open");
    nav.current.classList.remove("nav-open");
  };

  const handleLogout = () => {
    dispatch(loginActions.logout());
    handleClearActive();
  };

  return (
    <Wrapper>
      <Burger ref={burger} onClick={handleToggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Burger>
      <Nav ref={nav}>
        <Menu>
          {user?.username ? (
            <>
              {menus.map((item) => (
                <Item key={item.link} onClick={handleClearActive}>
                  <NavLink to={item.link} activeClassName="active">
                    {item.title}
                  </NavLink>
                </Item>
              ))}
              <Item onClick={handleLogout}>Đăng xuất</Item>
            </>
          ) : (
            <>
              <Item onClick={handleClearActive}>
                <NavLink to="/login" activeClassName="active">
                  Đăng nhập
                </NavLink>
              </Item>
              <Item onClick={handleClearActive}>
                <NavLink to="/register" activeClassName="active">
                  Đăng ký
                </NavLink>
              </Item>
            </>
          )}
        </Menu>
      </Nav>
    </Wrapper>
  );
};

const Item = styled.li`
  margin-bottom: 12px;
  color: #fff;
  cursor: pointer;
  a {
    display: block;
    color: #fff;
  }
`;
const Menu = styled.ul`
  margin-top: 42px;
`;
const Nav = styled.div`
  position: absolute;
  top: 0;
  right: -300px;
  z-index: 100;
  width: 300px;
  background-color: #333;
  height: 100vh;
  padding: 20px;
  transition: all 0.4s ease-in-out;
`;
const Burger = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 1000;
  margin-top: 23px;
  span {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #000;
    margin-bottom: 3px;
    transition: all 0.3s ease;
  }
`;
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding-right: 20px;
  .active {
    color: #cdb1ff;
  }
  .burger-open {
    span:nth-child(1) {
      transform: rotate(-45deg) translateY(9px);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(45deg) translateY(-9px);
    }
  }
  .nav-open {
    right: 0px;
  }
  @media (max-width: 600px) {
    margin-left: 40px;
  }
`;
export default Menumobile;
