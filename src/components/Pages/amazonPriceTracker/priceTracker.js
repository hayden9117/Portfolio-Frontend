import { Box, CssBaseline, Stack } from "@mui/material";

import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/LogIn";
import SignUp from "./login/SignUp";
import { GetProductTimeData } from "./api/api";
import PriceAppContext from "./Context/PriceAppContext";
import AmazonPriceTracker from "./components/AmazonPriceTracker";
import useToken from "./UseToken";
import PriceTrackerNav from "./PriceNavBar/PriceTrackerNav";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./config/theme";
import Loading from "./components/helperComponents/Loading";

function PriceTracker() {
  const { token, setToken } = useToken();
  const [checked, setChecked] = useState(true);
  const [url, setUrl] = useState("");
  const [list, setList] = useState([]);
  const [render, setRender] = useState(false);

  const getData = useCallback(async () => {
    if (token) {
      let arr = [];
      const res = await GetProductTimeData(token.token);
      res.forEach((item) => {
        arr.push(item);
      });
      setList(arr);
      setRender(false);
    }
  }, [token]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (render && token) {
      getData();
    }
  }, [getData, render, token]);

  if (!token) {
    return (
      <>
        <PriceAppContext.Provider
          value={{
            checked,
            setChecked,
            url,
            setUrl,
            render,
            setRender,
          }}
        >
          <ThemeProvider theme={checked === true ? lightTheme : darkTheme}>
            <CssBaseline />
            <PriceTrackerNav />
            <br />
            <Stack direction={"column"}>
              <Login setToken={setToken} />
            </Stack>
          </ThemeProvider>
        </PriceAppContext.Provider>
      </>
    );
  }

  return (
    <>
      <PriceAppContext.Provider
        value={{
          checked,
          setChecked,
          url,
          setUrl,
          render,
          setRender,
        }}
      >
        <ThemeProvider theme={checked === true ? lightTheme : darkTheme}>
          <CssBaseline />
          <PriceTrackerNav />
          <br />
          <Stack direction={"column"}>
            {list.length > 0 ? <AmazonPriceTracker list={list} /> : <Loading />}
          </Stack>
        </ThemeProvider>
      </PriceAppContext.Provider>
    </>
  );
}

export default PriceTracker;
