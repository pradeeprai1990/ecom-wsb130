import React from 'react'
import Header from '../comman/Header'
import Footer from '../comman/Footer'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
       
    </div>
  )
}
