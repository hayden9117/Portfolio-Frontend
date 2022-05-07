import { Box, CssBaseline, Stack } from "@mui/material";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/LogIn";
import SignUp from "./login/SignUp";
import { GetAmazonData, GetProductTimeData } from "./api/api";
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
  const [timeData, setTimeData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getData() {
      if (token) {
        // const response = await GetAmazonData();
        // await response.forEach((res) => {
        //   if (res.userID === token.token) {
        //     arr.push(res);
        //   }
        //   setList(arr);
        // });
        let arr = [];
        const res = await GetProductTimeData(url, token.token);
        res.forEach((item) => {
          arr.push(item);
          setList(arr);
        });
        console.log(res);
      }
    }
    getData();
  }, [token]);
  console.log(list);
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
    <>
      <PriceAppContext.Provider
        value={{
          checked,
          setChecked,
          mode,
          setMode,
          url,
          setUrl,
        }}
      >
        <ThemeProvider theme={checked === true ? lightTheme : darkTheme}>
          <CssBaseline />
          <PriceTrackerNav />
          <br />
          <Stack direction={"column"}>
            {list.length > 0 ? <AmazonPriceTracker list={list} /> : null}
          </Stack>
        </ThemeProvider>
      </PriceAppContext.Provider>
    </>
  );
}

export default PriceTracker;
