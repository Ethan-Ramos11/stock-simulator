import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/navbar";
import Dashboard from "./components/dashboard";
import StockPicker from "./components/stockPicker";
import StrategySimulator from "./components/strategySimulator";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/strategy-simulator" element={<StrategySimulator />} />
        <Route path="/stock-picker" element={<StockPicker />} />
      </Routes>
    </Router>
  );
}

export default App;
