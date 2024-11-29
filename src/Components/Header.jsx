import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    
    return (
        <div className='w-full fixed py-2 px-10 bg-[#A138EB] shadow-xl h-20 flex justify-between items-center'>
            <div>
                <img className='h-16' src={Logo} alt="" />
            </div>
            <div className='flex justify-between items-center list-none text-white font-bold'>
                
                {
                    sessionStorage.getItem("token")?
                    <>
                        <Link to={'/'}><li className='h-10 w-28 flex justify-center items-center rounded  hover:bg-white hover:text-[#A138EB] cursor-pointer me-2'>Home</li></Link>
                        <Link to={'/courses'}><li className='h-10 w-28 flex justify-center items-center rounded  hover:bg-white hover:text-[#A138EB] cursor-pointer me-2'>Courses</li></Link>
                        <Link to={'/dashboard'}><li className='h-10 w-28 flex justify-center items-center rounded  hover:bg-white hover:text-[#A138EB] cursor-pointer me-2'>Dashboard</li></Link>
                        <Link to={'/contact'}><li className='h-10 w-28 flex justify-center items-center rounded  hover:bg-white hover:text-[#A138EB] cursor-pointer me-2'>Contact</li></Link>
                    </>
                    :
                    <>
                        <Link to={'/login'}><button className='bg-white h-10 w-28 rounded text-[#A138EB] font-bold me-2'>Login</button></Link>
                        <Link to={'/register'}><button className='bg-white h-10 w-28 rounded text-[#A138EB] font-bold me-2'>Signup</button></Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Header


