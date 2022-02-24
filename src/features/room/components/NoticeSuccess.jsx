import React from "react";
import styled from "styled-components";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Button } from "@mui/material";
import history from "utils/history";
import { useLocation } from "react-router-dom";

const Noticesuccess = () => {
  const location = useLocation();
  const idRoom = location?.state?.idRoom;
  const handleClick = () => {
    if (idRoom) {
      history.push("/my-room");
    } else {
      history.push("/");
    }
  };
  return (
    <Wrapper>
      <WrapperIcon>
        <CheckCircleOutlineIcon sx={{ fontSize: 80 }} />
      </WrapperIcon>
      <Description>
        {idRoom ? "Bạn đã cập nhật" : "Bạn đã đăng"} phòng thành công!
      </Description>
      <WrapperButton>
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: "8px", textTransform: "initial !important" }}
        >
          {idRoom ? "Về bài đăng" : "Về trang chủ"}
        </Button>
      </WrapperButton>
    </Wrapper>
  );
};

const WrapperButton = styled.div``;
const Description = styled.h4`
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
