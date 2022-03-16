import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Switch, Route } from "react-router-dom";
import User from "features/admin/user/User";
import Room from "features/admin/room/Room";
import { HeaderAdmin } from "components/commons/HeaderAdmin/HeaderAmin";
import { SidebarAdmin } from "components/commons/SidebarAdmin/SidebarAdmin";
import AccountAdmin from "features/admin/account/AccountAdmin";
import Dashboard from "features/admin/dashboard/Dashboard";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

export const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Switch>
            <Route path="/admin/dashboard">
              <Dashboard />
            </Route>
            <Route path="/admin/users">
              <User />
            </Route>
            <Route path="/admin/rooms">
              <Room />
            </Route>
            <Route path="/admin/account">
              <AccountAdmin />
            </Route>
          </Switch>
        </Box>
      </DashboardLayoutRoot>
      <HeaderAdmin onSidebarOpen={() => setSidebarOpen(true)} />
      <SidebarAdmin
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </div>
  );
};
