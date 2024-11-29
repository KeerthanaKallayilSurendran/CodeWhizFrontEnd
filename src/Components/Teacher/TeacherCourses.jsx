import React, { useState } from 'react'
import CourseImg from '../../assets/course.png'
import TeacherAddCourse from './TeacherAddCourse';


const TeacherCourses = () => {

  

  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='header-bg w-4/5 rounded-2xl h-64 flex justify-evenly items-center'>
            <h1 className='text-5xl font-bold text-[#A138BE]'>Courses</h1>
            <img width={"250px"} src={CourseImg} alt="" />
        </div>
        <div className='w-4/5 flex justify-end pe-5 pt-5'>
            <TeacherAddCourse />
        </div>
        <div className='w-4/5 flex flex-col items-center'>
            <h1 className='text-4xl font-bold'>All Courses</h1>
            
        </div>
    </div>
  )
}

export default TeacherCourses