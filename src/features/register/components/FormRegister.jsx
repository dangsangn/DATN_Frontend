import { yupResolver } from "@hookform/resolvers/yup";
import { Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { InputField } from "components/commons/FormField/InputField";
import { PasswordField } from "components/commons/FormField/PasswordField";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerActions } from "../RegisterSlice";
const schema = yup
  .object()
  .shape({
    username: yup.string().required("Vui lòng nhập username"),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Mật khẩu phải dài hơn 6 ký tự"),
    passwordConfirm: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .min(6, "Mật khẩu phải dài hơn 6 ký tự")
      .oneOf([yup.ref("password")], "Mật khẩu không khớp"),
  })
  .required();
const FormRegister = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [doneForm, setDoneForm] = useState(false);
  const onSubmit = (data) => {
    dispatch(registerActions.register(data));
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const { username, password, passwordConfirm } = value;
      if (username && password && passwordConfirm) {
        setDoneForm(true);
      } else {
        setDoneForm(false);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

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
        <Box mt={1}>
          <PasswordField
            name="passwordConfirm"
            control={control}
            label="Xác nhận mật khẩu"
            placeholder="Xác nhận mật khẩu"
          />
        </Box>
        <Box mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!doneForm}
            fullWidth
            sx={{ padding: "8px" }}
          >
            {isSubmitting && <CircularProgress size={16} color="primary" />}
            &nbsp;Đăng ký
          </Button>
        </Box>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default FormRegister;
