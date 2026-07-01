import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import InterviewSetup from "./pages/InterviewSetup"
import Interview from "./pages/Interview"
import Result from "./pages/Result"
import History from "./pages/History"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"




function App() {
 

  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
    </Routes>


      <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/InterviewSetup" element={<InterviewSetup/>} />
        <Route path="/Interview" element={<Interview/>} />
        <Route path="/Result" element={<Result/>} />
        <Route path="/History" element={<History/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
