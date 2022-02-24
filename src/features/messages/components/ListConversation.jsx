import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Conversationitem from "./ConversationItem";

const Listconversation = ({ setInfoConversation }) => {
  const { listConversation } = useSelector((state) => state.messagesReducers);
  const { user } = useSelector((state) => state.userReducers);
  const [convertListConversation, setConvertListConversation] = useState([]);
  const [activeCov, setActiveCov] = useState(null);
  useEffect(() => {
    setConvertListConversation(
      listConversation.map((item) => {
        if (user._id) {
          return item.members.find((item) => item !== user._id);
        } else {
          return null;
        }
      })
    );
  }, [user, listConversation]);
  return (
    <Wrapper>
      {convertListConversation.map((item, index) => (
        <Conversationitem
          key={index}
          id={item}
          idUser={user?._id}
          setActiveCov={setActiveCov}
          activeCov={activeCov}
          setInfoConversation={setInfoConversation}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default Listconversation;
