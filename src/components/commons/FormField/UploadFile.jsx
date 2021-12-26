import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { color } from "themes";
import { useState } from "react";
import { Grid } from "@mui/material";
import { useController } from "react-hook-form";

const Uploadfile = ({ name, control }) => {
  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({ name, control });
  const [files, setFiles] = useState([]);

  useEffect(() => {
    onChange(files);
  }, [files]);

  const handleUploadFile = (e) => {
    setFiles([...files, { id: Math.random(), url: e.target.files[0] }]);
    e.target.value = null;
  };

  const handleDeleteImage = (id) => {
    setFiles((pre) => pre.filter((f) => f.id !== id));
  };
  return (
    <Container>
      <Title>Hình ảnh</Title>
      <WrapInput>
        <Input
          type="file"
          id="upload"
          multiple
          accept=".png, .jpg"
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
              <WrapImage key={item.id}>
                <Image src={URL.createObjectURL(item.url)} />
                <Overlay className="overlay"></Overlay>
                <WrapIconClose
                  className="wrap-icon"
                  onClick={() => handleDeleteImage(item.id)}
                >
                  <HighlightOffIcon />
                </WrapIconClose>
              </WrapImage>
            </Grid>
          ))}
        </Grid>
      </WrapListImage>
    </Container>
  );
};

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.4s ease-in-out;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
`;
const WrapIconClose = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  svg {
    path {
      color: white;
      &:hover {
        color: ${color.primary.newPurple};
      }
    }
  }
  &:hover {
    svg {
      path {
        color: ${color.primary.newPurple};
      }
    }
  }
`;
const Title = styled.title`
  display: inline-block;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;
const Image = styled.img``;
const WrapImage = styled.div`
  position: relative;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid ${color.primary.Shades6};
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
    .wrap-icon {
      visibility: visible;
      opacity: 1;
    }
    .overlay {
      opacity: 1;
    }
  }
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
