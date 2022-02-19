import { AppBar, Toolbar, Box, Button } from "@mui/material";
import AccountMenu from "./Account/AccountMenu";
import { useContext } from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PriceAppContext from "../Context/PriceAppContext";
function PriceTrackerNav() {
  const { checked, setChecked } = useContext(PriceAppContext);
  const { setMode } = useContext(PriceAppContext);

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
        display: "flex",
        height: "100%",
        width: "100%",
        textAlign: "center",
      }}
    >
      <AppBar>
        <Toolbar>
          <AccountMenu />
          <Button
            sx={{ position: "absolute", left: 180 }}
            color={"inherit"}
            onClick={toggleChecked}
          >
            {" "}
            {checked === true ? <LightModeIcon /> : <DarkModeIcon />}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default PriceTrackerNav;
