import {
  List,
  ListItem,
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../../LogIn";
import SignUp from "../../SignUp";
import CartDummyData from "./CartDummyData";
import { useContext } from "react";
import AppContext from "../../../Context/AppContext";
import AmazonPriceTracker from "./AmazonPriceTracker";
import useToken from "../../UseToken";
import PriceTrackerNav from "./PriceNavBar/PriceTrackerNav";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./config/theme";

function PriceTracker() {
  const { token, setToken } = useToken();
  const { checked } = useContext(AppContext);
  console.log(checked);

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
              <Route path="/signup" exact>
                <SignUp />
              </Route>
            </Switch>
          </Router>
        </Box>
      </ThemeProvider>
    );
  }

  const handleProductLink = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <ThemeProvider theme={checked === true ? lightTheme : darkTheme}>
      <Box m={"auto"} mt={20}>
        <PriceTrackerNav />
        <div>placement test:</div>
        {/* <AmazonPriceTracker /> */}

        {CartDummyData.search_results?.map((item) => (
          <>
            <Card sx={{ minWidth: 500 }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  {item.product.title}
                </Typography>
                <br />
                <Typography variant="h5" component="div">
                  {`stock status:    ${item.inventory.in_stock}`}
                </Typography>
                <br />
                <Typography variant="h5" component="div">
                  {`stock level:     ${item.inventory.stock_level}`}
                </Typography>
                <br />
                <Typography variant="h5" component="div">
                  {`online availability:     ${item.inventory.available_online} `}
                </Typography>
                <br />
                <Typography variant="h5" component="div">
                  {`price from walmart:    $${item.offers.primary.price} `}
                </Typography>
                <br></br>
              </CardContent>
              <Button onClick={() => handleProductLink(item.product.link)}>
                Link To Page
              </Button>
            </Card>
            <br></br>
          </>
        ))}

        <div>placement test:</div>
      </Box>
    </ThemeProvider>
  );
}

export default PriceTracker;
