import { checkEmailApi, register } from "apis/auth";
import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { themes } from "themes";
import { loginActions } from "../loginSlice";
import GoogleIcon from "@mui/icons-material/Google";

const Logingoogle = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const responseGoogle = async (response) => {
    console.log("response", response);
    setData({
      username: response?.profileObj?.name,
      email: response?.profileObj?.email,
      password: response?.googleId,
    });
  };

  console.log("data", data);
  React.useEffect(() => {
    if (data.email) {
      const checkExistEmail = async () => {
        const res = await checkEmailApi(data.email);
        if (res.data) {
          dispatch(
            loginActions.login({
              username: data.email,
              password: data.password,
            })
          );
        } else {
          const res = await register({
            username: data.email,
            password: data.password,
            passwordConfirm: data.password,
            email: data.email,
          });
          if (res.status === 202) {
            dispatch(
              loginActions.login({
                username: data.email,
                password: data.password,
              })
            );
          }
        }
      };
      return checkExistEmail();
    }
  }, [dispatch, data]);

  return (
    <div>
      <GoogleLogin
        clientId="242801633846-50fdse8v25itk5l8euopglu77pl5tsob.apps.googleusercontent.com"
        render={(renderProps) => (
          <MediaContent
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <GoogleIcon />
            <MediaText>Google</MediaText>
          </MediaContent>
          // <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
          //   This is my custom Google button
          // </button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        // isSignedIn={true}
      />
    </div>
  );
};

const MediaText = styled.p`
  margin-left: 8px;
`;
const MediaContent = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  cursor: pointer;
  border: 1px solid ${themes.border};
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export default Logingoogle;
