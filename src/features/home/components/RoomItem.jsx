import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import RoomIcon from "@mui/icons-material/Room";
import ImageTemp from "images/image1.jpg";
import { themes } from "themes";
const RoomItem = ({ verify }) => {
  return (
    <Wrapper className="room-item" verify={verify}>
      <WrapHeader verify={verify}>
        <WrapImage verify={verify}>
          <Image src={ImageTemp}></Image>
        </WrapImage>
        {verify && (
          <WrapPrice>
            <Price>2,5</Price>
            <TextPrice>tr/người</TextPrice>
          </WrapPrice>
        )}
      </WrapHeader>
      <WrapContent verify={verify}>
        <Title>Phòng cho thuê Kim giang, Quận Thanh Xuân</Title>
        <WrapInfo>
          <WrapIcon>
            <HomeIcon />
          </WrapIcon>
          <ContentInfo>Phòng cho thuê</ContentInfo>
        </WrapInfo>
        <WrapBoxHorizontal>
          <WrapInfo>
            <WrapIcon>
              <GroupIcon />
            </WrapIcon>
            <ContentInfo>Nam & Nũ</ContentInfo>
          </WrapInfo>
          <WrapInfo>
            <WrapIcon>
              <ViewCompactIcon />
            </WrapIcon>
            <ContentInfo>25 m2</ContentInfo>
          </WrapInfo>
        </WrapBoxHorizontal>
        <WrapInfo>
          <WrapIcon>
            <RoomIcon />
          </WrapIcon>
          <ContentInfo>
            250 Kim giang, Phường Kim Giang, Quận Thanh Xuân, Hà Nội
          </ContentInfo>
        </WrapInfo>
      </WrapContent>
      {!verify && (
        <WrapPrice>
          <Price>2,5</Price>
          <TextPrice>tr/người</TextPrice>
        </WrapPrice>
      )}
    </Wrapper>
  );
};

const WrapHeader = styled.div`
  ${(props) =>
    props.verify &&
    "display: flex;justify-content: space-between; align-items: center; width: 100%; margin-bottom:16px;"}
`;
const TextPrice = styled.p``;
const Price = styled.p`
  font-size: 60px !important;
  margin-bottom: 16px;
`;
const WrapPrice = styled.div`
  color: ${themes.primary};
  text-align: center;
`;
const WrapBoxHorizontal = styled.div`
  display: flex;
  gap: 16px;
`;
const Image = styled.img``;
const ContentInfo = styled.p``;
const WrapIcon = styled.div`
  margin-right: 8px;
  width: 24px;
  height: 24px;
`;
const WrapInfo = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-bottom: 8px;
`;
const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 12px;
  font-weight: 500;
`;
const WrapContent = styled.div`
  margin: ${(props) => (props.verify ? "0" : "0 32px")};
`;
const WrapImage = styled.div`
  height: ${(props) => (props.verify ? "120px" : "152px")};
  border-radius: 16px;
  overflow: hidden;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.verify ? "column" : "row")};
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  background-color: #fff;
  border-bottom: 1px solid ${themes.border};
  margin-bottom: 16px;
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-8px);
  }
`;
export default RoomItem;
