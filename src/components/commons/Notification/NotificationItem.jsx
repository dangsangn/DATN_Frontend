import { Avatar } from "@mui/material";
import { typeNotifications } from "data/typeNotification";
import { setReadedNotificationApi } from "features/notification/api";
import { notificationActions } from "features/notification/notificationSlice";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import history from "utils/history";
const findContent = (type) => {
  const notification = typeNotifications.find((item) => item.type === type);
  return notification;
};

const Notificationitem = ({ data, onClose }) => {
  const { _id, content, isRead, sender, createdAt, type } = data;
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const res = await setReadedNotificationApi(_id);
      if (res.data) {
        onClose();
        dispatch(notificationActions.getTotalNotificationsNotRead());
        history.push(findContent(type).link);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper isread={isRead} onClick={handleClick}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <WrapContent>
        <Content>
          <strong>{sender.username}</strong> {findContent(type).content}{" "}
          {content}
        </Content>
        <Time>{moment(createdAt).fromNow()}</Time>
      </WrapContent>
    </Wrapper>
  );
};

const Time = styled.div`
  font-size: 13px;
`;
const Content = styled.div``;
const WrapContent = styled.div`
  margin-left: 12px;
  max-width: 300px;
`;
const Wrapper = styled.li`
  margin-top: 8px;
  display: flex;
  align-items: flex-start;
  padding: 12px 24px;
  background-color: ${(props) => (!props.isread ? "#ddd" : "#fff")};
  border-bottom: 1px solid ${(props) => (!props.isread ? "#fff" : "#ddd")};
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`;

export default Notificationitem;
