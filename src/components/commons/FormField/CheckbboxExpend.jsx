import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import SecurityIcon from "@mui/icons-material/Security";
import WifiIcon from "@mui/icons-material/Wifi";
import HotTubIcon from "@mui/icons-material/HotTub";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import StairsIcon from "@mui/icons-material/Stairs";
import { color } from "themes";
import { Grid } from "@mui/material";
import { useController } from "react-hook-form";
import { useSelector } from "react-redux";
const options = [
  { label: "WC riêng", icon: <BabyChangingStationIcon />, checked: false },
  { label: "Chổ để xe", icon: <PedalBikeIcon />, checked: false },
  { label: "An ninh", icon: <SecurityIcon />, checked: false },
  { label: "Wifi", icon: <WifiIcon />, checked: false },
  { label: "Nhà bếp", icon: <HotTubIcon />, checked: false },
  { label: "Gác lửng", icon: <StairsIcon />, checked: false },
  { label: "Tự do", icon: <AccessibilityNewIcon />, checked: false },
  { label: "Chổ phơi đồ", icon: <DryCleaningIcon />, checked: false },
];
const Checkbboxexpend = ({ name, control }) => {
  const [listUtilities, setListUtilities] = useState(() => options);
  const roomRenderers = useSelector((state) => state.roomReducers);

  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({ name, control });

  useEffect(() => {
    if (roomRenderers.initialValueForm.utilities?.length > 0) {
      const filter = listUtilities.map((item) => {
        return {
          ...item,
          checked: roomRenderers.initialValueForm.utilities.includes(
            item.label
          ),
        };
      });
      setListUtilities([...filter]);
    }
  }, [roomRenderers.initialValueForm.utilities]);

  const handleChange = (e, value) => {
    let temp = [...listUtilities];
    const index = temp.findIndex((item) => item.label === value.label);
    if (index !== -1) {
      if (e.target.checked) {
        temp[index] = {
          ...temp[index],
          checked: true,
        };
      } else {
        temp[index] = {
          ...temp[index],
          checked: false,
        };
      }
    }
    setListUtilities([...temp]);
    onChange(temp.filter((item) => item.checked).map((item) => item.label));
  };
  return (
    <Wrapper>
      <Title>Tiện ích</Title>
      <Grid container spacing={2}>
        {listUtilities.map((item, index) => (
          <Grid key={index} item md={6}>
            <WrapItem>
              <Input
                name={name}
                onChange={(e) => handleChange(e, item)}
                value={value}
                type="checkbox"
                id={item.label}
                checked={item.checked}
              />
              <Label htmlFor={item.label}>
                <Icon>{item.icon}</Icon>
                <Name>{item.label}</Name>
              </Label>
            </WrapItem>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

const Title = styled.label`
  display: inline-block;
  margin-bottom: 8px;
`;
const Icon = styled.div``;
const Name = styled.p`
  padding-left: 8px;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid ${color.primary.Shades6};
  transition: all 0.4 ease;
`;
const Input = styled.input`
  display: none;
  &:checked ~ label {
    border-color: ${color.primary.newPurple};
    svg {
      path {
        color: ${color.primary.newPurple};
      }
    }
    p {
      color: ${color.primary.newPurple};
    }
  }
`;
const WrapItem = styled.div``;
const Wrapper = styled.div``;
export default Checkbboxexpend;
