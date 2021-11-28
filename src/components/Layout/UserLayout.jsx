import Footer from "components/commons/Footer";
import Header from "components/commons/Header";
import Home from "features/home/Home";
import Login from "features/login/Login";
import Register from "features/register/Register";
import RoomateDetail from "features/roommate/RoomateDetail";
import Roommate from "features/roommate/Roommate";
import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { themes } from "themes";

const UserLayout = () => {
  return (
    <WrapLayout>
      <Header />
      <WrapContent>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/romemate/:id">
            <RoomateDetail />
          </Route>
          <Route path="/romemate">
            <Roommate />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </WrapContent>
      <Footer />
    </WrapLayout>
  );
};

const WrapContent = styled.div`
  flex-grow: 1;
`;
const WrapLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${themes.backgroundLight};
  margin-top: 63px;
`;
export default UserLayout;
