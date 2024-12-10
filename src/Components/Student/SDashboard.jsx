import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SCourses from './SCourses'

const SDashboard = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("home")
  const [userName, setUserName] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      setUserName(JSON.parse(sessionStorage.getItem("user")).username.split(" ")[0])
    }else{
      setUserName(" ")
    }
  },[])
  console.log(userName);
  
  const logout = ()=>{
    sessionStorage.clear()
    navigate('/')
  }
  
  const renderActiveTab = () =>{
    switch(activeTab){
      case "home":
        return <div style={{height: "80vh"}} className='flex justify-center items-center'>
         <h1 className='font-bold text-5xl'> Welcome <span className='text-[#A138EB]'>{userName},</span></h1>
        </div>
      case "course":
        return <SCourses />
      default:
    }
  }
  return (
    <div className='w-full flex justify-center items-center flex-col pt-24'>
        <div className='flex justify-between items-center w-2/5 h-12 px-5'>
            <button onClick={()=>setActiveTab('home')} className='hover:underline decoration-[#A138EB] decoration-2 hover:text-[#A138EB]  font-bold px-2 py-1 rounded '><i className="fa-solid fa-house pe-2"></i>Home</button>
            <button onClick={()=>setActiveTab('course')} className='hover:underline decoration-[#A138EB] decoration-2 hover:text-[#A138EB]  font-bold px-2 py-1 rounded '><i className="fa-solid fa-chalkboard-user pe-2"></i>Courses</button>
            <button onClick={logout} className='hover:underline decoration-[#A138EB] decoration-2 hover:text-[#A138EB]  font-bold px-2 py-1 rounded '><i className="fa-solid fa-right-from-bracket pe-2"></i>Logout</button>
        </div>
        <div className='w-full'>
          {renderActiveTab()}
        </div>
    </div>
  )
}

export default SDashboard