import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "./components/Banner";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import RoomItem from "features/room/components/RoomItem";
import { roomActions } from "features/room/roomSlice";
const Home = () => {
  const login = useSelector((state) => state.loginReducers);
  const listRoom = useSelector((state) => state.roomReducers.listRoom);
  // console.log(listRoom);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
    new: true,
  });
  console.log(login);
  useEffect(() => {
    dispatch(roomActions.getListRomm(filter));
  }, [dispatch, filter]);
  return (
    <Wrapper>
      <WrapBanner>
        <Banner />
      </WrapBanner>
      <WrapContent>
        <Grid container spacing={2}>
          <Grid item md={8}>
            <ListRoomContent>
              <TitleListRoom>
                Phòng mới nhất{" "}
                <Button color="blue" variant="outlined">
                  Xem tất cả
                </Button>
              </TitleListRoom>
              {listRoom.map((item) => (
                <RoomItem key={item._id} data={item} />
              ))}
            </ListRoomContent>
          </Grid>
          <Grid item md={4}>
            <ListRoomContent>
              <TitleListRoom>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <WrapIconVerify>
                    <VerifiedUserIcon color="blue" />
                  </WrapIconVerify>
                  Đã xác thực
                </Box>
                <Button color="blue" variant="outlined">
                  Xem tất cả
                </Button>
              </TitleListRoom>
              {listRoom.map((item) => (
                <RoomItem vertical={true} key={item._id} data={item} />
              ))}
            </ListRoomContent>
          </Grid>
        </Grid>
      </WrapContent>
    </Wrapper>
  );
};

const WrapIconVerify = styled.div`
  margin-right: 8px;
  display: flex;
`;
const TitleListRoom = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ListRoomContent = styled.div`
  background-color: #fff;
  padding: 32px;
  border-radius: 20px;
  & .room-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;
const WrapContent = styled.div`
  padding: 50px 32px;
  max-width: 1440px;
  margin: auto;
`;
const WrapBanner = styled.div``;
const Wrapper = styled.div``;

export default Home;
