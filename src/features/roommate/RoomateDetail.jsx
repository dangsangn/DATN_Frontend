import ChatIcon from "@mui/icons-material/Chat";
import { Box, Button, Grid, TextField } from "@mui/material";
import { getroomDetailApi } from "apis/room";
import Messenger from "features/messages/components/Messenger";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GroupImage from "./components/GroupImage";
import InfomationHost from "./components/InfomationHost";
import InfomationRoom from "./components/InfomationRoom";
import Utilities from "./components/Utilities";
import { roomDetailActions } from "./roomDetailSlice";
import { messageActions } from "../messages/MessageSlice";
import MInputnumber from "components/commons/FormField/InputNumber";

const RoomateDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { roomDetail } = useSelector((state) => state.roomDetailRenderers);
  const { user } = useSelector((state) => state.userReducers);
  const [openChatBox, setOpenChatBox] = useState(false);
  const [countRoom, setCountRoom] = useState(1);
  const [infoConversation, setInfoConversation] = useState({
    title: "", //name user chat
    isBox: true, //in detail room, it is a box
    height: 286,
  });
  useEffect(() => {
    dispatch(roomDetailActions.getDetailRoom(id));
  }, [dispatch, id]);

  const handleToggleChatBox = () => {
    setOpenChatBox(!openChatBox);
  };

  const handleCloseChatBox = () => {
    setOpenChatBox(false);
  };

  const handleGetConversation = async () => {
    dispatch(
      messageActions.getConversation({
        idUser: user?._id,
        idReceiver: roomDetail?.owner?._id,
      })
    );
    handleToggleChatBox();
  };

  const handleOrderRoom = () => {
    dispatch(
      roomDetailActions.updateRoomOrder({
        id: roomDetail?._id,
        count: countRoom,
      })
    );
  };
  return (
    <Wrapper>
      <WrapContent>
        <GroupImage images={roomDetail?.images} />
        <Title>
          {roomDetail?.numberHome +
            " " +
            roomDetail?.nameStress +
            ", " +
            (roomDetail?.ward ? roomDetail?.ward?.label + ", " : "") +
            (roomDetail?.district ? roomDetail?.district?.label + ", " : "") +
            (roomDetail?.city ? roomDetail?.city?.label : "")}
        </Title>
        {user?._id !== roomDetail?.owner?._id && (
          <WrapAction>
            <Box sx={{ display: "flex" }}>
              <WrapButtonOrder>
                <MButton
                  variant="outlined"
                  onClick={handleOrderRoom}
                  disabled={
                    roomDetail?.quantityRoom - roomDetail?.ordered <= 0
                      ? true
                      : false
                  }
                >
                  Đặt phòng
                </MButton>
              </WrapButtonOrder>
              <WrapChooseAmountRoom>
                <TextAmout>Số lượng: </TextAmout>
                <MInputnumber
                  value={countRoom}
                  setValue={setCountRoom}
                  max={roomDetail?.quantityRoom - roomDetail?.ordered}
                />
              </WrapChooseAmountRoom>
            </Box>
            <WrapStatus>
              {roomDetail?.quantityRoom - roomDetail?.ordered > 0 ? (
                <SuccessTetx>Còn phòng</SuccessTetx>
              ) : (
                <WarningTetx>Hết phòng</WarningTetx>
              )}
            </WrapStatus>
          </WrapAction>
        )}

        <WrapCard>
          <Grid container columnSpacing={3}>
            <Grid item md={8}>
              <Box>
                <WrapInfomationRoom>
                  <InfomationRoom
                    priceRoom={roomDetail?.priceRoom}
                    stretch={roomDetail?.stretch}
                    priceDeposit={roomDetail?.priceDeposit}
                    priceWater={roomDetail?.priceWater}
                    priceWifi={roomDetail?.priceWifi}
                    ordered={roomDetail?.ordered}
                    quantityRoom={roomDetail?.quantityRoom}
                    ward={roomDetail?.ward}
                    district={roomDetail?.district}
                    city={roomDetail?.city}
                    nameStress={roomDetail?.nameStress}
                    numberHome={roomDetail?.numberHome}
                    capacity={roomDetail?.capacity}
                    priceElectric={roomDetail?.priceElectric}
                  />
                </WrapInfomationRoom>
              </Box>
              <Box>
                <WrapUtilities>
                  <Utilities utilities={roomDetail?.utilities} />
                </WrapUtilities>
              </Box>
            </Grid>
            <Grid item md={4}>
              <WrapInfomationHost>
                <InfomationHost
                  owner={roomDetail?.owner}
                  createdAt={roomDetail?.createdAt}
                />
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
        {user?._id !== roomDetail?.owner?._id && (
          <ChatButton variant="contained" onClick={handleGetConversation}>
            <ChatIcon sx={{ marginRight: "12px" }} />
            Nhắn với chủ phòng
          </ChatButton>
        )}

        {openChatBox && (
          <WrapModalChat openChatBox={openChatBox}>
            <Messenger
              handleCloseChatBox={handleCloseChatBox}
              infoConversation={infoConversation}
            />
          </WrapModalChat>
        )}
      </WrapActionButton>
    </Wrapper>
  );
};

const SuccessTetx = styled.span`
  background-color: green;
  color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`;
const WarningTetx = styled(SuccessTetx)`
  background-color: red;
`;
const WrapStatus = styled.div``;
const TextAmout = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;
const WrapChooseAmountRoom = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;
const WrapAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;
const MButton = styled(Button)`
  text-transform: initial !important;
  font-weight: bold !important;
  border-radius: 12px !important;
  padding: 8px 16px !important;
  font-size: 16px !important;
`;
const WrapButtonOrder = styled.div``;
const WrapModalChat = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 320px;
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
