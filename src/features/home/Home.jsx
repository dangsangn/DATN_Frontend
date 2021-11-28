import { Button, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Banner from "./components/Banner";
import RoomItem from "./components/RoomItem";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
const Home = () => {
  const login = useSelector((state) => state.loginReducers);
  console.log(login);
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
              <RoomItem />
              <RoomItem />
              <RoomItem />
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
              <RoomItem verify={true} />
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
