import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import FormLogin from "./components/FormLogin";
import bgLogin from "images/image5.jpg";
import { themes } from "themes";

import { Link } from "react-router-dom";
import Logingoogle from "./components/LoginGoogle";
const Login = () => {
  return (
    <Wrapper>
      <Grid container>
        <Grid item md={7} sm={5} xs={12}>
          <WrapImage>
            <img src={bgLogin} alt="" />
          </WrapImage>
        </Grid>
        <Grid item md={5} sm={7} xs={12}>
          <WrapLogin>
            <WrapTitle>
              <Title>Wecome Back!</Title>
              <Description>Đăng nhập vào My Home</Description>
            </WrapTitle>
            <FormLogin />
            <Separate>
              <Text>Hoặc</Text>
              <Line />
            </Separate>
            <WrapMedia>
              <Grid container>
                <Grid item md={12} xs={12}>
                  <Logingoogle />
                </Grid>
              </Grid>
            </WrapMedia>
            <WrapHelper>
              <Content>Bạn chưa có tài khoản?</Content>
              <MLink to="/register">Đăng ký</MLink>
            </WrapHelper>
          </WrapLogin>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const WrapTitle = styled.div`
  text-align: center;
`;
const Description = styled.p``;
const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
`;
const MLink = styled(Link)`
  color: ${themes.link};
`;
const Content = styled.p`
  margin-right: 8px;
`;
const WrapHelper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

const WrapMedia = styled.div``;
const Line = styled.div`
  height: 0.5px;
  background-color: ${themes.border};
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1;
`;
const Text = styled.span`
  position: relative;
  z-index: 2;
  background-color: #fff;
  line-height: 30px;
  text-align: center;
  padding: 0 4px;
`;
const Separate = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
`;
const WrapImage = styled.div`
  height: 100%;
  width: 100%;
`;
const WrapLogin = styled.div`
  padding: 32px;
  max-width: 400px;
  margin: auto;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  background-color: #fff;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export default Login;
