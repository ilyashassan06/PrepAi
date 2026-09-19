import React from 'react'
import { useAuth } from '../Context/AuthContext'
import LoadingScreen from '../components/LoadingScreen'
import { NavLink } from 'react-router-dom'
import DetailsGrid from '../components/DetailsGrid/DetailsGrid'
import QuickAction from '../components/QuickAction/QuickAction'

function Home() {

  const {currentUser,userData,logout,loading} = useAuth()

  
          if(loading || (currentUser && !userData)){
    return(
      <div className="flex min-h-[calc(100vh-64px)] w-full items-center justify-center">
        
        <LoadingScreen />

      </div>
    )
  }
  
  return (
    <div className="w-full  flex flex-col gap-5 p-5 md:px-10 md:py-10z ">
      
    <h1 className='md:text-3xl mb-4 text-1xl'>Welcome Back <span className="text-violet-500 font-bold">{userData.name}</span>! &#9995;</h1>
     <DetailsGrid />
     <QuickAction/>
    </div>
  )
}

export default Home