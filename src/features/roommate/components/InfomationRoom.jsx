import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { themes } from "themes";
import { Grid } from "@mui/material";
const InfomationRoom = () => {
  return (
    <Wrapper>
      <WrapTitle>
        <WrapIcon>
          <HomeIcon fontSize="large" color="primary" />
        </WrapIcon>
        <Title>Thông tin phòng</Title>
      </WrapTitle>
      <WrapContent>
        <Grid container spacing={2}>
          <Grid item>
            <ContentItem>
              <TitleContent>GIÁ PHÒNG</TitleContent>
              <DescriptionContent>1,500,000 đồng</DescriptionContent>
            </ContentItem>
          </Grid>
          <Grid item>
            <ContentItem>
              <TitleContent>DIỆN TÍCH</TitleContent>
              <DescriptionContent>40 mét vuông</DescriptionContent>
            </ContentItem>
          </Grid>
          <Grid item>
            <ContentItem>
              <TitleContent>ĐẶT CỌC</TitleContent>
              <DescriptionContent>1,500,000 đồng</DescriptionContent>
            </ContentItem>
          </Grid>
          <Grid item>
            <ContentItem>
              <TitleContent>SỨC CHỨA</TitleContent>
              <DescriptionContent>4 Nam hoặc Nữ</DescriptionContent>
            </ContentItem>
          </Grid>
        </Grid>
        <ContentItem>
          <TitleContent>TRẠNG THÁI</TitleContent>
          <StyleDescriptionContent>0/4</StyleDescriptionContent>
        </ContentItem>
        <ContentItem>
          <TitleContent>ĐIẠ CHỈ</TitleContent>
          <DescriptionContent>
            335 cầu giấy Cầu giấy, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội
          </DescriptionContent>
        </ContentItem>
      </WrapContent>
    </Wrapper>
  );
};

const WrapContent = styled.div`
  margin-top: 32px;
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
const DescriptionContent = styled.p`
  font-size: 16px !important;
`;
const TitleContent = styled.h4`
  color: #555;
  font-size: 13px;
`;
const StyleDescriptionContent = styled(DescriptionContent)`
  color: ${themes.primary};
  font-weight: bold;
`;
const ContentItem = styled.div`
  margin-right: 50px;
  margin-bottom: 20px;
`;
const Title = styled.h3``;
const WrapTitle = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  background-color: ${themes.backgroundLight};
  padding: 8px;
  border-radius: 24px;
`;
const Wrapper = styled.div`
  background-color: #fff;
  padding: 32px;
`;
export default InfomationRoom;
