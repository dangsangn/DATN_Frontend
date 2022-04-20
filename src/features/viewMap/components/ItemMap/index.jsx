import { Card } from "@mui/material";
import React from "react";
import styled from "styled-components";
const ItemMap = ({ place }) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <Title>{place.name}</Title>
      <WrapImage>
        <Image
          src={
            place.photo
              ? place.photo.images.large.url
              : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
          }
        />
      </WrapImage>
    </Card>
  );
};

const WrapImage = styled.div`
  width: 120px;
  height: 80px;
`;
const Title = styled.h3`
  font-size: 14px;
  padding: 8px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export default ItemMap;
