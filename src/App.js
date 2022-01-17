import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/LogIn";
import AppContext from "./Context/AppContext";
import NavBar from "./components/navigation/NavBar";
import SignUp from "./components/SignUp";
import MyFavoritesList from "./components/Pages/MyFavoritesList";
import useToken from "./components/UseToken";
import Home from "./components/Pages/home/Home";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./config/theme";

function App() {
  const [value, setValue] = useState("");
  const [listName, setListName] = useState("");
  const [listType, setListType] = useState("");
  const [navTitle, setNavTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [steps, setSteps] = useState([]);
  const [mode, setMode] = useState([]);
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <Box sx={{ height: "100%" }}>
        <ThemeProvider theme={checked === true ? lightTheme : darkTheme}>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Login setToken={setToken} />
              </Route>
            </Switch>
            <Switch>
              <Route path="/signup" exact>
                <SignUp />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </Box>
    );
  }

  return (
    <Box sx={{ height: "100%" }}>
      <AppContext.Provider
        value={{
          value,
          setValue,
          listName,
          setListName,
          listType,
          setListType,
          token,
          setToken,
          navTitle,
          setNavTitle,
          open,
          setOpen,
          steps,
          setSteps,
          checked,
          setChecked,
          mode,
          setMode,
        }}
      >
        <ThemeProvider theme={checked === true ? lightTheme : darkTheme}>
          <Router>
            <NavBar />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/ListShare" exact>
                <MyFavoritesList />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </AppContext.Provider>
    </Box>
  );
}

export default App;
