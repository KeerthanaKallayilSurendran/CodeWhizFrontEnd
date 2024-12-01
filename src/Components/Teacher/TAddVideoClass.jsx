import React from 'react'
import courseImg from '../../assets/course.png'
import TAddVideo from './TAddVideo'
const TAddVideoClass = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center p-5'>
        <div className='header-bg w-4/5 rounded-2xl h-64 flex justify-evenly items-center'>
            <h1 className='text-5xl font-bold text-[#A138BE]'>Courses</h1>
            <img width={"250px"} src={courseImg} alt="" />
        </div>
        <div className='w-4/5 flex justify-end pe-5 pt-5'>
            <TAddVideo />
        </div>
    </div>
  )
}

export default TAddVideoClass