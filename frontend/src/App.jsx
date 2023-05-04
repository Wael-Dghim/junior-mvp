import React from "react";
import "./App.css";
import Auth from "./pages/Auth";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";

function App() {
  const location = useLocation().pathname;
  return (
    <>
      {location !== "/" ? <Navbar /> : ""}
      <Routes>
        <Route path="/">
          <Route index element={<Auth />} />
          <Route path="home" element={<Landing />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="portfolio/:id" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
