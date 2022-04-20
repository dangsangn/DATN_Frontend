import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map/Map";
import { viewMapActions } from "./viewMapSlice";
const Viewmap = () => {
  const [type, setType] = useState("hotels");

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);

  const dispatch = useDispatch();
  const { places } = useSelector((state) => state.viewMapReducers);

  useEffect(() => {
    if (bounds) {
      dispatch(
        viewMapActions.getPlaces({
          type,
          sw: bounds?.sw,
          ne: bounds?.ne,
        })
      );
    }
  }, [dispatch, bounds, type]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  const onLoad = (autoC) => {
    console.log(`onLoad`, autoC);
    setAutocomplete(autoC);
  };

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    console.log(lat, lng);
    setCoords({ lat, lng });
  };

  return (
    <Wrapper>
      <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      <Grid container sx={{ height: "calc(100% - 64px)" }}>
        <Grid item xs={12} md={4}>
          <List places={places} childClicked={childClicked} />
        </Grid>
        <Grid item xs={12} md={8} sx={{ height: "100%" }}>
          <Map
            setChildClicked={setChildClicked}
            places={places}
            coords={coords}
            setCoords={setCoords}
            setBounds={setBounds}
          />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0 32px;
  padding-top: 94px;
  height: 100%;
  box-sizing: border-box;
`;
export default Viewmap;
