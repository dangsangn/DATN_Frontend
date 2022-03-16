import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import { loginActions } from "features/login/loginSlice";
import { notificationActions } from "features/notification/notificationSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { themes } from "themes";
const menus = [
  {
    link: "/my-room",
    icon: <FeaturedPlayListOutlinedIcon />,
    title: "Bài đăng",
  },
  {
    link: "/conversation",
    icon: <ChatBubbleOutlineOutlinedIcon />,
    title: "Hộp thoại",
  },
  {
    link: "/order",
    icon: <AddShoppingCartIcon />,
    title: "Phòng đã đặt",
  },
  {
    link: "/profile",
    icon: <NoteAltOutlinedIcon />,
    title: "Hồ sơ",
  },
];

const Routerheader = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducers);
  const location = useLocation();
  // console.log("user", user);
  const [anchorEl, setAnchorEl] = React.useState();
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(loginActions.logout());
  };

  return (
    // <>
    <ListMenu>
      {user?.username ? (
        <>
          <ItemMenu key="postRoom">
            <LinkMenu classnameactive="active" to="/post-room">
              Đăng phòng
            </LinkMenu>
          </ItemMenu>
          <ItemMenu>
            <Box>
              <MButton variant="outlined" onClick={handleClick}>
                {user?.username}
              </MButton>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              variant="selectedMenu"
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {menus.map((item, index) => (
                <MenuItem
                  style={
                    location.pathname === item.link
                      ? {
                          backgroundColor: themes.primary,
                          color: themes.white,
                        }
                      : {}
                  }
                  key={index}
                  onClick={() => history.push(item.link)}
                >
                  {item.icon} <Text>{item.title}</Text>
                </MenuItem>
              ))}
              <MenuItem onClick={handleLogout}>
                <LogoutOutlinedIcon />
                <Text>Đăng xuất</Text>
              </MenuItem>
            </Menu>
          </ItemMenu>
        </>
      ) : (
        <>
          <ItemMenu key="login">
            <LinkMenu classnameactive="active" to="/login">
              Đăng nhập
            </LinkMenu>
          </ItemMenu>
          <ItemMenu key="register">
            <LinkMenu classnameactive="active" to="/register">
              Đăng ký
            </LinkMenu>
          </ItemMenu>
        </>
      )}
    </ListMenu>
    // </>
  );
};

const WrapperNotification = styled.div`
  padding: 24px 0;
`;
const MButton = styled(Button)`
  text-transform: initial !important;
  border-radius: 16px !important;
  border-width: 2px !important;
`;
const Text = styled.span`
  margin-left: 12px;
`;

const LinkMenu = styled(NavLink)`
  display: flex;
  align-items: center;
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

export default Routerheader;
