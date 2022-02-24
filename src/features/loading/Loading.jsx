import CloseIcon from "@mui/icons-material/Close";
import {
  Alert,
  CircularProgress,
  Collapse,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadingActions } from "./loadingSlice";
const Loading = () => {
  const dispatch = useDispatch();
  const { loading, messageSuccess, messageError } = useSelector(
    (state) => state.loadingReducers
  );
  const handleCloseMessage = () => {
    dispatch(loadingActions.closeMessage());
  };
  return (
    <>
      {loading && (
        <Wrapper>
          <Overlay>
            <WrapIconLoading>
              <CircularProgress color="white" />
            </WrapIconLoading>
          </Overlay>
        </Wrapper>
      )}
      {(messageError || messageSuccess) && (
        <Wrapper>
          <WrapMessage>
            <Stack sx={{ width: "auto" }} spacing={2}>
              {messageError && (
                <Collapse in={!!messageError}>
                  <Alert
                    variant="standard"
                    severity="error"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={handleCloseMessage}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    {messageError}
                  </Alert>
                </Collapse>
              )}
              {messageSuccess && (
                <Collapse in={!!messageSuccess}>
                  <Alert
                    variant="standard"
                    severity="success"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={handleCloseMessage}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    {messageSuccess}
                  </Alert>
                </Collapse>
              )}
            </Stack>
          </WrapMessage>
        </Wrapper>
      )}
    </>
  );
};
const WrapMessage = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
`;
const WrapIconLoading = styled.div`
  width: 250px;
`;
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000000;
`;
export default Loading;
