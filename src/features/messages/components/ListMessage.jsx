import React from "react";
import styled from "styled-components";
import Message from "./Message";
const Listmessage = ({ scrollRef, messages, userId, height }) => {
  // console.log(messages, userId);
  return (
    <Wrapper height={height}>
      {messages.map((item, index) => (
        <div key={index} ref={scrollRef}>
          <Message owner={item.sender === userId} item={item} />
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: ${(props) => props.height + "px"};
  padding-right: 8px;
  overflow-y: auto;
`;
export default Listmessage;
