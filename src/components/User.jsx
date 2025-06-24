import React from 'react'
import Avatar from '../assets/images/user.jpg'
import styles from "../components/User.module.css"
import { useNavigate } from 'react-router-dom'




const User = () => {
    const navigate = useNavigate("")
    const handleLogOut = ()=>{
        navigate("/")
    }

  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div className={styles.image}>
            <img src={Avatar}/>
            <p>Welcome, Susan</p>
            <button className={styles.button} onClick={handleLogOut}>LOGOUT</button>
        </div>
        
      </div>
    </div>
  )
}

export default User
