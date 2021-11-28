import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import RoommateItem from "./RoommateItem";

const RoommateList = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <RoommateItem />
      </Grid>
      <Grid item xs={6} md={4}>
        <RoommateItem />
      </Grid>
      <Grid item xs={6} md={4}>
        <RoommateItem />
      </Grid>
    </Grid>
  );
};

export default RoommateList;
