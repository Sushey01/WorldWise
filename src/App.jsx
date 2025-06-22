import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './pages/Navbar'
import HeroSection from './pages/HeroSection'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import Login from './pages/Login'
import Map from './components/Map'
import Cities from './components/Cities'
import CityForm from './components/CityForm'

const App = () => {
  return (
    // <Cities/>
  // <Map/>
    <Router>
      <Routes>
        {/* <Route path="/" element={<HeroSection />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} /> */}

        {/* <Route path='map' element={<Map/>}/> */}
        <Route path='cities' element={<Cities/>}/>
        <Route path='cityform' element={<CityForm/>}/>


      </Routes>
    </Router>
  )
}

export default App
