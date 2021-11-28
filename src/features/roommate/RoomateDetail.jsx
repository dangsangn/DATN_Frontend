import React from "react";
import GroupImage from "./components/GroupImage";
import styled from "styled-components";
import { Grid } from "@mui/material";
import InfomationRoom from "./components/InfomationRoom";
import InfomationHost from "./components/InfomationHost";
const RoomateDetail = () => {
  return (
    <Wrapper>
      <WrapContent>
        <GroupImage />
        <Title>Kí túc xá Cao Cấp - Văn Minh 335 Cầu giấy, Quận Cầu Giấy</Title>
        <WrapCard>
          <Grid container columnSpacing={3}>
            <Grid item md={8}>
              <WrapInfomationRoom>
                <InfomationRoom />
              </WrapInfomationRoom>
            </Grid>
            <Grid item md={4}>
              <WrapInfomationHost>
                <InfomationHost />
              </WrapInfomationHost>
            </Grid>
          </Grid>
        </WrapCard>
      </WrapContent>
    </Wrapper>
  );
};

const WrapInfomationHost = styled.div`
  border-radius: 32px;
  overflow: hidden;
`;
const WrapInfomationRoom = styled.div`
  border-radius: 32px;
  overflow: hidden;
`;
const WrapCard = styled.div`
  margin-top: 32px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  margin-top: 20px;
`;
const WrapContent = styled.div``;
const Wrapper = styled.div`
  max-width: 1300px;
  margin: auto;
`;
export default RoomateDetail;
