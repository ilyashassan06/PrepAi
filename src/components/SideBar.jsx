import {
  LayoutDashboard,
  ClipboardList,
  History,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function SideBar() {
  const { logout } = useAuth();

  const navLinkClass = ({ isActive }) =>
    `group relative flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium transition-all duration-300 ${
      isActive
        ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
        : "text-slate-300 hover:bg-violet-600/10 hover:text-white"
    }`;

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        hidden
        h-screen
        w-64
        flex-col
        border-r
        border-[#2A3250]
        bg-[#10162A]
        px-5
        py-6
        md:flex
      "
    >

      {/* ================= Logo ================= */}
      <div className="flex items-center gap-3 border-b border-[#2A3250] pb-7">

        {/* Logo Icon */}
        <div
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-violet-500
            to-purple-700
            text-xl
            font-bold
            text-white
            shadow-lg
            shadow-violet-600/30
          "
        >
          IQ
        </div>

        {/* Logo Text */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Prep
            <span className="text-violet-500">AI</span>
          </h2>

          <p className="text-xs text-slate-400">
            Interview Assistant
          </p>
        </div>

      </div>

      {/* ================= Menu ================= */}
      <div className="mt-6">

        <p
          className="
            mb-3
            px-2
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-slate-500
          "
        >
          Menu
        </p>

        <nav className="space-y-1.5">

          {/* Dashboard */}
          <NavLink
            to="/"
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span
                    className="
                      absolute
                      left-0
                      h-7
                      w-1
                      rounded-r-full
                      bg-violet-400
                    "
                  />
                )}

                <LayoutDashboard
                  size={19}
                  strokeWidth={2}
                />

                <span>Dashboard</span>
              </>
            )}
          </NavLink>

          {/* New Interview */}
          <NavLink
            to="/InterviewSetup"
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span
                    className="
                      absolute
                      left-0
                      h-7
                      w-1
                      rounded-r-full
                      bg-violet-400
                    "
                  />
                )}

                <ClipboardList
                  size={19}
                  strokeWidth={2}
                />

                <span>New Interview</span>
              </>
            )}
          </NavLink>

          {/* History */}
          <NavLink
            to="/History"
            className={navLinkClass}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span
                    className="
                      absolute
                      left-0
                      h-7
                      w-1
                      rounded-r-full
                      bg-violet-400
                    "
                  />
                )}

                <History
                  size={19}
                  strokeWidth={2}
                />

                <span>History</span>
              </>
            )}
          </NavLink>

        </nav>

      </div>

      {/* ================= Logout ================= */}
      <div className="mt-auto border-t border-[#2A3250] pt-5">

        <button
          onClick={logout}
          className="
            group
            flex
            w-full
            items-center
            justify-center
            gap-2.5
            rounded-xl
            border
            border-violet-700/70
            bg-transparent
            py-2.5
            text-sm
            font-semibold
            text-slate-200
            transition-all
            duration-300
            hover:border-violet-600
            hover:bg-violet-600
            hover:text-white
            hover:shadow-lg
            hover:shadow-violet-600/20
          "
        >
          <LogOut
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />

          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default SideBar;