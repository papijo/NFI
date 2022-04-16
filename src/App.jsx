import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import InfluencerDetail from "./pages/InfluencerDetail";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import ModelList from "./admin/ModelList";
import ModelView from "./admin/ModelView";
import NewModel from "./admin/NewModel";
import InfluencerList from "./admin/InfluencerList";
import InfluencerView from "./admin/InfluencerView";
import NewInfluencer from "./admin/NewInfluencer";
import { useSelector } from "react-redux";

//Test Navbar

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state) => state?.user?.currentUser);
  return (
    <Router>
      <div>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <Routes>
        {/* Public Pages */}
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

        {/* Admin Pages */}
        <Route
          path="/login"
          element={user ? <Navigate to="/admin/dashboard" /> : <Login />}
        />
        <Route
          path="/admin/dashboard"
          element={user ? <Dashboard /> : <Login />}
        />
        <Route
          path="/admin/dashboard/models"
          element={user ? <ModelList /> : <Login />}
        />
        <Route
          path="/admin/dashboard/model/:id"
          element={user ? <ModelView /> : <Login />}
        />
        <Route
          path="/admin/dashboard/new-model/"
          element={user ? <NewModel /> : <Login />}
        />
        <Route
          path="/admin/dashboard/influencers"
          element={user ? <InfluencerList /> : <Login />}
        />
        <Route
          path="/admin/dashboard/influencer/:id"
          element={user ? <InfluencerView /> : <Login />}
        />
        <Route
          path="/admin/dashboard/new-influencer/"
          element={user ? <NewInfluencer /> : <Login />}
        />
      </Routes>
    </Router>
  );
};

export default App;
