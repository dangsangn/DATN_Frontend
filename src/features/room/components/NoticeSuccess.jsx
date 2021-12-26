import React from "react";
import styled from "styled-components";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Button } from "@mui/material";
import history from "utils/history";

const Noticesuccess = () => {
  const handleClick = () => {
    history.push("/");
  };
  return (
    <Wrapper>
      <WrapperIcon>
        <CheckCircleOutlineIcon sx={{ fontSize: 80 }} />
      </WrapperIcon>
      <Description>Bạn đã đăng phòng thành công</Description>
      <WrapperButton>
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: "8px" }}
        >
          {/* {
            <CircularProgress
              sx={{ marginRight: "8px" }}
              size={16}
              color="white"
            />
          }
          &nbsp; */}
          Về trang chủ
        </Button>
      </WrapperButton>
    </Wrapper>
  );
};

const WrapperButton = styled.div``;
const Description = styled.h3`
  margin-bottom: 12px;
`;
const WrapperIcon = styled.div`
  margin-bottom: 12px;
  svg {
    path {
      color: green;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export default Noticesuccess;
