import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Picker from "emoji-picker-react";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

const Formmessage = ({ messageForm }) => {
  const [message, setMessage] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    messageForm(message);
    setMessage("");
    setOpenEmoji(false);
  };

  const onEmojiClick = (event, emojiObject) => {
    setMessage(message + emojiObject?.emoji);
  };

  const handleOpenEmoji = () => {
    setOpenEmoji(!openEmoji);
  };

  return (
    <div>
      <WrapForm onSubmit={handleSubmit}>
        <WrapEmoji onClick={handleOpenEmoji}>
          <SentimentSatisfiedAltOutlinedIcon
            color="primary"
            fontSize="medium"
          />
        </WrapEmoji>
        <MTextarea
          className="chatMessageInput"
          placeholder="write something..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          wrap="hard"
        ></MTextarea>
        <Button className="chatSubmitButton" type="submit">
          <SendIcon />
        </Button>
        {openEmoji && (
          <WrapPicker>
            <Picker onEmojiClick={onEmojiClick} />
          </WrapPicker>
        )}
      </WrapForm>
    </div>
  );
};

const WrapPicker = styled.div`
  position: absolute;
  left: 0;
  bottom: 150%;
`;
const WrapEmoji = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;
`;
const MTextarea = styled.input`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  flex-grow: 1;
`;
const WrapForm = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
`;
export default Formmessage;
