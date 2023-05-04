import React from "react";
import "./App.css";
import Auth from "./pages/Auth";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Auth />} />
        <Route path="home" element={<Landing />} />
        <Route path="portfolio/:id" element={<Portfolio />} />
      </Route>
    </Routes>
  );
}

export default App;
