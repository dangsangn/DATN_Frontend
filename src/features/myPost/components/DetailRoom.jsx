import { Button } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { myPostActions } from "../MyPostSlice";
import ListOrder from "./ListOrder";
import history from "utils/history";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const Detailroom = ({ idRoom, handleClose }) => {
  const { selectRoom } = useSelector((state) => state.myPostReducers);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    dispatch(myPostActions.getDetailRoom(idRoom));
  }, [dispatch, idRoom]);

  const handleUpdateRoom = () => {
    history.push("/post-room/" + idRoom, { idRoom });
  };

  const handleDeleteRoom = async () => {
    dispatch(myPostActions.deleteRoom(idRoom));
    handleClose();
  };
  return (
    <>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Delete Room</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Do you want delete <strong>#{selectRoom?._id}</strong> room.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MButton onClick={handleCloseDialog}>Cancel</MButton>
          <MButton onClick={handleDeleteRoom} color="error">
            Delete
          </MButton>
        </DialogActions>
      </Dialog>
      <Wrapper>
        <Title>
          <strong>Chi tiết phòng:</strong>
        </Title>
        <CodeId># {selectRoom?._id}</CodeId>
        <WrapBody>
          <WrapImage>
            <TitleSub>Images:</TitleSub>
            <ImageList
              sx={{ width: "100%", height: 450 }}
              cols={3}
              rowHeight={164}
            >
              {selectRoom?.images &&
                selectRoom?.images.map((item) => (
                  <ImageListItem key={item}>
                    <img
                      src={`${item}`}
                      srcSet={`${item}`}
                      alt={item}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
            </ImageList>
          </WrapImage>
          <TitleSub>Address:</TitleSub>
          <DescriptionSub>
            {selectRoom?.numberHome} {selectRoom?.nameStress},{" "}
            {selectRoom?.ward?.label}
            {selectRoom?.district?.label} {selectRoom?.city?.label}
          </DescriptionSub>
          <TitleSub>Price room:</TitleSub>
          <DescriptionSub>{selectRoom?.priceRoom} vnd</DescriptionSub>
          <WrapImage>
            <TitleSub>
              <strong>Danh sách người đặt:</strong>
            </TitleSub>
            <WrapListOrder>
              <ListOrder userOrder={selectRoom?.userOrder} />
            </WrapListOrder>
          </WrapImage>
          <WrapAction>
            <MButton
              sx={{ marginRight: "12px;" }}
              variant="outlined"
              color="error"
              onClick={handleClickOpenDialog}
            >
              Xóa
            </MButton>
            <MButton variant="contained" onClick={handleUpdateRoom}>
              Sửa thông tin
            </MButton>
          </WrapAction>
        </WrapBody>
      </Wrapper>
    </>
  );
};
const TitleSub = styled.h5`
  font-size: 16px;
  font-weight: 600;
`;
const DescriptionSub = styled.p`
  margin-bottom: 24px;
`;
const WrapListOrder = styled.div``;
const MButton = styled(Button)`
  text-transform: initial !important;
`;
const CodeId = styled.p`
  text-align: center;
  margin-bottom: 12px;
`;
const WrapAction = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
`;
const WrapImage = styled.div`
  margin-bottom: 12px;
`;
const WrapBody = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h3`
  font-size: 24px;
  text-align: center;
`;
export default Detailroom;
