import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar";

function Layout() {
  return (
    <div className="min-h-screen flex bg-[#080B1A] text-white">

      {/* =====================================================
          SIDEBAR
          Fixed 256px wide on desktop.
          Hidden on mobile inside the SideBar component.
      ====================================================== */}
      <SideBar />


      {/* =====================================================
          MAIN APPLICATION AREA
          md:ml-64 = 256px space for the sidebar
      ====================================================== */}
      <div className="flex min-h-screen flex-1 flex-col md:ml-64">

        {/* ================= Navbar ================= */}
        <Navbar />


        {/* ================= Page Content ================= */}
        <main className="flex-1 overflow-y-auto">

          {/* 
            Outlet renders:
            Home
            InterviewSetup
            Interview
            History
            etc.
          */}
          <Outlet />

        </main>


        {/* ================= Footer ================= */}
        <Footer />

      </div>

    </div>
  );
}

export default Layout;