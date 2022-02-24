import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useController } from "react-hook-form";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({ control, name }) {
  const [valuePrice, setValuePrice] = React.useState([0, 15]);
  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({ name, control });
  const handleChange = (event, newValue) => {
    setValuePrice(newValue);
    onChange(newValue);
  };

  return (
    <Box>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={valuePrice}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={15}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#aaa",
          fontSize: "14px",
        }}
      >
        <Box>0 tr</Box>
        <Box>15 tr+</Box>
      </Box>
    </Box>
  );
}
