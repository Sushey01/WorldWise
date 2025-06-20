import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './pages/Navbar'
import HeroSection from './pages/HeroSection'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import Login from './pages/Login'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
