import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import InterviewSetup from "./pages/InterviewSetup";
import Interview from "./pages/Interview";
import Result from "./pages/Result";
import History from "./pages/History";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Layout from "./Layout";
import ProtectedRoute from "./Context/ProtectedRoute";

function App() {
  return (
    <div className="relative w-full  overflow-hidden  bg-slate-950 text-white">

 
  <div className="pointer-events-none absolute inset-0 z-0">

    <div className="absolute top-20 left-16 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />

    <div className="absolute top-1/3 right-20 h-96 w-96 rounded-full bg-blue-500/15 blur-[170px]" />

    <div className="absolute bottom-10 left-1/4 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-[160px]" />

    <div className="absolute bottom-32 right-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-[130px]" />

  </div>

  {/* Content */}
  <div className="relative max-w-[1600px] mx-auto  z-10 min-h-screen">
    <Routes>
      <Route element={<ProtectedRoute />}>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/InterviewSetup" element={<InterviewSetup />} />
      <Route path="/Interview" element={<Interview />} />
      <Route path="/Result" element={<Result />} />
      <Route path="/History" element={<History />} />
    </Route>
  </Route>

      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  </div>

</div>
  );
}

export default App;
