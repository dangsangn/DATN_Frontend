import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { themes } from "themes";

const RoommateItem = () => {
  return (
    <Wrapper>
      <Container>
        <WrapImage className="wrapImage">
          <img
            src="https://i.pinimg.com/736x/cc/11/a1/cc11a1763ad40d6cf694881136b6d0bf.jpg"
            alt="imageRoommate"
          />
          <WrapButton className="wrapButton">
            <Button to="/romemate/abc">Detail</Button>
          </WrapButton>
          <OverLay className="overlay"></OverLay>
        </WrapImage>
        <WrapContent>
          <Name>Diem Loan Nguyen</Name>
          <TitleSub>Price range</TitleSub>
          <Price>500,000 VND</Price>
          <TitleSub>Searching location</TitleSub>
          <Location>Da Nang</Location>
        </WrapContent>
      </Container>
    </Wrapper>
  );
};

const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: transparent;
  transition: all 0.4s ease-in-out;
  z-index: 2;
`;
const Button = styled(Link)`
  color: ${themes.textLight};
`;
const WrapButton = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${themes.primary};
  bottom: -50px;
  padding: 4px 16px;
  border-radius: 8px;
  z-index: 3;
  transition: all 0.4s ease-in-out;
`;
const Location = styled.p`
  font-size: 14px;
`;
const Price = styled.p`
  font-size: 14px;
`;
const TitleSub = styled.h4`
  font-size: 12px;
  font-weight: 600;
  margin-top: 16px;
`;
const Name = styled.h3`
  font-weight: bold;
`;
const WrapContent = styled.div`
  padding: 24px 16px;
  flex-grow: 1;
`;
const WrapImage = styled.div`
  width: 40%;
  height: 180px;
  border-radius: 8px;
  background-color: red;
  overflow: hidden;
  position: relative;
`;
const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
  padding: 12px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #fff;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    .overlay {
      background-color: rgba(0, 0, 0, 0.4);
    }
    .wrapButton {
      bottom: 20px;
    }
  }
`;
export default RoommateItem;
