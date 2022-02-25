import Footer from "components/commons/Footer";
import Header from "components/commons/Header/Header";
import Home from "features/home/Home";
import Login from "features/login/Login";
import Mypost from "features/myPost/MyPost";
import Order from "features/order/Order";
import Register from "features/register/Register";
import AddRoomPage from "features/room/AddRommpage";
import RoomateDetail from "features/roommate/RoomateDetail";
import Userprofile from "features/userProfile/UserProfile";
import ViewAllRoom from "features/viewAllRoom/ViewAllRoom";
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
          <Route path="/room/:id">
            <RoomateDetail />
          </Route>
          <Route path="/post-room">
            <AddRoomPage />
          </Route>
          <Route path="/view-all-room">
            <ViewAllRoom />
          </Route>
          <Route path="/profile">
            <Userprofile />
          </Route>
          <Route path="/my-room">
            <Mypost />
          </Route>
          <Route path="/order">
            <Order />
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
