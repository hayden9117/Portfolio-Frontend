import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/LogIn";
import AppContext from "./Context/AppContext";
import NavBar from "./components/navigation/NavBar";
import SignUp from "./components/SignUp";
import MyFavoritesList from "./components/Pages/MyFavoritesList";
import CreateList from "./components/Pages/listPage/CreateList";
import useToken from "./components/UseToken";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./config/theme";

function App() {
  const [value, setValue] = useState("");
  const [listName, setListName] = useState("");
  const [listType, setListType] = useState("");
  const [navTitle, setNavTitle] = useState("");
  const [open, setOpen] = useState(false);
  const { token, setToken } = useToken();

  console.log(token);

  if (!token) {
    return (
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
    );
  }

  return (
    <Box sx={{ height: "100%" }}>
      <ThemeProvider theme={theme}>
        <AppContext.Provider
          value={{
            // userName, setUserName,
            // password, setPassword,
            value,
            setValue,
            // newPassword, setNewPassword,
            // newUserName, setNewUserName,
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
          }}
        >
          <Router>
            <NavBar />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/ListShare" exact>
                <MyFavoritesList />
              </Route>

              <Route path="/CreateList" exact>
                <CreateList />
              </Route>
            </Switch>
          </Router>
        </AppContext.Provider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
