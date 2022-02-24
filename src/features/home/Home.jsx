import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "./components/Banner";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import RoomItem from "features/room/components/RoomItem";
import { roomActions } from "features/room/roomSlice";
import { Link } from "react-router-dom";
import { themes } from "themes";
import history from "utils/history";
const Home = () => {
  const { listRoom, listRoomVerified } = useSelector(
    (state) => state.roomReducers
  );
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
  });
  useEffect(() => {
    dispatch(roomActions.getListRomm(filter));
    dispatch(roomActions.getListRoomVerify({ ...filter, verify: true }));
  }, [dispatch, filter]);

  const handleGotoAllViewRoom = () => {
    history.push("/view-all-room");
  };
  const handleGotoAllViewRoomVerify = () => {
    history.push("/view-all-room?verify=true");
  };
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
                <MButton
                  color="primary"
                  variant="outlined"
                  onClick={handleGotoAllViewRoom}
                >
                  Xem tất cả
                </MButton>
              </TitleListRoom>
              {listRoom.map((item) => (
                <RoomItem key={item._id} data={item} />
              ))}
              <WrapLinkFooter>
                <LinkFooter to="/view-all-room">Xem tất cả </LinkFooter>
              </WrapLinkFooter>
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
                <MButton
                  color="primary"
                  variant="outlined"
                  onClick={handleGotoAllViewRoomVerify}
                >
                  Xem tất cả
                </MButton>
              </TitleListRoom>
              {listRoomVerified.map((item) => (
                <RoomItem vertical={true} key={item._id} data={item} />
              ))}
              <WrapLinkFooter>
                <LinkFooter to="/view-all-room?verify=true">
                  Xem tất cả{" "}
                </LinkFooter>
              </WrapLinkFooter>
            </ListRoomContent>
          </Grid>
        </Grid>
      </WrapContent>
    </Wrapper>
  );
};

const WrapLinkFooter = styled.div`
  text-align: center;
`;
const LinkFooter = styled(Link)`
  color: ${themes.primary};
`;
const MButton = styled(Button)`
  border-radius: 16px !important;
  border-width: 2px !important;
  text-transform: initial !important;
`;
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
