import {
  LayoutDashboard,
  ClipboardList,
  History,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function SideBar() {
  const navLinkClass = ({ isActive }) =>
    `group relative flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
      isActive
        ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
        : "text-slate-300 hover:bg-violet-600/10 hover:text-white"
    }`;

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col bg-[#10162A] border-r border-[#2A3250] px-5 py-6">

      {/* Logo */}
      <div className="flex items-center gap-3 pb-8 border-b border-[#2A3250]">

        <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-violet-500 to-purple-700 flex items-center justify-center text-xl font-bold shadow-lg shadow-violet-600/30">
          IQ
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Prep
            <span className="text-violet-500">Ai</span>
          </h2>

          <p className="text-xs text-slate-400">
            Interview Assistant
          </p>
        </div>

      </div>

      {/* Menu */}
      <div className="mt-8">

        <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Menu
        </p>

        <nav className="space-y-2">

          <NavLink to="/" className={navLinkClass}>

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

          <NavLink to="/Interview" className={navLinkClass}>

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

          <NavLink to="/History" className={navLinkClass}>

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

      {/* Bottom Card */}
      <div className="mt-auto rounded-2xl bg-linear-to-br from-violet-600/20 to-purple-700/10 border border-violet-500/20 p-5">

        <h3 className="font-semibold">
          Upgrade to Pro
        </h3>

        <p className="mt-2 text-sm text-slate-300">
          Unlock unlimited AI interviews and premium analytics.
        </p>

        <button className="mt-4 w-full rounded-xl bg-violet-600 py-2.5 font-medium hover:bg-violet-700 transition">
          Upgrade
        </button>

      </div>

    </aside>
  );
}

export default SideBar;