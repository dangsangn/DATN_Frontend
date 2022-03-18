import React, { useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { InputField } from "components/commons/FormField/InputField";
import { RadioField } from "components/commons/FormField/RadioField";
import styled from "styled-components";
import { color } from "themes";
import { useDispatch, useSelector } from "react-redux";
import { roomActions } from "../roomSlice";
const typeRooms = [
  {
    label: "Ký túc xá",
    value: 1,
  },
  {
    label: "Phòng cho thuê",
    value: 2,
  },
  {
    label: "Nhà nguyên căn",
    value: 3,
  },
  {
    label: "Phòng ở ghép",
    value: 4,
  },
  {
    label: "Căn hộ",
    value: 5,
  },
];
const genders = [
  {
    label: "Tất cả",
    value: 3,
  },
  {
    label: "Nam",
    value: 1,
  },
  {
    label: "Nữ",
    value: 2,
  },
];

function FormInfoRoom({ handleCompleteSuccess, control, watch }) {
  const [valueForm, setValueForm] = useState();
  const dispatch = useDispatch();
  const [doneForm, setDoneForm] = useState(false);
  const { initialValueForm } = useSelector((state) => state.roomReducers);

  React.useEffect(() => {
    if (initialValueForm.typeRoom) {
      setDoneForm(true);
    }
  }, [initialValueForm.typeRoom]);
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      const {
        typeRoom,
        quantityRoom,
        capacity,
        gender,
        stretch,
        priceRoom,
        priceDeposit,
        priceElectric,
        priceWifi,
      } = value;
      // console.log(typeRoom, quantityRoom, capacity);
      if (
        typeRoom &&
        quantityRoom &&
        capacity &&
        gender &&
        stretch &&
        priceRoom &&
        priceDeposit &&
        priceElectric &&
        priceWifi
      ) {
        setDoneForm(true);
        setValueForm({
          typeRoom,
          quantityRoom,
          capacity,
          gender,
          stretch,
          priceRoom,
          priceDeposit,
          priceElectric,
          priceWifi,
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
  // console.log("initialValueForm", doneForm);
  return (
    <Wrapper>
      <Container>
        <Title>Thông tin phòng</Title>
        <GroupForm>
          <RadioField
            name="typeRoom"
            options={typeRooms}
            control={control}
            label="Loại phòng"
          />
        </GroupForm>
        <GroupForm>
          <InputField
            name="quantityRoom"
            control={control}
            placeholder="Nhập số lượng phòng"
            label="Số lượng phòng"
            type="number"
          />
        </GroupForm>
        <GroupForm>
          <InputField
            name="capacity"
            control={control}
            placeholder="Sức chứa"
            label="Sức chứa (người/phòng)"
            type="number"
          />
        </GroupForm>
        <GroupForm>
          <RadioField
            name="gender"
            options={genders}
            control={control}
            label="Giới tính"
          />
        </GroupForm>
        <GroupForm>
          <InputField
            name="stretch"
            control={control}
            placeholder="Diện tích"
            label="Diện tích"
            type="number"
          />
        </GroupForm>
        <GroupForm>
          <InputField
            name="priceRoom"
            control={control}
            placeholder="Gía cho thuê"
            label="Gía cho thuê (VND/phòng)"
            type="number"
          />
        </GroupForm>
        <GroupForm>
          <InputField
            name="priceDeposit"
            control={control}
            placeholder="Đặt cọc"
            label="Đặt cọc"
            type="number"
          />
        </GroupForm>
        <GroupForm>
          <InputField
            name="priceElectric"
            control={control}
            placeholder="Tiền điện"
            label="Tiền điện"
            type="number"
          />
        </GroupForm>
        <GroupForm>
          <InputField
            name="priceWater"
            control={control}
            placeholder="Tiền nước"
            label="Tiền nước"
            type="number"
          />
        </GroupForm>
        <GroupForm>
          <InputField
            name="priceWifi"
            control={control}
            placeholder="Internet/Truyền hình cáp"
            label="Internet/Truyền hình cáp"
            type="number"
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
export default FormInfoRoom;
