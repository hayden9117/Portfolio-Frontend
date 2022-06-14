import {
  Box,
  List,
  ListItem,
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  styled,
  Stack,
} from "@mui/material";
import { AboutProject } from "./about/AboutProject";
import { ViaHeader } from "./header/ViaHeader";

const ViaHome = () => {
  return (
    <Box>
      <CssBaseline />
      <Stack spacing={2}>
        <ViaHeader />
        <AboutProject />
      </Stack>
    </Box>
  );
};

export default ViaHome;
