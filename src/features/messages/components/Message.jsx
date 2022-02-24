import { Avatar } from "@mui/material";
import moment from "moment";
import React from "react";
import styled from "styled-components";
import { themes } from "themes";

const Message = ({ owner, item }) => {
  return (
    <Wrapper owner={owner}>
      {!owner && (
        <WrapAvatar>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
          />
        </WrapAvatar>
      )}
      <WrapMessage>
        <Text owner={owner}>{item?.content}</Text>
        <Date owner={owner}>{moment(item?.createdAt).fromNow()}</Date>
      </WrapMessage>
    </Wrapper>
  );
};

const WrapAvatar = styled.div`
  margin-right: 12px;
`;
const Date = styled.span`
  font-size: 12px;
  position: absolute;
  bottom: -20px;
  ${(props) => (props.owner ? "right: 0;" : "left: 0;")};
  min-width: max-content;
`;
const Text = styled.span`
  display: block;
  padding: 8px;
  font-size: 14px;
  color: #fff;
  background-color: ${(props) => (props.owner ? themes.primary : "#555")};
  border-radius: 12px;
`;
const WrapMessage = styled.div`
  position: relative;
  max-width: 80%;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: ${(props) => (props.owner ? "flex-end" : "flex-start")};
  margin-bottom: 24px;
`;
export default Message;
