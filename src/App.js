import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/home/Home";
import { Box } from "@mui/material";
import PriceTracker from "./components/Pages/amazonPriceTracker/priceTracker";
import PlanIt from "./components/Pages/PlanIt/PlanIt";
import ViaURL from "./components/Pages/viaUrl/ViaUrl";
import ShortestPath from "./components/Pages/shortestPath/ShortestPath";

function App() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/priceTracker" element={<PriceTracker />} />
          <Route path="/PlanIt" element={<PlanIt />} />
          <Route path="/shortest" element={<ShortestPath />} />
          <Route path="/ViaURL/*" element={<ViaURL />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
