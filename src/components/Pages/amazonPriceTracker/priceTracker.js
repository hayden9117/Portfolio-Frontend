import { Box, Stack } from "@mui/material";

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/LogIn";
import SignUp from "./login/SignUp";

import PriceAppContext from "./Context/PriceAppContext";
import AmazonPriceTracker from "./components/AmazonPriceTracker";
import useToken from "./UseToken";
import PriceTrackerNav from "./PriceNavBar/PriceTrackerNav";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./config/theme";

function PriceTracker() {
  const { token, setToken } = useToken();
  const [checked, setChecked] = useState(true);
  const [mode, setMode] = useState([]);
  const [url, setUrl] = useState("");
  const [mounted, setMounted] = useState(false);

  if (!token) {
    return (
      <ThemeProvider theme={checked === true ? lightTheme : darkTheme}>
        <Box color="primary" m={"auto"} mt={20}>
          <Router>
            <Switch>
              <Route path="/priceTracker" exact>
                <Login setToken={setToken} />
              </Route>
            </Switch>
            <Switch>
              <Route path="/priceTracker/signup" exact>
                <SignUp />
              </Route>
            </Switch>
          </Router>
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <Box sx={{ bgcolor: "background.paper", height: "100vh", width: "100vw" }}>
      <PriceAppContext.Provider
        value={{
          checked,
          setChecked,
          mode,
          setMode,
          url,
          setUrl,
          mounted,
          setMounted,
        }}
      >
        <ThemeProvider theme={checked === true ? lightTheme : darkTheme}>
          <PriceTrackerNav />
          <br />
          <Stack direction={"column"}>
            <AmazonPriceTracker />
          </Stack>
        </ThemeProvider>
      </PriceAppContext.Provider>
    </Box>
  );
}

export default PriceTracker;
