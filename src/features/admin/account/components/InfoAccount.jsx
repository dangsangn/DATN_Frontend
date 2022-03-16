import { Avatar, Box, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Forminfo from "./FormInfo";
import { format } from "date-fns";

const Infoaccount = () => {
  const { user } = useSelector((state) => state.userReducers);
  return (
    <Wrapper>
      <Title>Account</Title>
      <Box>
        <Container>
          <WrapInfo>
            <Avatar
              alt="Remy Sharp"
              src={""}
              sx={{ width: 64, height: 64, marginBottom: "16px" }}
            />
            <Username>{user?.username}</Username>
            <Email>{user?.email}</Email>
            <Create>
              Creaate at:{" "}
              {user?.createdAt &&
                format(new Date(user?.createdAt), "dd/MM/yyyy")}
            </Create>
            <Role>
              Role: <strong>{user?.isAdmin ? "Admin" : "User"}</strong>
            </Role>
          </WrapInfo>
          <WrapChangeInfo>
            <WrapChangeInfoTitle>
              <TitleInfo>Profile</TitleInfo>
              <Description>The information can be edited</Description>
            </WrapChangeInfoTitle>
            <WrapForm>
              {Object.keys(user).length > 0 && <Forminfo data={user} />}
            </WrapForm>
          </WrapChangeInfo>
        </Container>
      </Box>
    </Wrapper>
  );
};

const Container = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 32px;
`;
const WrapForm = styled.div``;
const Description = styled.p`
  color: #555;
  font-size: 14px;
`;
const TitleInfo = styled.h4`
  font-size: 20px;
  font-weight: 600;
`;
const WrapChangeInfoTitle = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid #ddd;
`;
const WrapChangeInfo = styled.div`
  background-color: #fff;
  padding: 24px;
`;
const Role = styled.p``;
const Email = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 16px;
`;
const Create = styled(Email)`
  margin-top: 8px;
`;
const Username = styled.h5`
  font-size: 24px;
  font-weight: 600;
`;
const WrapInfo = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  width: 40%;
  border-right: 1px solid #ddd;
`;
const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  height: 100%;
  margin-bottom: 24px;
`;
const Wrapper = styled.div``;
export default Infoaccount;
