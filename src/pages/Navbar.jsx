import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pages/Navbar.css";
import Logo from "../assets/images/worldwise.png"

const Navbar = () => {

  const navigate = useNavigate("")

//Two Methods for navigating

// 1. Arrow Function Declaration
  // const handleLogin =()=>{
  //   navigate("/login")
  // }

// 2. Function Declaration
  function handleLogin(){
    navigate("/login")
  }

  function handleClick(){
    navigate("/")
  }


  return (
    <div className="nav-title">
      <div className="nav-logo">
        <img src={Logo} alt="logo"  onClick={handleClick}/>
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
