import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Checkbboxexpend from "components/commons/FormField/CheckbboxExpend";
import Textarea from "components/commons/FormField/TextArea";
import Uploadfile from "components/commons/UploadFile/UploadFile";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { color } from "themes";
import { roomActions } from "../roomSlice";

const FormUtilities = ({ control, watch }) => {
  const dispatch = useDispatch();
  const [listUtilities, setListUtilities] = useState([]);
  const [doneForm, setDoneForm] = useState(false);
  const { initialValueForm } = useSelector((state) => state.roomReducers);
  React.useEffect(() => {
    if (initialValueForm.description) {
      setDoneForm(true);
    }
  }, [initialValueForm.description]);

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const { images, utilities, description } = value;
      if (images?.length > 0 && utilities?.length > 0 && description) {
        setListUtilities(utilities);
        setDoneForm(true);
      } else {
        setDoneForm(false);
      }
    });
    return () => subscription.unsubscribe();
  }, [dispatch, watch]);

  const handleSaveDataForm = () => {
    dispatch(roomActions.inforFormTemporary({ utilities: listUtilities }));
  };

  return (
    <Wrapper>
      <Label>Thông tin hình ảnh và tiện ích</Label>
      <Uploadfile name="images" control={control} />
      <Checkbboxexpend
        name="utilities"
        control={control}
        md={6}
        label="Tiện ích"
      />
      <Box mt={2}>
        <Textarea
          name="description"
          control={control}
          placeholder="description..."
          label="Description"
        />
      </Box>
      <WrapButton>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          disabled={!doneForm}
          onClick={handleSaveDataForm}
          type="submit"
          sx={{
            padding: "8px",
            backgroundColor: !doneForm
              ? "#888 !important"
              : color.primary.newPurple,
            color: "white !important",
          }}
        >
          Xác nhận
        </Button>
      </WrapButton>
    </Wrapper>
  );
};

const WrapButton = styled.div`
  margin-top: 24px;
`;
const Label = styled.h4`
  margin-bottom: 12px;
`;
const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid ${color.primary.Shades6};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: ${color.primary.white};
  margin-bottom: 50px;
`;
export default FormUtilities;
