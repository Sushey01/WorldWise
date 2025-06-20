import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './pages/Navbar'
import HeroSection from './pages/HeroSection'
import Pricing from './pages/Pricing'
import Product from './pages/Product'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App
