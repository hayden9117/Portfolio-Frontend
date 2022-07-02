import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { KeyboardArrowUp } from "@material-ui/icons";
import { IconButton, Stack, Typography } from "@mui/material";
import BgSlider from "./BgSliders.js/BgSliders";
import ColorMenu from "./BgSliders.js/ColorMenu";
import { SaveSvg } from "../tool-icons/NavSVGS";
import OpacitySlider from "./BgSliders.js/opacity/OpacitySlider";
import LightDark from "./BgSliders.js/opacity/LightDark";
const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  width: 240,

  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(SwipeableDrawer, {
  shouldForwardProp: (prop) => prop !== true,
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function TopDrawer(props) {
  const { openTop, setOpenTop, config, setConfig } = props;
  const [color, setColor] = React.useState(config.background);
  useEffect(() => {}, [config]);
  const handleClick = () => {
    alert("save");
  };

  return (
    <div>
      <Drawer BackdropProps={{ invisible: true }} anchor={"top"} open={openTop}>
        <DrawerHeader sx={{ width: 240 }}>
          <IconButton sx={{ color: "black" }} onClick={() => setOpenTop(false)}>
            <KeyboardArrowUp />
            <Typography variant={"h4"} color={config.background}>
              {`${config.background}${config.opacity}`}
            </Typography>
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ mt: 5 }} />
        <List>
          <ListItem disablePadding sx={{ display: "block", ml: 3 }}>
            <ColorMenu color={color} setColor={setColor} />
            <Divider sx={{ mt: 5 }} />
            <BgSlider
              color={color}
              setColor={setColor}
              config={config}
              setConfig={setConfig}
            />
            <Divider sx={{ mt: 5 }} />
            <Typography>Opacity</Typography>
            <OpacitySlider
              color={color}
              setColor={setColor}
              config={config}
              setConfig={setConfig}
            />
            <Typography>Brightness</Typography>
            <LightDark
              color={color}
              setColor={setColor}
              config={config}
              setConfig={setConfig}
            />
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <>
              <Button
                id="demo-customized-Button"
                aria-haspopup="true"
                disableElevation
                onClick={handleClick}
              >
                <Typography sx={{ color: "black", paddingRight: 2 }}>
                  Save Color Config
                </Typography>

                <SaveSvg />
              </Button>
            </>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
