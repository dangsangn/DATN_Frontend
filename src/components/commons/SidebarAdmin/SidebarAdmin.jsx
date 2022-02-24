import OtherHousesRoundedIcon from "@mui/icons-material/OtherHousesRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { NavItem } from "./NavItem";
const items = [
  {
    href: "/admin/users",
    icon: <PersonIcon fontSize="small" />,
    title: "Users",
  },
  {
    href: "/admin/rooms",
    icon: <OtherHousesRoundedIcon fontSize="small" />,
    title: "Rooms",
  },
  {
    href: "/admin/account",
    icon: <ManageAccountsRoundedIcon fontSize="small" />,
    title: "Account",
  },
];

export const SidebarAdmin = (props) => {
  const { open, onClose } = props;
  const router = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundColor: "rgb(17, 24, 39)",
        }}
      >
        <div>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TitleLink to="/admin/rooms">Admin</TitleLink>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

const TitleLink = styled(Link)`
  font-size: 22px;
  margin-top: 24px;
`;

SidebarAdmin.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
