import {
  Box,
  Stepper,
  Step,
  StepButton,
  StepLabel,
  Stack,
} from "@mui/material";
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
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        top: "20%",

        right: 15,
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
            height: "12vh",
          },

          display: "block",

          width: 150,
          zIndex: 9000,
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
              <StepButton onClick={() => handleStep(step)}>
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
    </Box>
  );
}

SideStepper.propTypes = {
  scrollOffset: PropTypes.number,
  steps: PropTypes.array,
  orientation: PropTypes.string,
};
