import UserLayout from "components/Layout/UserLayout";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/api/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  console.log(user);
  return (
    <>
      <Switch>
        <Route path="/">
          <UserLayout />
        </Route>
      </Switch>
    </>
  );
}

export default App;
