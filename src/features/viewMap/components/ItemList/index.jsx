import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";

const ItemList = ({ place, isSelected, refProp }) => {
  useEffect(() => {
    if (isSelected) {
      refProp?.current &&
        refProp?.current.scrollIntoView({
          behavior: "smooth",
          blockk: "start",
        });
    }
  }, [isSelected, refProp]);

  return (
    <Card ref={refProp}>
      <CardHeader title={place.name} />
      <CardMedia
        component="img"
        height="194"
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        alt="Paella dish"
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography component="legend">
            {place.num_reviews} review{place.num_reviews > 1 && "s"}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price: </Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Address: </Typography>
          <Typography gutterBottom variant="subtitle2">
            {place.location_string}
          </Typography>
        </Box>

        {place.phone && (
          <Typography variant="body2" color="textSecondary">
            <PhoneAndroidIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {place?.web_url && (
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
        )}
        {place?.website && (
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ItemList;
