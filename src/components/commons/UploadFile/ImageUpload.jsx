import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { imageUploadApi } from "apis/uploadImage";
import ImageTemp from "images/imageTemp.png";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { color } from "themes";
import Progressing from "./Progressing";

function ImageUpload({ data, getUrl, deleteUrl }) {
  const { id, file, url } = data;
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (file) {
      const getLinkImage = async () => {
        const formData = new FormData();
        formData.append("image", file);
        const response = await imageUploadApi(formData);
        setImage(response?.data?.data[0]?.url);
        getUrl({ url: response?.data?.data[0]?.url, id });
      };
      getLinkImage();
    }
  }, [file, id]);

  const handleDeleteImage = () => {
    deleteUrl(id);
  };
  return (
    <>
      {(file || url) && (
        <WrapImage>
          {url ? (
            <Image src={url} alt="image" />
          ) : image ? (
            <Image src={image} alt="image" />
          ) : (
            <Image src={ImageTemp} alt="imageTemp" />
          )}
          <Overlay className="overlay"></Overlay>
          <WrapIconClose
            className="wrap-icon"
            onClick={() => handleDeleteImage()}
          >
            <HighlightOffIcon />
          </WrapIconClose>
          {!image && !url && (
            <WrapLoading>
              <Progressing />
            </WrapLoading>
          )}
        </WrapImage>
      )}
    </>
  );
}

const WrapLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  margin: auto;
`;
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
const Image = styled.img`
  object-fit: contain;
`;
const WrapImage = styled.div`
  position: relative;
  height: 120px;
  width: 120px;
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
export default ImageUpload;
