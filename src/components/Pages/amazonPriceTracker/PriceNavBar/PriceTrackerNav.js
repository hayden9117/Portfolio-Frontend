import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  CssBaseline,
} from "@mui/material";
import AccountMenu from "./Account/AccountMenu";
import { useContext } from "react";
import useToken from "../UseToken";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PriceAppContext from "../Context/PriceAppContext";
import ProductInput from "../components/ProductInput";

function PriceTrackerNav() {
  const { checked, setChecked } = useContext(PriceAppContext);
  const { setMode } = useContext(PriceAppContext);
  const token = useToken();
  console.log(token);
  const toggleChecked = () => {
    setChecked(!checked);
  };

  if (checked === true) {
    setMode("light");
  }
  if (checked === false) {
    setMode("dark");
  }
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
        width: "100%",
        textAlign: "center",
      }}
    >
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <ProductInput />
          <Box
            sx={{ position: "fixed", right: "0%", display: "flex" }}
            justifyContent="start"
          >
            <Typography variant="h5">{`Welcome, ${token.token.username}`}</Typography>
            <AccountMenu />
            <Button color={"inherit"} onClick={toggleChecked}>
              {" "}
              {checked === true ? <LightModeIcon /> : <DarkModeIcon />}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default PriceTrackerNav;
