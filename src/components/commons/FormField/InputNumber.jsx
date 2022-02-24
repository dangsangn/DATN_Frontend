import React from "react";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { themes } from "themes";
const MInputnumber = ({ value, setValue, max }) => {
  return (
    <Wrapper>
      <Button
        sx={{
          height: "100%",
          padding: "0 !important",
          borderRadius: "0!important",
          minWidth: "36px !important",
        }}
        color="primary"
        variant="outlined"
        onClick={() =>
          setValue((pre) => {
            if (pre - 1 < 1) return 1;
            else return pre - 1;
          })
        }
      >
        <RemoveIcon />
      </Button>
      <InputNumber
        id="outlined-number"
        type="number"
        variant="outlined"
        value={value}
        min="1"
        max={String(max)}
        onChange={(e) =>
          setValue((pre) => {
            if (+e.target.value === 0) return 1;
            if (+e.target.value > max) return max;
            else return +e.target.value;
          })
        }
      />
      <Button
        sx={{
          height: "100%",
          padding: "0 !important",
          borderRadius: "0!important",
          minWidth: "36px !important",
        }}
        color="primary"
        variant="outlined"
        onClick={() =>
          setValue((pre) => {
            if (pre + 1 > max) return max;
            else return pre + 1;
          })
        }
      >
        <AddIcon />
      </Button>
    </Wrapper>
  );
};

const InputNumber = styled.input`
  height: 36px;
  font-size: 16px;
  border: none !important;
  outline: none !important;
  width: 50px;
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${themes.primary};
  border-radius: 4px;
  overflow: hidden;
  height: 36px;
`;
export default MInputnumber;
