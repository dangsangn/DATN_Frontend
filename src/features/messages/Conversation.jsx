import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Listconversation from "./components/ListConversation";
import Messenger from "./components/Messenger";
import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "./MessageSlice";
import NoMessage from "images/no-message.png";
const Conversation = () => {
  const dispatch = useDispatch();
  const { selectConversation } = useSelector((state) => state.messagesReducers);
  const [infoConversation, setInfoConversation] = useState({
    title: "", //name user chat
    isBox: false, //in detail room, it is a box
    height: 272,
  });
  useEffect(() => {
    dispatch(messageActions.getListConversation());
  }, [dispatch]);

  return (
    <Wrapper>
      <Grid sx={{ height: "100%" }} container spacing={2}>
        <Grid item md={4}>
          <WrapListConversation>
            <Title>Cuộc hội thoại</Title>
            <Listconversation setInfoConversation={setInfoConversation} />
          </WrapListConversation>
        </Grid>
        <Grid sx={{ height: "100%" }} item md={8}>
          <WrapMessageDetail>
            {selectConversation ? (
              <Messenger infoConversation={infoConversation} />
            ) : (
              <BoxEmpty>
                <WrapImage>
                  <Image src={NoMessage} />
                </WrapImage>
              </BoxEmpty>
            )}
          </WrapMessageDetail>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
const WrapImage = styled.div``;
const BoxEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
`;
const WrapMessageDetail = styled.div`
  height: 100%;
`;
const WrapListConversation = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 16px;
`;
const Title = styled.h3`
  padding-bottom: 12px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 24px;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 100px 32px 50px;
  height: calc(100vh - 51px);
  box-sizing: border-box;
`;
export default Conversation;
