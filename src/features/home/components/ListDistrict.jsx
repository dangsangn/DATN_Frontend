import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Itemdistrict from "./ItemDistrict";
import { getTotalRoomOfDistrictApi } from "../api/index";

const Listdistrict = () => {
  const [listDistrict, setListDistrict] = useState([]);
  useEffect(() => {
    const getListRoomOfDistrict = async () => {
      try {
        const res = await getTotalRoomOfDistrictApi();
        setListDistrict(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    return getListRoomOfDistrict();
  }, []);
  return (
    <Wrapper>
      <Grid container spacing={2}>
        {listDistrict.map((item) => (
          <Grid key={item._id} item md={3} sm={6} xs={12}>
            <Itemdistrict name={item._id} total={item.total} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default Listdistrict;
