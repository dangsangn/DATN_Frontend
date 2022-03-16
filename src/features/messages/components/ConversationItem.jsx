import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserDetailApi } from "features/user/api";
import { useDispatch } from "react-redux";
import { messageActions } from "./../MessageSlice";

const Conversationitem = ({
  id,
  idUser,
  setActiveCov,
  activeCov,
  setInfoConversation,
}) => {
  const [detailUser, setDetailUser] = useState({
    username: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const getUserDetail = async () => {
      try {
        const res = await getUserDetailApi(id);
        setDetailUser(res.data);
      } catch (error) {
        // console.log(error);
      }
    };

    getUserDetail();
  }, [id]);

  const handleOpenConversation = () => {
    dispatch(
      messageActions.getConversation({
        idUser: idUser,
        idReceiver: id,
      })
    );
    setActiveCov(id);
    setInfoConversation((pre) => ({ ...pre, title: detailUser?.username }));
  };

  return (
    <>
      {detailUser?.username ? (
        <ConversationItem
          active={activeCov === id}
          onClick={handleOpenConversation}
        >
          <Avatar>
            {detailUser?.username[0] && (detailUser?.username[0]).toUpperCase()}
          </Avatar>
          <Name className="text-clamp text-clamp--1">
            {detailUser?.username}
          </Name>
        </ConversationItem>
      ) : null}
    </>
  );
};

const Name = styled.span`
  margin-left: 12px;
  display: block;
`;
const ConversationItem = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 8px;
  cursor: pointer;
  margin-bottom: 16px;
  background-color: ${(props) =>
    props.active === true ? "#aaa !important" : ""};
  color: ${(props) => (props.active === true ? "#fff !important" : "")};
  font-weight: ${(props) => (props.active === true ? "bold !important" : "")};
  overflow: hidden;
  &:hover {
    background-color: #aaa;
    color: #fff;
    font-weight: bold;
  }
`;
export default Conversationitem;
