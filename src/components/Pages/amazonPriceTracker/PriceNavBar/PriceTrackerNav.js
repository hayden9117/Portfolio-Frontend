import {
  AppBar,
  Toolbar,
  Box,
  Tooltip,
  Container,
  IconButton,
  CssBaseline,
} from "@mui/material";
import AccountMenu from "./Account/AccountMenu";
import { useContext, useEffect } from "react";
import useToken from "../UseToken";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PriceAppContext from "../Context/PriceAppContext";
import ProductInput from "../components/ProductInput";

function PriceTrackerNav() {
  const { checked, setChecked } = useContext(PriceAppContext);

  const { token } = useToken();

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        textAlign: "center",
        zIndex: 1,
      }}
    >
      <CssBaseline />
      <AppBar sx={{ height: "15", position: "fixed" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
              <ProductInput />
            </Box>

            <Box
              sx={{ position: "fixed", right: "2%", display: "flex" }}
              justifyContent="start"
            >
              {token === null ? null : <AccountMenu />}
              <Tooltip title="Toggle light/dark mode">
                <IconButton
                  sx={{ p: 2 }}
                  color={"inherit"}
                  onClick={toggleChecked}
                  size="large"
                >
                  {" "}
                  {checked === true ? (
                    <LightModeIcon fontSize="inherit" />
                  ) : (
                    <DarkModeIcon fontSize="inherit" />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default PriceTrackerNav;
