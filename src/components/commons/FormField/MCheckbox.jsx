import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useController } from "react-hook-form";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { color } from "themes";
const options = [
  {
    label: "Ký túc xá",
    value: 1,
  },
  {
    label: "Phòng cho thuê",
    value: 2,
  },
  {
    label: "Nhà nguyên căn",
    value: 3,
  },
  {
    label: "Ký túc xá",
    value: 4,
  },
  {
    label: "Căn hộ",
    value: 5,
  },
];
const MCheckbox = ({ name, control, title, ...responsive }) => {
  const [listUtilities, setListUtilities] = useState(() => options);
  const roomRenderers = useSelector((state) => state.roomReducers);
  const {
    field: { onChange, value },
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
  }, [roomRenderers.initialValueForm.utilities, listUtilities]);

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
    onChange(temp.filter((item) => item.checked).map((item) => item.value));
  };
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <Grid container spacing={2}>
        {listUtilities.map((item, index) => (
          <Grid key={index} item {...responsive}>
            <WrapItem>
              <FormControlLabel
                control={
                  <Checkbox
                    name={name}
                    onChange={(e) => handleChange(e, item)}
                    value={value}
                    type="checkbox"
                    id={item.label}
                    checked={item.checked}
                  />
                }
                label={item?.label}
              />
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
const WrapItem = styled.div``;
const Wrapper = styled.div``;
export default MCheckbox;
