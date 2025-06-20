import React from "react";
import { Link } from "react-router-dom";
import "../pages/Navbar.css";
import Logo from "../assets/images/worldwise.png"

const Navbar = () => {
  return (
    <div className="nav-title">
      <div className="nav-logo">
        <img src={Logo} alt="logo" />
        <div className="nav">
          <Link to="/pricing">Pricing</Link>
          <Link to="/product">Product</Link>
          
          <Link to="/login">
            <button className="login-button">LOGIN</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
