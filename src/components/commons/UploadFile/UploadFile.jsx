import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Grid } from "@mui/material";
import { roomActions } from "features/room/roomSlice";
import React, { useEffect, useState } from "react";
import { useController } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { color } from "themes";
import ImageUpload from "./ImageUpload";

const Uploadfile = ({ name, control }) => {
  const dispatch = useDispatch();
  const roomReducers = useSelector((state) => state.roomReducers);
  const { images } = roomReducers.initialValueForm;

  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({ name, control });
  const [files, setFiles] = useState(() => {
    if (images.length > 0) {
      return images
        .filter((item) => item)
        .map((item) => ({ id: Math.random(), url: item }));
    } else {
      return [];
    }
  });

  useEffect(() => {
    const listImage = files.map((item) => item.url);
    dispatch(roomActions.inforFormTemporary({ images: [...listImage] }));
    onChange(listImage);
  }, [dispatch, files]);

  const handleUploadFile = (e) => {
    setFiles([
      ...files,
      { id: Math.random(), file: e.target.files[0], url: "" },
    ]);
    e.target.value = null;
  };

  const handleGetUrl = (value) => {
    const index = files.findIndex((item) => item.id === value.id);
    setFiles((pre) => {
      const newArr = [...pre];
      newArr[index].url = value.url;
      return newArr;
    });
  };

  const handleDeleteUrl = (value) => {
    const newArr = files.filter((item) => item.id !== value);
    setFiles(newArr);
  };

  return (
    <Container>
      <Title>Hình ảnh</Title>
      <WrapInput>
        <Input
          type="file"
          id="upload"
          multiple
          accept=".png, .jpg, .jfif"
          onChange={handleUploadFile}
          // name={name}
        />
        <Label htmlFor="upload">
          <UploadFileIcon fontSize="large" />
          <p>Upload image</p>
        </Label>
      </WrapInput>
      <WrapListImage>
        <Grid container spacing={2}>
          {files.map((item) => (
            <Grid key={item.id} item md={3}>
              <ImageUpload
                getUrl={handleGetUrl}
                data={item}
                deleteUrl={handleDeleteUrl}
                onChange={onChange}
              />
            </Grid>
          ))}
        </Grid>
      </WrapListImage>
    </Container>
  );
};

const Title = styled.title`
  display: inline-block;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const WrapListImage = styled.div`
  margin: 30px 0 40px;
`;
const WrapInput = styled.div``;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  border: 1px dashed ${color.primary.Shades6};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px ${color.primary.Shades6};
    border-color: ${color.primary.newPurple};
  }
`;
const Input = styled.input`
  display: none;
`;
const Container = styled.div``;
export default Uploadfile;
