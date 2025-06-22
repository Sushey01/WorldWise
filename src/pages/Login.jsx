import React, { useState } from 'react'
import "../pages/Login.css"
import Navbar from './Navbar'
import L from 'leaflet'

const Login = () => {
    const [formData, setFormData] = useState("")

  return (
    <section className="section4">
      <div className="login-main">
        <Navbar/>
         <div className="login-container">
        <div className="login-box">
            <div className="email-address">
            <p>Email address</p>
            <input
            type='text'
            placeholder='susan@example.com'
            value={formData}
            className='userInput'
            />
        </div>

          <div className="password">
            <p>Password</p>
            <input
            type='text'
            placeholder='* * * * * *'
            value={formData}
            className='userInput'
            />
        </div>

        <button className='another-login-button'>LOGIN</button>
        </div>
        
    </div>
      </div>
         
    </section>
  
  )
}

export default Login
                                        