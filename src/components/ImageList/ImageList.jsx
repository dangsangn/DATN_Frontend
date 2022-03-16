import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Imagelist = ({ imageList }) => {
  return (
    <Grid container spacing={2}>
      {imageList.map((item, index) => (
        <Grid key={index} item md={3} sm={6} xs={12}>
          <WrapImage>
            <Image src={item} alt={item} />
          </WrapImage>
        </Grid>
      ))}
    </Grid>
  );
};

const WrapImage = styled.div``;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;
`;
export default Imagelist;
