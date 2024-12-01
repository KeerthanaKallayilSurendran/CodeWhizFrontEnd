import React, { useEffect, useState } from 'react'
import CourseImg from '../../assets/course.png'
import TeacherAddCourse from './TeacherAddCourse';

import TAddCateogry from './TAddCateogry';
import { courseCategoryViewApi } from '../../Service/allApi';
import TViewCourses from './TViewCourses';


const TeacherCourses = () => {
  const [courseAllCategory, setCourseAllCategory] = useState([])
  useEffect(()=>{
    getAllCategory()
  },[])
  
  const getAllCategory = async() =>{
    console.log("Inside get all category");
    const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
           "Authorization": `Bearer ${token}`
        }
        try {
          const result = await courseCategoryViewApi(reqHeader)
          if(result.status==200){
            setCourseAllCategory(result.data)
          }
        } catch (error) {
          console.log(error);
        }
      }
    
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='header-bg w-4/5 rounded-2xl h-64 flex justify-evenly items-center'>
            <h1 className='text-5xl font-bold text-[#A138BE]'>Courses</h1>
            <img width={"250px"} src={CourseImg} alt="" />
        </div>
        <div className='w-4/5 flex justify-end pe-5 pt-5'>
            <TAddCateogry />
        </div>
        <div className='w-4/5 flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold pb-5'>All Courses</h1>

          {
            courseAllCategory?.length>0?
              courseAllCategory.map(category=>(
                <div className='w-full rounded shadow p-5 border border-zinc-400 mt-5'>
                 <div className='flex justify-between'> 
                  <h1 className='text-3xl font-bold text-[#A138EB]'>{category?.categoryName}</h1>
                  <TeacherAddCourse categoryId={category._id} categoryName={category.categoryName} />
                </div>
                  <TViewCourses categoryId={category._id} />
                </div>
              ))
            :
            <div className='flex justify-center items-center'>
              <p className='text-lg font-bold'>No categories added yet !!!</p>
            </div>
          }
          
        </div>
    </div>
  )
}

export default TeacherCourses