import {
  Box,
  List,
  ListItem,
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  styled,
  Button,
  ButtonBase,
  Stack,
} from "@mui/material";

import ViaHeaderSVG from "./headerSVG/ViaHeaderSVG";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: "#CDCDCD",
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: "100vh",
    paddingLeft: 0,
    paddingTop: 0,
  },
}));

const headerLinks = [
  { label: "Create a personal viaURL page", id: 1, url: "create" },
  { label: "Sign in to your viaURL account", id: 2, url: "signin" },
  { label: "View a demo page", id: 2, url: "demo" },
];
export const ViaHeader = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <StyledToolbar>
          {" "}
          <Box sx={{ mt: "auto", mb: "auto" }}>
            <ViaHeaderSVG width="500" height="500" />
          </Box>
          <Stack
            sx={{
              width: "100%",
              height: "100%",
              mr: "10%",
              mt: "auto",
              mb: "auto",
            }}
            direction="column"
            alignItems="center"
            spacing={5}
          >
            {headerLinks.map((link) => (
              <Box
                sx={{
                  paddingRight: 2,
                }}
              >
                <ButtonBase href={`ViaURL/${link.url}`}>
                  <Typography variant="h3" color="#3F3D3D" key={link.id}>
                    {link.label}
                  </Typography>
                </ButtonBase>
              </Box>
            ))}
          </Stack>
        </StyledToolbar>
      </AppBar>
    </>
  );
};
