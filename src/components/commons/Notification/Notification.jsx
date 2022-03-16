import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { notificationActions } from "features/notification/notificationSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Notificationitem from "./NotificationItem";

export default function Notification({ onClose }) {
  const dispatch = useDispatch();
  const { listNotification } = useSelector(
    (state) => state.notificationReducers
  );
  useEffect(() => {
    dispatch(notificationActions.getListNotification());
  }, [dispatch]);

  return (
    <Wrapper>
      <Header>
        <NotificationsOutlinedIcon sx={{ marginRight: "8px" }} />{" "}
        <span>Thông báo gần đây</span>
      </Header>
      <ListNotification>
        {listNotification.length ? (
          listNotification.map((item) => (
            <Notificationitem key={item._id} data={item} onClose={onClose} />
          ))
        ) : (
          <TextNoData>Không có thông báo gần đây</TextNoData>
        )}
      </ListNotification>
    </Wrapper>
  );
}

const TextNoData = styled.p`
  text-align: center;
  margin-top: 32px;
  font-weight: bold;
`;

const ListNotification = styled.ul`
  height: calc(100vh - 55px);
  overflow-y: scroll;
`;
const Header = styled.h4`
  padding: 12px 24px 12px 24px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  min-width: 300px;
`;
