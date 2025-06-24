import React from 'react'
import styles from "./CityShow.module.css"

const CityShow = () => {
  return (
    <div className={styles.city}>
      <div className={styles.date}>
        <p>YOU WENT TO CITIES ON</p>
        <h3>day, date</h3>
      </div>
      <div className={styles.more}>
        <p>LEARN MORE</p>
        <div className={styles.wiki}>
        <a href='#'>Check out on Wikipedia</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
        </div>
      </div>
      <button className={styles.click}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left-icon lucide-move-left"><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg>
        <h3>BACK</h3>
      </button>
    </div>
  )
}

export default CityShow
