import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import RoomIcon from "@mui/icons-material/Room";
import ImageTemp from "images/image1.jpg";
import { themes } from "themes";

const showGender = (number = 3) => {
  let result;
  switch (number) {
    case 1:
      result = "Nam";
      break;
    case 2:
      result = "Nữ";
      break;

    default:
      result = "Nam và Nũ";
      break;
  }
  return result;
};

const showTypeRoom = (number = 1) => {
  let result;
  switch (number) {
    case 1:
      result = "Phòng cho thuê";
      break;
    case 2:
      result = "Ký túc xá";
      break;
    case 3:
      result = "Phòng ở ghép";
      break;
    case 4:
      result = "Phòng nguyên căn";
      break;
    default:
      result = "Căn hộ";
      break;
  }
  return result;
};

const showAddress = (address, ward, district, city) => {
  return (
    address +
    (ward ? ward : "") +
    (district ? district : "") +
    (city ? city : "")
  );
};

const RoomItem = (props) => {
  const { data, vertical } = props;
  // console.log(data);
  const {
    idUser,
    name,
    type,
    gender,
    address,
    priceRom,
    area,
    ward,
    district,
    city,
    capacity,
    priceElectric,
    priceWater,
    priceWifi,
    status,
    images,
    numberRoom,
    description,
  } = data;
  return (
    <Wrapper className="room-item" vertical={vertical}>
      <WrapSub vertical={vertical}>
        <WrapHeader vertical={vertical}>
          <WrapImage vertical={vertical}>
            <Image src={ImageTemp}></Image>
          </WrapImage>
          {vertical && (
            <WrapPrice>
              <Price>2,5</Price>
              <TextPrice>tr/người</TextPrice>
            </WrapPrice>
          )}
        </WrapHeader>
        <WrapContent vertical={vertical}>
          <Title>
            {showTypeRoom(type) +
              " " +
              showAddress(address, ward, district, city)}
          </Title>
          <WrapInfo>
            <WrapIcon>
              <HomeIcon />
            </WrapIcon>
            <ContentInfo>{showTypeRoom(type)}</ContentInfo>
          </WrapInfo>
          <WrapBoxHorizontal>
            <WrapInfo>
              <WrapIcon>
                <GroupIcon />
              </WrapIcon>
              <ContentInfo>{showGender(gender)}</ContentInfo>
            </WrapInfo>
            <WrapInfo>
              <WrapIcon>
                <ViewCompactIcon />
              </WrapIcon>
              <ContentInfo>{area} m2</ContentInfo>
            </WrapInfo>
          </WrapBoxHorizontal>
          <WrapInfo>
            <WrapIcon>
              <RoomIcon />
            </WrapIcon>
            <ContentInfo>
              {showAddress(address, ward, district, city)}
            </ContentInfo>
          </WrapInfo>
        </WrapContent>
      </WrapSub>
      {!vertical && (
        <WrapPrice>
          <Price>2,5</Price>
          <TextPrice>tr/người</TextPrice>
        </WrapPrice>
      )}
    </Wrapper>
  );
};

const WrapSub = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
`;
const WrapHeader = styled.div`
  ${(props) =>
    props.vertical &&
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
  margin: ${(props) => (props.vertical ? "0" : "0 32px")};
  width: 100%;
`;
const WrapImage = styled.div`
  height: ${(props) => (props.vertical ? "120px" : "152px")};
  border-radius: 16px;
  overflow: hidden;
  width: 216px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
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
