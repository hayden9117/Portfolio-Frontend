import { IconButton, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import { Drawer } from "@mui/material";
import { HomeSideSteps } from "../../../../comman/helpers/StepperHelper";
import AppContext from "../../../../../Context/AppContext";

export const NavDrawer = (props) => {
  console.log(props);
  const theme = useTheme();
  const handleClose = () => {
    props.setOpen(false);
  };
  const handleStep = (step) => {
    window.scrollTo({
      top: step.scrollPos,
      behavior: "smooth",
    });
  };
  return (
    <Drawer variant="persistent" anchor="left" open={props.open}>
      <div>
        <IconButton color="primary" onClick={handleClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <List>
        {HomeSideSteps.map((step) => {
          return (
            <ListItem button key={step}>
              <ListItemIcon>
                <Button onClick={() => handleStep(step)}>{step.label}</Button>
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
