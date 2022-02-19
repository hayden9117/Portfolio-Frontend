import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppContext from "./Context/AppContext";
import Home from "./components/Pages/home/Home";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./config/theme";
import PriceTracker from "./components/Pages/amazonPriceTracker/priceTracker";

function App() {
  const [value, setValue] = useState("");
  const [listName, setListName] = useState("");
  const [listType, setListType] = useState("");
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [steps, setSteps] = useState([]);
  const [mode, setMode] = useState([]);
  const [title, setTitle] = useState([]);

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <AppContext.Provider
        value={{
          value,
          setValue,
          listName,
          setListName,
          listType,
          setListType,
          open,
          setOpen,
          steps,
          setSteps,
          checked,
          setChecked,
          mode,
          setMode,
          title,
          setTitle,
        }}
      >
        <ThemeProvider theme={checked === true ? lightTheme : darkTheme}>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </AppContext.Provider>
      <Router>
        <Switch>
          <Route path="/priceTracker" exact>
            <PriceTracker />
          </Route>
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
