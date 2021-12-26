import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import styled from "styled-components";
import FormAddress from "../components/FormAddress";
import FormInfoRoom from "../components/FormInfoRoom";
import {
  getDistrictOfCity,
  getProvincesApi,
  getWardOfDistrict,
} from "apis/address";
import FormUtilities from "../components/FormUtilities";
import FormAddRoomSuccess from "./FormAddRoomSuccess";
import { imageUploadApi } from "apis/uploadImage";
import { useDispatch } from "react-redux";
import { loadingActions } from "features/loading/loadingSlice";
import { roomActions } from "../roomSlice";

const FormAddRoom = ({ handleComplete, activeStep }) => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting },
  } = useForm({});
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
    const imageFiles = data.images.map((item) => item.url);
    const formData = new FormData();
    dispatch(loadingActions.startLoading());
    try {
      if (imageFiles.length > 0) {
        imageFiles.forEach((item) => formData.append("image", item));
        const responseUrls = await imageUploadApi(formData);
        dispatch(loadingActions.setMessageSuccess("Create a room success"));
        dispatch(
          roomActions.inforFormTemporary({ images: responseUrls.data.data })
        );
        console.log(responseUrls);
      }
    } catch (error) {}
    handleCompleteSuccess();
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
