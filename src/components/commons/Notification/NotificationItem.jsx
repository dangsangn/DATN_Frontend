import { Avatar } from "@mui/material";
import { typeNotifications } from "data/typeNotification";
import { setReadedNotificationApi } from "features/notification/api";
import { notificationActions } from "features/notification/notificationSlice";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { themes } from "themes";
import history from "utils/history";
import ClearIcon from "@mui/icons-material/Clear";

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

  const handleDeleteNoti = (e) => {
    e.stopPropagation();
    dispatch(notificationActions.deleteNotification(_id));
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
      <WrapDelete className="wrap-delete" onClick={handleDeleteNoti}>
        <ClearIcon />
      </WrapDelete>
    </Wrapper>
  );
};

const WrapDelete = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: none;
`;
const Time = styled.div`
  font-size: 13px;
`;
const Content = styled.div``;
const WrapContent = styled.div`
  margin-left: 12px;
`;
const Wrapper = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 12px 24px;
  cursor: pointer;
  position: relative;
  border-bottom: 1px solid #ccc;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    background-color: #ddd;
    color: #333;
  }
  &:hover .wrap-delete {
    display: block;
  }
  &::before {
    content: "";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${(props) =>
      props.isread ? "transparent" : themes.primary};
  }
`;

export default Notificationitem;
