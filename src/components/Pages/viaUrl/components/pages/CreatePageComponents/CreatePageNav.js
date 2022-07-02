import * as React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ViaHeaderSVG from "../../header/headerSVG/ViaHeaderSVG";
import {
  AddURLSVG,
  Background,
  Template,
  AvatarAdd,
  PreviewSVG,
} from "./tool-icons/NavSVGS";
import { Stack } from "@mui/material";
import TemplateMenu from "./navbarComponents/TemplateMenu";
import { SavePage } from "./navbarComponents/SavePage";
import { Preview } from "./navbarComponents/Preview";
import TopDrawer from "./navbarComponents/TopDrawer";

const drawerWidth = 240;

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: "#CDCDCD",
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
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

export default function CreatePageNav(props) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openTop, setOpenTop] = useState(false);
  const { config, setConfig, token, pageColor } = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleConfig = (text) => {
    console.log(text);
    // eslint-disable-next-line default-case
    switch (text) {
      case "Add a URL":
        setConfig({
          links: { num: config.links.num + 1, url: [...config.links.url, ""] },
          avatars: config.avatars,
          background: config.background,
          opacity: config.opacity,
          template: config.template,
          brightness: config.brightness,
        });
        break;
      case "Add a Avatar":
        if (config.avatars < 1) {
          setConfig({
            links: { num: config.links.num, url: config.links.url },
            avatars: config.avatars + 1,
            background: config.background,
            opacity: config.opacity,
            template: config.template,
            brightness: config.brightness,
          });
        }
        break;
      case "change bg Color":
        handleDrawerOpen();
        setOpenTop(!openTop);
        // setConfig({
        //   links: { num: config.links.num, url: config.links.url },
        //   avatars: config.avatars,
        //   background: config.background === "white" ? "red" : "white",
        //   template: config.template,
        // });

        break;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: pageColor.darker }}
        position="fixed"
        open={open}
      >
        <StyledToolbar
          sx={{
            backgroundColor: pageColor.nav.appBar,
            height: 70,
          }}
        >
          <Box sx={{ alignSelf: "center" }}>
            <IconButton
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                ...(open && { display: "none" }),
              }}
            >
              <ViaHeaderSVG width={"50"} height={"50"} />
            </IconButton>
          </Box>
          <Box
            sx={{
              position: "fixed",
              right: "2%",
              display: "flex",
            }}
          >
            {" "}
            <TemplateMenu config={config} setConfig={setConfig} />
            <Preview token={token} />
            <SavePage config={config} setConfig={setConfig} token={token} />
          </Box>
        </StyledToolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: pageColor.nav.drawer,
          },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ mt: 5 }} />
        <List>
          {["Add a URL", "Add a Avatar", "change bg Color"].map(
            (text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    justifyContent: open ? "center" : "center",
                  }}
                  onClick={() => handleConfig(text)}
                >
                  <ListItemIcon
                    sx={{
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text === "Add a URL" ? <AddURLSVG /> : null}
                    {text === "Add a Avatar" ? <AvatarAdd /> : null}
                    {text === "change bg Color" ? <Background /> : null}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <TopDrawer
        setOpenTop={setOpenTop}
        openTop={openTop}
        config={config}
        setConfig={setConfig}
      />
    </Box>
  );
}
