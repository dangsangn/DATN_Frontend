import {
  getDistrictOfCity,
  getProvincesApi,
  getWardOfDistrict,
} from "apis/address";
import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import FormAddress from "../components/FormAddress";
import FormInfoRoom from "../components/FormInfoRoom";
import FormUtilities from "../components/FormUtilities";
import { roomActions } from "../roomSlice";
import FormAddRoomSuccess from "./FormAddRoomSuccess";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  typeRoom: yup.string().required("Please choose a room type"),
  quantityRoom: yup
    .number()
    .positive("Please enter a positive number.")
    .min(1, "Min is 1")
    .typeError("Please enter a valid number.")
    .required("Plase enter quantity room."),
  capacity: yup
    .number()
    .positive("Please enter a positive number.")
    .min(1, "Min is 1")
    .typeError("Please enter a valid number.")
    .required("Plase enter capacity."),
  gender: yup.string().required("Please a choose gender"),
  stretch: yup
    .number()
    .positive("Please enter a positive number.")
    .min(10, "Min is 10")
    .typeError("Please enter a valid number.")
    .required("Plase enter stretch."),
  priceRoom: yup
    .number()
    .positive("Please enter a positive number.")
    .min(1, "Min is 1")
    .typeError("Please enter a valid number.")
    .required("Plase enter price Room."),
  priceDeposit: yup
    .number()
    .positive("Please enter a positive number.")
    .min(1, "Min is 1")
    .typeError("Please enter a valid number.")
    .required("Plase enter price Deposit."),
  priceElectric: yup
    .number()
    .positive("Please enter a positive number.")
    .min(1, "Min is 1")
    .typeError("Please enter a valid number.")
    .required("Plase enter price Electric."),
  priceWater: yup
    .number()
    .positive("Please enter a positive number.")
    .min(1, "Min is 1")
    .typeError("Please enter a valid number.")
    .required("Plase enter price Water."),
  priceWifi: yup
    .number()
    .positive("Please enter a positive number.")
    .min(1, "Min is 1")
    .typeError("Please enter a valid number.")
    .required("Plase enter price Wifi."),
  city: yup.object().required("Please choose a city"),
  district: yup.object().required("Please choose a district"),
  ward: yup.object().required("Please choose a ward"),
  nameStress: yup.string().required("Please enter a name Stress"),
  numberHome: yup.string().required("Please enter a number Home"),
  images: yup.array().required("Please choose images"),
  utilities: yup.array().required("Please choose a utilities"),
  description: yup.string().required("Please enter description"),
});

const FormAddRoom = ({ handleComplete, activeStep }) => {
  const { isCreate } = useSelector((state) => state.roomReducers);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (isCreate) {
      handleComplete();
    }
  }, [isCreate]);

  const handleCompleteSuccess = () => {
    handleComplete();
  };

  const city = useWatch({
    control,
    name: "city",
    defaultValue: null,
  });
  const district = useWatch({
    control,
    name: "district",
    defaultValue: null,
  });

  const [cities, setSities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    const getListCity = async () => {
      const res = await getProvincesApi();
      setSities(res.data.provinces);
    };
    getListCity();
  }, []);

  useEffect(() => {
    const getListDistricts = async () => {
      const res = await getDistrictOfCity(city?.code);
      setDistricts(res.data.districts);
    };
    getListDistricts();
  }, [city]);

  useEffect(() => {
    const getListWards = async () => {
      const res = await getWardOfDistrict(district?.code);
      setWards(res.data.wards);
    };
    getListWards();
  }, [district]);

  const handleSubmitForm = async (data) => {
    console.log(data);
    const sendForm = {
      nameStress: data?.nameStress,
      numberHome: data?.numberHome,
      priceRoom: +data?.numberHome,
      priceDeposit: +data?.priceDeposit,
      typeRoom: +data?.typeRoom,
      stretch: +data?.stretch,
      gender: +data?.gender,
      capacity: +data?.capacity,
      priceElectric: +data?.priceElectric,
      priceWater: +data?.priceWater,
      priceWifi: +data?.priceWifi,
      images: data?.images,
      utilities: data?.utilities,
      quantityRoom: +data?.quantityRoom,
      ordered: 0,
      description: data?.description,
      verify: false,
      ward: data?.ward,
      district: data?.district,
      city: data?.city,
    };
    dispatch(roomActions.createRoom(sendForm));
    // handleCompleteSuccess();
  };

  const showContent = (option) => {
    let result = null;
    switch (option) {
      case 0:
        result = (
          <FormInfoRoom
            watch={watch}
            control={control}
            handleCompleteSuccess={handleCompleteSuccess}
          />
        );
        break;
      case 1:
        result = (
          <FormAddress
            watch={watch}
            cities={cities}
            districts={districts}
            control={control}
            wards={wards}
            handleCompleteSuccess={handleCompleteSuccess}
          />
        );
        break;
      case 2:
        result = (
          <FormUtilities
            watch={watch}
            control={control}
            handleCompleteSuccess={handleCompleteSuccess}
          />
        );
        break;
      case 3:
        result = <FormAddRoomSuccess />;
        break;
      default:
        break;
    }
    return result;
  };
  return (
    <MForm onSubmit={handleSubmit(handleSubmitForm)}>
      {showContent(activeStep)}
    </MForm>
  );
};

const MForm = styled.form``;
export default FormAddRoom;
