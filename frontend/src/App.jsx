import React, { useState } from "react";
import Auth from "./pages/Auth";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";

import "./App.css";
import "./styles/nav.css";
import CreatePortfolio from "./pages/CreatePortfolio";

function App() {
  const location = useLocation().pathname;
  const [user, setUser] = useState({});
  return (
    <>
      {location !== "/" ? <Navbar user={user} /> : ""}
      <Routes>
        <Route path="/">
          <Route index element={<Auth setUser={setUser} />} />
          <Route path="home" element={<Landing />} />
          <Route path="create" element={<CreatePortfolio user={user} />} />
          <Route path="profile/:id" element={<Profile user={user} />} />
          <Route path="portfolio/:id" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
