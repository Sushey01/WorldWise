import React from 'react'
import Avatar from '../assets/images/user.jpg'
import styles from "../components/User.module.css"

const User = () => {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div className={styles.image}>
            <img src={Avatar}/>
            <p>Welcome, Jack</p>
            <button className={styles.button}>LOGOUT</button>
        </div>
        
      </div>
    </div>
  )
}

export default User
