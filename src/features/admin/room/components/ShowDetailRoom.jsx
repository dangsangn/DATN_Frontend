import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Imagelist from "components/ImageList/ImageList";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { roomAdminActions } from "../roomAdminSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const Showdetailroom = ({ idRoom, handleClose }) => {
  const { selectRoom } = useSelector((state) => state.roomAdminReducers);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    dispatch(roomAdminActions.getDetailRoom(idRoom));
  }, [dispatch, idRoom]);

  const handleVerifyRoom = () => {
    dispatch(
      roomAdminActions.verifyRoom({
        id: idRoom,
        verify: !selectRoom?.verify,
      })
    );
    handleClose();
  };

  const handleDeleteRoom = async () => {
    dispatch(roomAdminActions.deleteRoom(idRoom));
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
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleDeleteRoom} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Wrapper>
        <Title>
          <strong>Room Detail:</strong>
        </Title>
        <CodeId># {selectRoom?._id}</CodeId>
        <WrapBody>
          <WrapImage>
            <h4>
              <strong>Images:</strong>
            </h4>
            {selectRoom?.images && <Imagelist imageList={selectRoom?.images} />}
          </WrapImage>
          <p>
            <strong>Address:</strong> {selectRoom?.numberHome}
            {selectRoom?.nameStress}, {selectRoom?.ward?.label}
            {selectRoom?.district?.label} {selectRoom?.city?.label}
          </p>
          <p>
            <strong>Price room:</strong> {selectRoom?.priceRoom} vnd
          </p>
          <WrapAction>
            <Button
              sx={{ marginRight: "12px;" }}
              variant="outlined"
              color="error"
              onClick={handleClickOpenDialog}
            >
              Delete
            </Button>
            <Button variant="contained" onClick={handleVerifyRoom}>
              {selectRoom?.verify ? "Unverify" : "Verify"}
            </Button>
          </WrapAction>
        </WrapBody>
      </Wrapper>
    </>
  );
};
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
export default Showdetailroom;
