import React from 'react'
import styles from "../pages/AppLayout.module.css"
import Map from "../components/Map"
import CityForm from "../components/CityForm"
import User from '../components/User'
import Cities from '../components/Cities'
import { Outlet } from 'react-router-dom'
import UserPosition from '../components/UserPosition'

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Cities/>
      <User/>
      <UserPosition/>
    </div>
  )
}

export default AppLayout
