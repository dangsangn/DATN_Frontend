import { Grid } from "@mui/material";
import bgLogin from "images/image5.jpg";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { themes } from "themes";
import FormRegister from "./components/FormRegister";
const Register = () => {
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
              <Title>My home</Title>
              <Description>Tạo một tài khoản.</Description>
            </WrapTitle>
            <FormRegister />
            <WrapHelper>
              <TextFooter>Hoặc bạn đã có tài khoản</TextFooter>
              <MLink to="/login">Đăng nhập</MLink>
            </WrapHelper>
          </WrapLogin>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const TextFooter = styled.p``;
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

const WrapHelper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
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
export default Register;
