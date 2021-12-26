import { yupResolver } from "@hookform/resolvers/yup";
import { Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { InputField } from "components/commons/FormField/InputField";
import { PasswordField } from "components/commons/FormField/PasswordField";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { loginActions } from "../loginSlice";
import { useDispatch } from "react-redux";
import * as yup from "yup";
const schema = yup
  .object()
  .shape({
    username: yup.string().required("Please enter username"),
    password: yup.string().required("Please enter password"),
  })
  .required();
const FormLogin = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(loginActions.login(data));
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mt={1}>
          <InputField
            name="username"
            control={control}
            label="Tên đăng nhập"
            placeholder="Tên đăng nhập"
          />
        </Box>
        <Box mt={1}>
          <PasswordField
            name="password"
            control={control}
            label="Mật khẩu"
            placeholder="Mật khẩu"
          />
        </Box>
        <Box mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            fullWidth
            sx={{ padding: "8px" }}
          >
            {isSubmitting && <CircularProgress size={16} color="primary" />}
            &nbsp;Đăng nhập
          </Button>
        </Box>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default FormLogin;
