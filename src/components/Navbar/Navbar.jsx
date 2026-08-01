import React, { useState } from "react";
import {
  Bell,
  Menu,
  X,
  LayoutDashboard,
  ClipboardList,
  History,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `group relative flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
      isActive
        ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
        : "text-slate-300 hover:bg-violet-600/10 hover:text-white"
    }`;

  return (
    <header className="md:hidden sticky top-0 z-50 border-b border-[#2A3250] bg-[#090B18]/90 backdrop-blur-lg">

      {/* Top Navbar */}
      <div className="h-[68px] px-4 flex items-center justify-between">

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl p-2 transition hover:bg-violet-600/20"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-lg font-bold shadow-lg shadow-violet-600/30">
            IQ
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight">
              Prep
              <span className="text-violet-500">Ai</span>
            </h2>

            <p className="text-[10px] text-slate-400">
              Interview Assistant
            </p>
          </div>

        </div>

        {/* Notification */}
        <button className="relative rounded-xl p-2 transition hover:bg-violet-600/20">

          <Bell size={22} />

          <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-violet-500 ring-2 ring-[#090B18]" />

        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-96 border-t border-[#2A3250]"
            : "max-h-0"
        }`}
      >
        <div className="bg-[#10162A] p-4">

          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Menu
          </p>

          <nav className="space-y-2">

            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 h-8 w-1 rounded-r-full bg-violet-400" />
                  )}
                  <LayoutDashboard size={20} />
                  Dashboard
                </>
              )}
            </NavLink>

            <NavLink
              to="/Interview"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 h-8 w-1 rounded-r-full bg-violet-400" />
                  )}
                  <ClipboardList size={20} />
                  New Interview
                </>
              )}
            </NavLink>

            <NavLink
              to="/History"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 h-8 w-1 rounded-r-full bg-violet-400" />
                  )}
                  <History size={20} />
                  History
                </>
              )}
            </NavLink>

          </nav>

        </div>
      </div>

    </header>
  );
}

export default MobileNavbar;