import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import styled from "styled-components";
import { themes } from "themes";
import moment from "moment";
const InfomationHost = ({ createdAt }) => {
  return (
    <Wrapper>
      <WrapTitle>
        <WrapIcon>
          <PersonIcon fontSize="large" color="secondary" />
        </WrapIcon>
        <Title>Thông tin chủ phòng</Title>
      </WrapTitle>
      <WrapContent>
        <ContentItem>
          <TitleContent>Henry Nguyễn</TitleContent>
          <StyleDescriptionContent>SDT: 0383291623</StyleDescriptionContent>
        </ContentItem>
        <ContentItem>
          <TitleContent>Ngày đăng: </TitleContent>
          <DescriptionContent>
            {moment(createdAt).format("DD-MM-YYYY")}
          </DescriptionContent>
        </ContentItem>
      </WrapContent>
    </Wrapper>
  );
};

const WrapContent = styled.div`
  margin-top: 32px;
  display: flex;
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
  font-weight: bold;
`;
const TitleContent = styled.h4`
  color: #555;
  font-size: 14px;
`;
const StyleDescriptionContent = styled(DescriptionContent)`
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
export default InfomationHost;
