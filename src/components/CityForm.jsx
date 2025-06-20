import React from 'react'
import styles from "../components/CityForm.module.css"
import { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState("")

  return (
    <div className={styles.form}>
      <div className={styles.city}>
        <p>City name</p>
        
            <input
            type='text'
            placeholder=''
            className={styles.userInput}
            value={formData}

            />

            <p>When did you go to ?</p>
        
            <input
            type='text'
            placeholder=''
            className={styles.userInput}
            value={formData}

            />

            <p>Notes about your trip to</p>
        
            <textarea
            type='text'
            placeholder=''
            className={styles.userInput1}
            value={formData}

            />
            <div className={styles.buttons}>
            <button className={styles.add}>ADD</button>
            <button className={styles.back}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left-icon lucide-move-left"><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg>
              BACK</button>

            </div>
       

      </div>
    </div>
  )
}

export default Form
