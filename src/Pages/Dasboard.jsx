import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import TDashboardHome from '../Components/Teacher/TDashboardHome'
import SDashboard from '../Components/Student/SDashboard'
const Dasboard = () => {
  const [userRole, setUserRole] = useState("")
  useEffect(()=>{
    
    setUserRole(JSON.parse(sessionStorage.getItem("user")).userType)
    
  },[])
  console.log(userRole);

  return (
    <>
      <Header />
      {
        userRole == 'Instructor'?
        <TDashboardHome />
        :
        <SDashboard/>
      }
      
    </>
  )
}

export default Dasboard