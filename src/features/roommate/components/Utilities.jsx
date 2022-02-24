import React from "react";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import SecurityIcon from "@mui/icons-material/Security";
import WifiIcon from "@mui/icons-material/Wifi";
import HotTubIcon from "@mui/icons-material/HotTub";
import StairsIcon from "@mui/icons-material/Stairs";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import styled from "styled-components";
import { themes } from "themes";
import GrainIcon from "@mui/icons-material/Grain";
const options = [
  { label: "WC riêng", icon: <BabyChangingStationIcon /> },
  { label: "Chổ để xe", icon: <PedalBikeIcon /> },
  { label: "An ninh", icon: <SecurityIcon /> },
  { label: "Wifi", icon: <WifiIcon /> },
  { label: "Nhà bếp", icon: <HotTubIcon /> },
  { label: "Gác lửng", icon: <StairsIcon /> },
  { label: "Tự do", icon: <AccessibilityNewIcon /> },
  { label: "Chổ phơi đồ", icon: <DryCleaningIcon /> },
];

const Utilities = ({ utilities }) => {
  const filterData = options.filter((item) =>
    (utilities || []).includes(item?.label)
  );
  return (
    <Wrapper>
      <WrapTitle>
        <WrapIcon>
          <GrainIcon fontSize="large" color="secondary" />
        </WrapIcon>
        <Title>Tiện ích</Title>
      </WrapTitle>
      <WrapContent>
        {filterData.map((item, index) => (
          <Item key={index}>
            <Icon>{item.icon}</Icon>
            <Text>{item.label}</Text>
          </Item>
        ))}
      </WrapContent>
    </Wrapper>
  );
};

const Text = styled.span`
  color: #555;
`;
const Icon = styled.span`
  margin-right: 12px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0 24px 12px 0;
`;
const WrapContent = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
`;
const WrapIcon = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

const Title = styled.h3``;
const WrapTitle = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  background-color: ${themes.backgroundLight};
  padding: 8px 24px 8px 8px;
  border-radius: 24px;
`;
const Wrapper = styled.div`
  background-color: #fff;
  padding: 32px;
`;
export default Utilities;
