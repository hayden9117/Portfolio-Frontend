import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppContext from "./Context/AppContext";
import Home from "./components/Pages/home/Home";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./config/theme";
import PriceTracker from "./components/Pages/amazonPriceTracker/priceTracker";
import PlanIt from "./components/Pages/PlanIt/PlanIt";
import ViaURL from "./components/Pages/viaUrl/ViaUrl";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/priceTracker" element={<PriceTracker />} />
          <Route path="/PlanIt" element={<PlanIt />} />
          <Route path="/ViaURL/*" element={<ViaURL />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
