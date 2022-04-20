import Footer from "components/commons/Footer";
import Header from "components/commons/Header/Header";
import Conversation from "features/messages/Conversation";
import Viewmap from "features/viewMap/ViewMap";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { themes } from "themes";

const MessageLayout = () => {
  return (
    <WrapLayout>
      <Header />
      <WrapContent>
        <Switch>
          <Route path="/conversation/view-map">
            <Viewmap />
          </Route>
          <Route path="/" exact>
            <Conversation />
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
  max-height: calc(100vh);
  height: calc(100vh);
  box-sizing: border-box;
  background-color: ${themes.backgroundLight};
`;
export default MessageLayout;
