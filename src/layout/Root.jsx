import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from "../components/header/navber/Navber"
import Footer from "../components/footer/Footer"

const Root = () => {
  return (
    <div>
        <Navber />
         <Outlet />
        <Footer /> 
    </div>
  )
}

export default Root