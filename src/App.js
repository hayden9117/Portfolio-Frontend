import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/LogIn';
import AppContext from './Context/AppContext';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import MyFavoritesList from './components/Pages/MyFavoritesList';
import CreateList from './components/Pages/listPage.js/CreateList';




function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [value, setValue] = useState("");
  const [listName, setListName] = useState("");
  const [listType, setListType] = useState("");
  return (
    <div className="App">
      <AppContext.Provider value={
        {
          userName, setUserName,
          password, setPassword,
          value, setValue,
          newPassword, setNewPassword,
          newUserName, setNewUserName,
          listName, setListName,
          listType, setListType

        }
      }>

        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <SignUp />
            </Route>
            <Route path="/MyFavoritesLists" exact>
              <MyFavoritesList />
            </Route>
            <Route path="/CreateList" exact>
              <CreateList />
            </Route>
          </Switch>

        </Router>

      </AppContext.Provider>
    </div>
  );
}

export default App;

