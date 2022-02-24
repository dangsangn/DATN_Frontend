import { Button } from "@mui/material";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Stepper from "@mui/material/Stepper";
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { color } from "themes";
import history from "utils/history";
import { roomActions } from "../roomSlice";
import FormAddRoom from "./FormAddRoom";

const steps = ["Thông tin", "Địa chỉ", "Tiện ích", "Xác nhận"];

export default function Features() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const dispatch = useDispatch();
  const location = useLocation();
  const idRoom = location?.state?.idRoom;
  const token = localStorage.getItem("access_token");
  if (!token) return <Redirect to="/login" />;

  const totalSteps = () => {
    return steps.length;
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    if (!isLastStep() && !allStepsCompleted()) {
      newCompleted[activeStep] = true;
    }
    setCompleted(newCompleted);
    handleNext();
  };

  const showSteps = (steps, mobile) => {
    return (
      <MStepper orientation="horizontal" nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <MStep
            width={100 / steps.length}
            key={label}
            completed={completed[index]}
          >
            <MStepButton
              activeStep={activeStep}
              color="inherit"
              onClick={handleStep(index)}
            >
              {mobile ? <span></span> : index + 1 + ". " + label}
            </MStepButton>
          </MStep>
        ))}
      </MStepper>
    );
  };

  const handleStartCreateRoom = () => {
    history.push("/post-room");
    handleReset();
    dispatch(roomActions.clearForm());
  };

  return (
    <Wrapper>
      <Title>
        {idRoom ? (
          <>
            <span>Thay đổi thông tin</span>
            <Button
              variant="outlined"
              sx={{ textTransform: "initial !important", marginLeft: "16px" }}
              onClick={handleStartCreateRoom}
            >
              Tạo phòng
            </Button>
          </>
        ) : (
          "Đăng phòng"
        )}
      </Title>
      <WrapperStep>{showSteps(steps, false)}</WrapperStep>
      <WrapStepMobile>
        <LableStep>
          {activeStep + 1}/{steps.length}. {steps[activeStep]}
        </LableStep>
        {showSteps(steps, true)}
      </WrapStepMobile>
      <WrapContent>
        <FormAddRoom
          handleReset={handleReset}
          handleComplete={handleComplete}
          activeStep={activeStep}
        />
      </WrapContent>
    </Wrapper>
  );
}

const LableStep = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${color.primary.newPurple};
  margin-bottom: 5px;
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 30px;
  margin-top: 30px;
  font-weight: 600;
  color: ${color.primary.Shades2};
  margin-bottom: 30px;
  @media (max-width: 900px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }
`;

const WrapContent = styled.div``;

const WrapStepMobile = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
  margin-bottom: 24px;
  .MuiStepLabel-labelContainer {
    /* display: none; */
  }
`;
const WrapperStep = styled.div`
  margin-bottom: 40px;
  @media (max-width: 900px) {
    display: none;
  }
`;
const MStep = styled(Step)`
  && {
    width: ${(props) => props.width}%;
    padding: 0;
    margin-right: 2px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
const MStepButton = styled(StepButton)`
  && {
    display: block;
    text-align: left;
    padding: 0 0 20px 0;
    margin: 0;
    .MuiStepLabel-label {
      color: ${color.primary.Shades5};
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      position: relative;
      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -15px;
        width: 100%;
        border-bottom: 5px solid ${color.primary.Shades6};
      }
      &.Mui-completed {
        color: ${color.primary.newPurple};
        position: relative;
        &::after {
          content: "";
          display: block;
          bottom: -15px;
          position: absolute;
          width: 100%;
          border-bottom: 5px solid ${color.primary.purple2};
        }
      }
      &.Mui-active {
        color: ${color.primary.newPurple};
        position: relative;
        &::after {
          content: "";
          display: block;
          bottom: -15px;
          position: absolute;
          width: 100%;
          border-bottom: 5px solid ${color.primary.purple2};
        }
      }
    }
  }
`;

const MStepper = styled(Stepper)`
  && {
    width: 100%;
    align-items: flex-end;
    .MuiStepLabel-iconContainer {
      display: none;
    }
  }
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: auto;
`;
