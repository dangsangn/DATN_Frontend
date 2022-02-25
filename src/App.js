import { AdminLayout } from "components/Layout/AdminLayout";
import MessageLayout from "components/Layout/MessageLayout";
import UserLayout from "components/Layout/UserLayout";
import Loading from "features/loading/Loading";
import { userActions } from "features/user/userSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    if (accessToken) {
      dispatch(userActions.getProfile());
    }
  }, [dispatch, accessToken]);

  return (
    <>
      <Switch>
        <Route path="/admin" component={AdminLayout} />
        <Route path="/conversation" component={MessageLayout} />
        <Route path="/" component={UserLayout} />
      </Switch>
      <Loading />
    </>
  );
}

export default App;
