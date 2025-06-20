import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
     <div className="nav-title">
          <div className="nav-logo">
            <img src={Logo} alt="logo" />
            <div className="nav">
              <a href="#">Pricing</a>
              <a href="#">Product</a>
              <button className="login-button">LOGIN</button>
            </div>
          </div>
          </div>
  )
}

export default Navbar
