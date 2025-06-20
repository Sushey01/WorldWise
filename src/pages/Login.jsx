import React, { useState } from 'react'
import "../pages/Login.css"

const Login = () => {
    const [formData, setFormData] = useState("")

  return (
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
  )
}

export default Login
                                        