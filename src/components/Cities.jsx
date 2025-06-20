import React from 'react'
import styles from '../components/Cities.module.css'
import Form from './CityForm'
import WorldMap from './Map'

const Cities = () => {
  return (
    <div className={styles.container}>
      <div className={styles.city}>
        <Form />
      </div>
      <div className={styles.map}>
        <WorldMap />
      </div>
    </div>
  )
}

export default Cities
