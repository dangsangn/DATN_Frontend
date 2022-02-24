import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import styled from "styled-components";
import { themes } from "themes";
import { addMessageApi } from "../apis";
import Formmessage from "./FormMessage";
import Listmessage from "./ListMessage";
export default function Messenger({ handleCloseChatBox, infoConversation }) {
  const { listMessage, selectConversation, members } = useSelector(
    (state) => state.messagesReducers
  );
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const { user } = useSelector((state) => state.userReducers);
  const scrollRef = useRef();
  useEffect(() => {
    setSocket(io("https://socket-io-datn.herokuapp.com/"));
  }, []);

  useEffect(() => {
    socket?.on("getMessage", (data) => {
      // console.log("data", data);
      const newData = {
        sender: data.sender,
        content: data.content,
        createdAt: Date.now(),
      };
      // console.log("newData", newData);
      // console.log("arrivalMessage1", arrivalMessage);
      setArrivalMessage((pre) => {
        // console.log("newData2", newData);
        return newData;
      });
      // console.log("arrivalMessage2", arrivalMessage);
    });
  }, [socket]);
  // console.log("arrivalMessage", arrivalMessage);
  useEffect(() => {
    // console.log("111", members, arrivalMessage);
    arrivalMessage &&
      members.includes(arrivalMessage?.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, members]);

  useEffect(() => {
    socket?.emit("addUser", user?._id);
    socket?.on("getUsers", (users) => {
      // console.log("users", users);
    });
  }, [user, socket]);

  //get list messages from api
  useEffect(() => {
    setMessages(listMessage);
  }, [listMessage]);
  // console.log("members", members);
  //handle post messages api
  const handleMessageForm = async (value) => {
    const receiverId =
      members.length > 0 && members.find((member) => member !== user._id);

    socket?.emit("sendMessage", {
      sender: user?._id,
      receiverId,
      content: value,
    });

    try {
      const res = await addMessageApi(selectConversation, value);
      setMessages([...messages, res?.data?.message]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ChatBox>
      <WrapperTop>
        <Info>
          <Text>
            {infoConversation?.title
              ? infoConversation?.title
              : "Nhắn với chủ phòng"}
          </Text>
        </Info>
        {infoConversation?.isBox && (
          <WrapButton>
            <Button sx={{ minWidth: "auto" }} onClick={handleCloseChatBox}>
              <ClearIcon />
            </Button>
          </WrapButton>
        )}
      </WrapperTop>
      <WrapBody>
        <Listmessage
          messages={messages}
          scrollRef={scrollRef}
          userId={user?._id}
          height={infoConversation?.height}
        />
      </WrapBody>
      <WrapBottom>
        <Formmessage messageForm={handleMessageForm} />
      </WrapBottom>
    </ChatBox>
  );
}

const WrapBottom = styled.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid ${themes.border};
`;
const WrapBody = styled.div`
  margin-top: 12px;
  flex-grow: 1;
`;
const WrapButton = styled.div``;
const Text = styled.h4`
  position: relative;
  margin-left: 16px;
  &::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: ${themes.primary};
    left: -16px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const Info = styled.div``;
const WrapperTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${themes.border};
  padding-bottom: 12px;
`;
const ChatBox = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
