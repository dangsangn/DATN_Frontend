import { Button, Grid, Switch } from "@mui/material";
import { Box } from "@mui/system";
import { InputField } from "components/commons/FormField/InputField";
import { userActions } from "features/user/userSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
const label = { inputProps: { "aria-label": "Switch demo" } };
const Forminfo = ({ data }) => {
  const [role, setRole] = useState(data?.isAdmin);
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    defaultValues: {
      username: data?.username,
      email: data?.email,
      fullName: data?.fullName,
      phoneNumber: data?.phoneNumber,
    },
  });

  const handleSubmitForm = (value) => {
    dispatch(
      userActions.updateProfile({ id: data._id, ...value, isAdmin: role })
    );
  };
  const handleChangeRole = (event) => {
    setRole(event.target.checked);
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <InputField
              name="username"
              control={control}
              placeholder="Username"
              label="Username"
              disabled={true}
            />
          </Grid>
          <Grid item md={6}>
            <InputField
              name="email"
              control={control}
              placeholder="Email"
              label="Email"
            />
          </Grid>
          <Grid item md={6}>
            <InputField
              name="fullName"
              control={control}
              placeholder="Full name"
              label="Họ tên"
            />
          </Grid>
          <Grid item md={6}>
            {role ? (
              <>
                <Label>Vai trò admin:</Label>
                <Switch
                  {...label}
                  onChange={handleChangeRole}
                  defaultChecked={role ? true : false}
                />
              </>
            ) : (
              <InputField
                name="phoneNumber"
                control={control}
                placeholder="Phone number"
                label="Số điện thoại"
              />
            )}
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
            Lưu chi tiết
          </Button>
        </Box>
      </form>
    </Wrapper>
  );
};

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 12px;
`;
const Wrapper = styled.div`
  margin-top: 24px;
`;
export default Forminfo;
