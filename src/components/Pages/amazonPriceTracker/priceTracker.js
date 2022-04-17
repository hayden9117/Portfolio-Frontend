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
      let arr = [];
      if (token) {
        const response = await GetAmazonData();
        await response.forEach((res) => {
          if (res.userID === token.token) {
            arr.push(res);
          }
          setList(arr);
        });
        const res = await GetProductTimeData();
        response.forEach(() => {
          setTimeData(res);
        });
      }
    }
    getData();
  }, [token]);

  const d = new Date();

  for (let i = 0; i < list.length; i++) {
    const week = [];
    const currentDay = week[d.getDay()];

    let graphPrice = list[i].itemprice;
    for (let j = 0; j < 7; j++) {
      var curr = new Date(); // get current date
      var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
      var last = first + j; // last day is the first day + 6
      var currentWeek = new Date(curr.setDate(last)).toString().slice(0, 11);
      week.push(currentWeek);
    }

    list[i].data = [
      {
        id: 1,
        day: week[0],
        price: null,
      },
      {
        id: 2,
        day: week[1],
        price: null,
      },
      {
        id: 3,
        day: week[2],
        price: null,
      },
      {
        id: 4,
        day: week[3],
        price: null,
      },
      {
        id: 5,
        day: week[4],
        price: null,
      },
      {
        id: 6,
        day: week[5],
        price: null,
      },
      {
        id: 7,
        day: week[6],
        price: null,
      },
    ];

    // sets the current price of the product at the current day
    for (const day in list[i].data) {
      if (list[i].data[day].id === d.getDay() + 1) {
        list[i].data[day].price = graphPrice;
      }
    }
    for (let j = 0; j < timeData.length; j++) {
      if (list[i].url === timeData[j].url) {
        if (timeData !== undefined || timeData !== null) {
          let day = new Date(timeData[j].some_datetime);

          const daysUpdate = day.toString().slice(0, 11);

          timeData[j].daysToUpdate = daysUpdate;

          for (const day in list[i].data) {
            if (
              list[i].data[day].day === timeData[j].daysToUpdate &&
              list[i].data[day].day !== currentDay
            ) {
              list[i].data[day].price = timeData[j].itemprice;
            }
          }
        }
      }
    }
  }

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
