import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { notificationActions } from "features/notification/notificationSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Notificationitem from "./NotificationItem";
import { Button } from "@mui/material";
import Loading from "components/commons/Loading";

export default function Notification({ onClose }) {
  const dispatch = useDispatch();
  const { listNotification, loading, status } = useSelector(
    (state) => state.notificationReducers
  );
  useEffect(() => {
    dispatch(notificationActions.getListNotification());
  }, [dispatch]);

  const handleGetAllNoti = () => {
    dispatch(notificationActions.getListNotification());
  };

  const handleGetAllNotiNotRead = () => {
    dispatch(notificationActions.getListNotificationNotRead());
  };

  return (
    <Wrapper>
      <Header>
        <NotificationsOutlinedIcon sx={{ marginRight: "8px" }} />{" "}
        <span>Thông báo gần đây</span>
      </Header>
      <NotiAction>
        <MButton
          onClick={handleGetAllNoti}
          sx={{ marginRight: "12px" }}
          variant="outlined"
        >
          Tất cả
        </MButton>
        <MButton onClick={handleGetAllNotiNotRead} variant="outlined">
          Chưa đọc
        </MButton>
      </NotiAction>
      <Title>{status === 1 ? "Tất cả thông báo" : "Chưa đọc"}</Title>
      {loading ? (
        <Loading color="primary" />
      ) : (
        <ListNotification>
          {listNotification.length ? (
            listNotification.map((item) => (
              <Notificationitem key={item._id} data={item} onClose={onClose} />
            ))
          ) : (
            <TextNoData>Không có thông báo gần đây</TextNoData>
          )}
        </ListNotification>
      )}
    </Wrapper>
  );
}

const Title = styled.p`
  padding-left: 24px;
  font-weight: bold;
`;
const MButton = styled(Button)`
  text-transform: initial !important;
  border-radius: 12px !important;
`;
const NotiAction = styled.div`
  padding: 12px 24px;
`;
const TextNoData = styled.p`
  text-align: center;
  margin-top: 32px;
  font-weight: bold;
`;

const ListNotification = styled.ul`
  height: calc(100vh - 150px);
  overflow-y: scroll;
`;
const Header = styled.h4`
  padding: 12px 24px 12px 24px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 360px;
`;
