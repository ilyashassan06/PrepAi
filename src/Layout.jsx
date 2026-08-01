import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import SideBar from './components/SideBar'

function Layout() {
  return (
    <div className="min-h-screen flex">
      <SideBar />

      <div className="flex flex-1 flex-col md:ml-64">
        <Navbar />

        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Layout