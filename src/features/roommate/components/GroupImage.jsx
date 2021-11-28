import React, { useState } from "react";
import ImgsViewer from "react-images-viewer";
import { themes } from "themes";
import styled from "styled-components";
import Image1 from "images/image1.jpg";
import Image2 from "images/image2.jpg";
import Image3 from "images/image3.jpg";
import Image4 from "images/image4.jpg";
import Image5 from "images/image5.jpg";
import Image6 from "images/image6.jpg";
import Image7 from "images/image7.jpg";
import { Grid } from "@mui/material";

const images = [
  { src: Image1 },
  { src: Image2 },
  { src: Image3 },
  { src: Image4 },
  { src: Image5 },
  { src: Image6 },
  { src: Image7 },
];
const GroupImage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [curentImage, setCurrentImage] = useState();
  const lengthImages = images.length;
  const closeImgsViewer = () => {
    setIsOpen(false);
  };
  const openImgsViewer = (value) => {
    setIsOpen(true);
    setCurrentImage(value);
  };
  const gotoPrevImg = () => {
    setCurrentImage((pre) => {
      if (pre === 0) return 6;
      else return pre - 1;
    });
  };
  const gotoNextImg = () => {
    setCurrentImage((pre) => {
      if (pre === 6) return 0;
      else return pre + 1;
    });
  };
  return (
    <Wrapper>
      <ContainerImage>
        <Grid container spacing={1}>
          <Grid item md={6}>
            <WrapImage
              style={{ height: "508px" }}
              onClick={() => openImgsViewer(0)}
            >
              <Image src={images[0].src} />
            </WrapImage>
          </Grid>
          <Grid item md={3}>
            <Grid container spacing={1}>
              <Grid item>
                {lengthImages > 1 && (
                  <WrapImage onClick={() => openImgsViewer(1)}>
                    <Image src={images[1].src} />
                  </WrapImage>
                )}
              </Grid>
              <Grid item>
                {lengthImages > 2 && (
                  <WrapImage onClick={() => openImgsViewer(2)}>
                    <Image src={images[2].src} />
                  </WrapImage>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3}>
            <Grid container spacing={1}>
              <Grid item>
                {lengthImages > 3 && (
                  <WrapImage onClick={() => openImgsViewer(3)}>
                    <Image src={images[3].src} />
                  </WrapImage>
                )}
              </Grid>
              <Grid item>
                {lengthImages > 4 && (
                  <WrapImageCustomize onClick={() => openImgsViewer(4)}>
                    <Image src={images[4].src} />
                    {lengthImages > 5 && (
                      <Overlay>
                        <span>+{lengthImages > 5 && lengthImages - 5}</span>
                      </Overlay>
                    )}
                    )
                  </WrapImageCustomize>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContainerImage>
      <ImgsViewer
        imgs={images}
        currImg={curentImage}
        isOpen={isOpen}
        onClickPrev={gotoPrevImg}
        onClickNext={gotoNextImg}
        onClose={closeImgsViewer}
        backdropCloseable={false}
      />
    </Wrapper>
  );
};

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${themes.textLight};
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img``;
const WrapImage = styled.div`
  cursor: pointer;
  height: 250px;
  width: 100%;
`;
const WrapImageCustomize = styled(WrapImage)`
  position: relative;
`;
const ContainerImage = styled.div`
  border-radius: 16px;
  overflow: hidden;
`;
const Wrapper = styled.div``;
export default GroupImage;
