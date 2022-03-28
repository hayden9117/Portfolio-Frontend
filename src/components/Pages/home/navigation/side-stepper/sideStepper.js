import { Stepper, Step, StepButton, StepLabel, Stack } from "@mui/material";
import PropTypes from "prop-types";

import {
  QontoConnector,
  ColorlibStepIcon,
} from "./StepperStyles/StepperStyles";

export default function SideStepper(props) {
  const handleStep = (step) => {
    window.scrollTo({
      top: step.scrollPos,
      behavior: "smooth",
    });
  };

  return (
    <Stack
      sx={{
        height: "500px",
        width: 200,
        paddingTop: "80px",
        zIndex: 9000,
      }}
    >
      <Stepper
        className="stepAnimation"
        nonLinear
        connector={<QontoConnector />}
        orientation="vertical"
        sx={{
          // height: "500px",
          "& .MuiButtonBase-root": {
            justifyContent: "flex-start",
            alignItems: "flex-start",
          },
          "& .MuiStepConnector-root": {
            marginLeft: "50%",
          },

          ".MuiStepConnector-root .MuiStepConnector-line ": {
            height: "11vh",
          },

          display: "block",

          width: 150,
          zIndex: 9000,

          position: "fixed",
          top: 170,

          right: 15,
        }}
      >
        {props.steps.map((step) => {
          return (
            <Step
              active={
                props.scrollOffset >= step.scrollPos ? step.stepValue : false
              }
              key={step.label}
            >
              <StepButton color="inherit" onClick={() => handleStep(step)}>
                <StepLabel
                  key={step.label}
                  StepIconComponent={ColorlibStepIcon}
                >
                  {step.label}
                </StepLabel>
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
    </Stack>
  );
}

SideStepper.propTypes = {
  scrollOffset: PropTypes.number,
  steps: PropTypes.array,
  orientation: PropTypes.string,
};
