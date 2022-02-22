import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

//Page Imports
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import Models from "./pages/Models";
import ErrorPage from "./pages/404";
import Team from "./pages/Team";
import TeamDetail from "./pages/TeamDetail";
import ModelDetail from "./pages/ModelDetail";
import Influencers from "./pages/Influencers";
import InfluencerDetail from "./components/InfluencerDetail";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";

//Test Navbar

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <div>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/models" element={<Models />} />
        <Route path="/model/:id" element={<ModelDetail />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:id" element={<TeamDetail />} />
        <Route path="/influencers" element={<Influencers />} />
        <Route path="/influencer/:id" element={<InfluencerDetail />} />
        {/* 404 Route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
