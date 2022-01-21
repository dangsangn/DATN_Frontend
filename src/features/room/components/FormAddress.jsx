import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { AutocompleteField } from "components/commons/FormField/AutocompleteFiled";
import { InputField } from "components/commons/FormField/InputField";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { color } from "themes";
import { roomActions } from "../roomSlice";

function FormAddress({
  handleCompleteSuccess,
  control,
  cities,
  districts,
  wards,
  watch,
}) {
  const [doneForm, setDoneForm] = useState(false);
  const dispatch = useDispatch();
  const { initialValueForm } = useSelector((state) => state.roomReducers);
  const [valueForm, setValueForm] = useState();
  React.useEffect(() => {
    if (initialValueForm.city) {
      setDoneForm(true);
    }
  }, [initialValueForm.city]);

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const { city, district, ward, nameStress, numberHome } = value;
      // console.log(city);
      if (city && district && ward && nameStress && numberHome) {
        setDoneForm(true);
        setValueForm({
          city,
          district,
          ward,
          nameStress,
          numberHome,
        });
      } else {
        setDoneForm(false);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const handleNextStep = () => {
    handleCompleteSuccess();
    dispatch(roomActions.inforFormTemporary({ ...valueForm }));
  };

  return (
    <Wrapper>
      <Container>
        <Title>Địa chỉ</Title>
        <GroupForm>
          <AutocompleteField
            name="city"
            options={cities}
            control={control}
            label="Thành phố"
            placeholder="Thành phố"
          />
        </GroupForm>
        <GroupForm>
          <AutocompleteField
            name="district"
            options={districts}
            control={control}
            label="Quận/huyện"
            placeholder="Quận/huyện"
          />
        </GroupForm>
        <GroupForm>
          <AutocompleteField
            name="ward"
            options={wards}
            control={control}
            label="Phường/Xã"
            placeholder="Phường/Xã"
          />
        </GroupForm>
        <GroupForm>
          <InputField
            name="nameStress"
            control={control}
            placeholder="Tên đường"
            label="Tên đường"
          />
        </GroupForm>
        <GroupForm>
          <InputField
            name="numberHome"
            control={control}
            placeholder="Số nhà"
            label="Số nhà"
          />
        </GroupForm>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          disabled={!doneForm}
          onClick={handleNextStep}
          sx={{
            padding: "8px",
            backgroundColor: !doneForm
              ? "#888 !important"
              : color.primary.newPurple,
            color: "white !important",
          }}
        >
          Tiếp theo
        </Button>
      </Container>
    </Wrapper>
  );
}

const GroupForm = styled(Box)`
  margin-bottom: 24px;
`;
const Title = styled.h4``;
const Container = styled.div`
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
const Wrapper = styled.div``;
export default FormAddress;
