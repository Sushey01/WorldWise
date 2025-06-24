import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pages/Navbar.css";
import Logo from "../assets/images/worldwise.png"

const Navbar = () => {

  const navigate = useNavigate("")


  const handleLogin =()=>{
    navigate("/login")
  }



  return (
    <div className="nav-title">
      <div className="nav-logo">
        <img src={Logo} alt="logo" />
        <div className="nav">
          <Link to="/pricing">Pricing</Link>
          <Link to="/product">Product</Link>
          
          <Link to="/login">
            <button className="login-button" onClick={handleLogin}>LOGIN</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
