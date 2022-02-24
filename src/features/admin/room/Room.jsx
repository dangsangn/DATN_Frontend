import { Box, Container } from "@mui/material";
import RoomList from "./components/RoomList";
import { CustomerListToolbar } from "./components/CustomerListToolbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { roomAdminActions } from "./roomAdminSlice";

const Rooms = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(roomAdminActions.getListRoom({}));
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
            <RoomList />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Rooms;
