import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { themes } from "themes";
import { Grid } from "@mui/material";
import { moneyFormat } from "utils/moneyFormat";
const InfomationRoom = ({
  priceRoom,
  stretch,
  priceDeposit,
  priceWater,
  priceWifi,
  priceElectric,
  ordered,
  quantityRoom,
  ward,
  district,
  city,
  nameStress,
  numberHome,
  capacity,
}) => {
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
              <DescriptionContent>
                {moneyFormat(priceRoom)} đồng
              </DescriptionContent>
            </ContentItem>
          </Grid>
          <Grid item>
            <ContentItem>
              <TitleContent>DIỆN TÍCH</TitleContent>
              <DescriptionContent>{stretch} mét vuông</DescriptionContent>
            </ContentItem>
          </Grid>
          <Grid item>
            <ContentItem>
              <TitleContent>ĐẶT CỌC</TitleContent>
              <DescriptionContent>
                {moneyFormat(priceDeposit)} đồng
              </DescriptionContent>
            </ContentItem>
          </Grid>
          <Grid item>
            <ContentItem>
              <TitleContent>SỨC CHỨA</TitleContent>
              <DescriptionContent>{capacity} Nam hoặc Nữ</DescriptionContent>
            </ContentItem>
          </Grid>
          <Grid item>
            <ContentItem>
              <TitleContent>ĐIỆN</TitleContent>
              <DescriptionContent>
                {moneyFormat(priceElectric)} đồng
              </DescriptionContent>
            </ContentItem>
          </Grid>
          <Grid item>
            <ContentItem>
              <TitleContent>NƯỚC</TitleContent>
              <DescriptionContent>
                {moneyFormat(priceWater)} đồng
              </DescriptionContent>
            </ContentItem>
          </Grid>
          <Grid item>
            <ContentItem>
              <TitleContent>WIFI</TitleContent>
              <DescriptionContent>
                {moneyFormat(priceWifi)} đồng
              </DescriptionContent>
            </ContentItem>
          </Grid>
        </Grid>
        <ContentItem>
          <TitleContent>TRẠNG THÁI</TitleContent>
          <StyleDescriptionContent>
            {ordered}/{quantityRoom}
          </StyleDescriptionContent>
        </ContentItem>
        <ContentItem>
          <TitleContent>ĐIẠ CHỈ</TitleContent>
          <DescriptionContent>
            {numberHome +
              " " +
              nameStress +
              ", " +
              (ward ? ward?.label + ", " : "") +
              (district ? district?.label + ", " : "") +
              (city ? city?.label : "")}
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
  padding: 8px 24px 8px 8px;
  border-radius: 24px;
`;
const Wrapper = styled.div`
  background-color: #fff;
  padding: 32px;
`;
export default InfomationRoom;
