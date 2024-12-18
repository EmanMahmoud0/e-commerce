import React from 'react'
import style from  './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <div className="container py-16">
        <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  )
}

