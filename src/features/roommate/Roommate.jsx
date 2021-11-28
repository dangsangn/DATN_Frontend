import React from "react";
import styled from "styled-components";
import RoommateList from "./components/RoommateList";
import { themes } from "themes";
const Conversation = () => {
  return (
    <Wrapper>
      <Title>Search Roommate</Title>
      <RoommateList />
    </Wrapper>
  );
};

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: ${themes.primary};
  font-family: ${themes.fontFamilySecond};
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;
  margin-top: 30px;
`;
export default Conversation;
