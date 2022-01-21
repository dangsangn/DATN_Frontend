import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { themes } from "themes";
import { loginActions } from "features/login/loginSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

const Routerheader = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducers);
  // console.log("user", user, isLogin);
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
    <ListMenu>
      <ItemMenu key="romemate">
        <LinkMenu classnameactive="active" to="/romemate">
          Ở ghép
        </LinkMenu>
      </ItemMenu>
      {user?.username ? (
        <ItemMenu>
          <Box>
            <MAvatar
              onClick={handleClick}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
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
            <MenuItem>
              <AccountCircleIcon /> <Text>Profile</Text>
            </MenuItem>
            <MenuItem onClick={() => history.push("/post-room")}>
              <AddBusinessIcon /> <Text>Đăng phòng</Text>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Đăng xuất
            </MenuItem>
          </Menu>
        </ItemMenu>
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
  );
};

const Text = styled.span`
  margin-left: 12px;
`;
const MAvatar = styled(Avatar)`
  cursor: pointer;
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

export default Routerheader;
