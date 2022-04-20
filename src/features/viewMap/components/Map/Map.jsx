import React from "react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useMediaQuery } from "@mui/material";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import ItemMap from "../ItemMap";
import mapStyles from "./mapStyles";
import { useJsApiLoader } from "@react-google-maps/api";

const Map = ({ places, coords, setCoords, setBounds, setChildClicked }) => {
  const matches = useMediaQuery("(min-width:600px)");
  const zoom = 14;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_KEY_API_GG,
  });

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_KEY_API_GG }}
        defaultCenter={coords}
        defaultZoom={zoom}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        margin={[50, 50, 50, 50]}
        center={coords}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.map((place, i) => (
          <MarkContainer
            key={i}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            {!matches ? (
              <FmdGoodIcon color="primary" fontSize="large" />
            ) : (
              <ItemMap place={place} />
            )}
          </MarkContainer>
        ))}
      </GoogleMapReact>
    </div>
  );
};

const MarkContainer = styled.div`
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  &:hover {
    z-index: 100;
  }
`;
export default Map;
