import ImageBanner from "images/bgHome.jpg";
import styled from "styled-components";
import { themes } from "themes";

const Banner = () => {
  return (
    <Wrapper>
      <Overlay></Overlay>
      <WrapContent>
        <Content>
          <Title>My Home</Title>
          <Description>Ứng dụng tìm kiếm phòng trọ miễn phí</Description>
        </Content>
      </WrapContent>
    </Wrapper>
  );
};

const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px;
`;
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Description = styled.p`
  font-size: 20px;
  margin-bottom: 24px;
`;
const Title = styled.h3`
  font-size: 56px;
  font-weight: bold;
`;
const WrapContent = styled.div`
  color: ${themes.textLight};
  position: absolute;
  width: 100%;
`;
const Wrapper = styled.div`
  background-image: url(${ImageBanner});
  position: relative;
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`;
export default Banner;
