import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Layout = () => {
  return (
    <div className='app-container'>
      <Header />
      <main className='main-content'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
