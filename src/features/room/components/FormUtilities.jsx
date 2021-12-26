import { Button } from "@mui/material";
import Checkbboxexpend from "components/commons/FormField/CheckbboxExpend";
import Uploadfile from "components/commons/FormField/UploadFile";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { color } from "themes";
import { roomActions } from "../roomSlice";

const FormUtilities = ({ control, watch }) => {
  const dispatch = useDispatch();
  const [listUtilities, setListUtilities] = useState([]);

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const { images, utilities } = value;
      setListUtilities(utilities);
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
      <Checkbboxexpend name="utilities" control={control} />
      <WrapButton>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          // disabled={isSubmitting}
          onClick={handleSaveDataForm}
          fullWidth
          sx={{ padding: "8px" }}
        >
          {/* {
            <CircularProgress
              sx={{ marginRight: "8px" }}
              size={16}
              color="white"
            />
          }
          &nbsp; */}
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
