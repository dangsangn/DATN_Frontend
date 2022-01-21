import ChatIcon from "@mui/icons-material/Chat";
import { Box, Button, Grid } from "@mui/material";
import { getDetailRoomApi } from "apis/room";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GroupImage from "./components/GroupImage";
import InfomationHost from "./components/InfomationHost";
import InfomationRoom from "./components/InfomationRoom";
// import Message from "./components/message/Message";
import Utilities from "./components/Utilities";
const RoomateDetail = () => {
  const { id } = useParams();
  const [detailRoom, setDetailRoom] = useState();

  useEffect(() => {
    const fetchRoomDetail = async () => {
      const res = await getDetailRoomApi(id);
      setDetailRoom(res.data);
    };
    fetchRoomDetail();
  }, [id]);
  // console.log(detailRoom);
  return (
    <Wrapper>
      <WrapContent>
        <GroupImage images={detailRoom?.images} />
        <Title>
          {detailRoom?.numberHome +
            " " +
            detailRoom?.nameStress +
            ", " +
            (detailRoom?.ward ? detailRoom?.ward?.label + ", " : "") +
            (detailRoom?.district ? detailRoom?.district?.label + ", " : "") +
            (detailRoom?.city ? detailRoom?.city?.label : "")}
        </Title>
        <WrapCard>
          <Grid container columnSpacing={3}>
            <Grid item md={8}>
              <Box>
                <WrapInfomationRoom>
                  <InfomationRoom
                    priceRoom={detailRoom?.priceRoom}
                    stretch={detailRoom?.stretch}
                    priceDeposit={detailRoom?.priceDeposit}
                    priceWater={detailRoom?.priceWater}
                    priceWifi={detailRoom?.priceWifi}
                    ordered={detailRoom?.ordered}
                    quantityRoom={detailRoom?.quantityRoom}
                    ward={detailRoom?.ward}
                    district={detailRoom?.district}
                    city={detailRoom?.city}
                    nameStress={detailRoom?.nameStress}
                    numberHome={detailRoom?.numberHome}
                    capacity={detailRoom?.capacity}
                    priceElectric={detailRoom?.priceElectric}
                  />
                </WrapInfomationRoom>
              </Box>
              <Box>
                <WrapUtilities>
                  <Utilities utilities={detailRoom?.utilities} />
                </WrapUtilities>
              </Box>
            </Grid>
            <Grid item md={4}>
              <WrapInfomationHost>
                <InfomationHost createdAt={detailRoom?.createdAt} />
              </WrapInfomationHost>
            </Grid>
          </Grid>
        </WrapCard>
      </WrapContent>
      <WrapActionButton>
        {/* <FavoriteButton
          color="print"
          variant="contained"
          sx={{ marginRight: "24px", color: "white !important" }}
        >
          <FavoriteIcon />
        </FavoriteButton> */}
        <ChatButton variant="contained">
          <ChatIcon sx={{ marginRight: "12px" }} />
          Nhắn với chủ phòng
        </ChatButton>
        <WrapModalChat>{/* <Message /> */}</WrapModalChat>
      </WrapActionButton>
    </Wrapper>
  );
};

const WrapModalChat = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
`;
const ChatButton = styled(Button)`
  text-transform: inherit !important;
  border-radius: 12px !important;
`;
const FavoriteButton = styled(Button)`
  width: 44px;
  height: 44px;
  min-width: 44px !important;
  border-radius: 50% !important;
`;
const WrapActionButton = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 24px;
`;
const WrapInfomationHost = styled.div`
  border-radius: 32px;
  overflow: hidden;
`;

const WrapUtilities = styled(WrapInfomationHost)`
  margin-top: 24px;
`;
const WrapInfomationRoom = styled.div`
  border-radius: 32px;
  overflow: hidden;
`;
const WrapCard = styled.div`
  margin-top: 32px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  margin-top: 20px;
`;
const WrapContent = styled.div``;
const Wrapper = styled.div`
  max-width: 1300px;
  margin: 50px auto 100px;
  position: relative;
`;
export default RoomateDetail;
