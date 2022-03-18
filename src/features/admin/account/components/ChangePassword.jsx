import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { InputField } from "components/commons/FormField/InputField";
import { userActions } from "features/user/userSlice";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as yup from "yup";
const schema = yup.object().shape({
  password: yup.string().required("Please enter password"),
  passwordConfirm: yup
    .string()
    .required("Please enter password confirm")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducers);
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSubmitForm = (data) => {
    dispatch(userActions.updatePassword({ id: user?._id, ...data }));
  };
  return (
    <WrapChangeInfo>
      <WrapChangeInfoTitle>
        <TitleInfo>Mật khẩu</TitleInfo>
        <Description>Cập nhật mật khẩu</Description>
      </WrapChangeInfoTitle>
      <WrapForm>
        <Wrapper>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <InputField
                  name="password"
                  control={control}
                  placeholder="Password"
                  label="Mật khẩu cũ"
                  type="password"
                />
              </Grid>
              <Grid item md={12}>
                <InputField
                  name="passwordConfirm"
                  control={control}
                  placeholder="Password confirm"
                  label="Xác nhận mật khẩu"
                  type="password"
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                marginTop: "24px",
                display: "flex",
                flexDirection: "row-reverse",
                paddingTop: "24px",
                borderTop: "1px solid #ddd",
              }}
            >
              <Button type="submit" variant="contained">
                Cập nhật
              </Button>
            </Box>
          </form>
        </Wrapper>
      </WrapForm>
    </WrapChangeInfo>
  );
};

const Wrapper = styled.div`
  margin-top: 24px;
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
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 24px;
`;
export default ChangePassword;
