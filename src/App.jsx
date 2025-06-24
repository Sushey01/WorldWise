import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./pages/Navbar";
import HeroSection from "./pages/HeroSection";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cities from "./components/Cities";
import CityList from "./components/CityList";
import { CitiesProvider } from "./contexts/CitiesContext";
import CountryList from "./components/CountryList";
import User from "./components/User";
import Map from "./components/Map"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="cities" element={<Cities />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
