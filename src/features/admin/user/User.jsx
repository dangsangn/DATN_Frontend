import { Box, Container } from "@mui/material";
import UserList from "./components/UserList";
import { CustomerListToolbar } from "./components/CustomerListToolbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userAdminActions } from "./userAdminSlice";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAdminActions.getListUser({}));
  }, [dispatch]);

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ mt: 3 }}>
            <UserList />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Users;
