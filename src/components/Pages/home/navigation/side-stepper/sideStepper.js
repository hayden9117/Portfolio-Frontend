import { useEffect, useState, useContext } from "react";
import AppContext from "../../../../../Context/AppContext";
import { Stepper, Step, StepButton, StepLabel, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 9000,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 9000,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      theme.palette.mode === "dark"
        ? "linear-gradient( 136deg, rgb(44, 6, 94) 0%, rgb(99, 80, 125) 50%, rgb(138,35,135) 100%)"
        : "linear-gradient( 136deg, rgb(226, 226, 240) 0%, rgb(95, 167, 244) 50%, rgb(255,255,255) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
    4: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

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
          "& .css-p46eja-MuiStepConnector-root": {
            marginLeft: "50%",
          },

          "& .css-obxkkc-MuiStepConnector-root": {
            marginLeft: "50%",
          },
          ".css-p46eja-MuiStepConnector-root .MuiStepConnector-line ": {
            height: "11vh",
          },
          ".css-obxkkc-MuiStepConnector-root .css-8t49rw-MuiStepConnector-line ":
            {
              height: "11vh",
            },
          overflow: "auto",
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
