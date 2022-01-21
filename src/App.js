import { getUserSuccessApi } from "apis/user";
import UserLayout from "components/Layout/UserLayout";
import Loading from "features/loading/Loading";
import { userActions } from "features/user/userSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("access_token");
  const typeLogin = localStorage.getItem("typeLogin");

  useEffect(() => {
    if (accessToken) {
      dispatch(userActions.getProfile());
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    // const getUser = async () => {
    //   console.log("1");
    //   try {
    //     const response = await getUserSuccessApi();
    //     console.log("response", response);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getUser();
    const getUser = () => {
      fetch("http://localhost:5000/api/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          localStorage.setItem("access_token", resObject?.accessToken);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (typeLogin === "social") {
      getUser();
    }
  }, [accessToken, typeLogin, dispatch]);

  return (
    <>
      <Switch>
        <Route path="/">
          <UserLayout />
          <Loading />
        </Route>
      </Switch>
    </>
  );
}

export default App;
