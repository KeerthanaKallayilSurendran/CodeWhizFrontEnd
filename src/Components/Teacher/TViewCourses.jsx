import React, { useEffect, useState } from 'react'
import { userCourseViewApi, userDeleteCourseApi } from '../../Service/allApi';
import SERVER_URL from '../../Service/serverUrl';
import TEditCourse from './TEditCourse';
import TAddVideoClass from './TAddVideoClass';
import { useNavigate } from 'react-router-dom';

const TViewCourses = ({categoryId}) => {
    const [userCourse, setUserCourse] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
      getUserAllCourse()
    },[])
  
    const getUserAllCourse = async() =>{
      const token = sessionStorage.getItem("token")
      categoryId = categoryId.toString()
    //   console.log(categoryId);
      
      if(token){
        const reqHeader = {
           "Authorization": `Bearer ${token}`
        }
        try {
          const result = await userCourseViewApi(categoryId, reqHeader)
          if(result.status==200){
            setUserCourse(result.data)
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    const deleteCourse = async(id)=>{
        console.log("Inside delete course");
        const token = sessionStorage.getItem("token")
        // console.log(token);
        
        if(token){
            const reqHeader={
                "Authorization": `Bearer ${token}`
            }
            try {
                 const result = await userDeleteCourseApi(id, reqHeader)
                 if(result.status==200){
                     alert("Course Deleted Successfully")
                     getUserAllCourse()
                 }
            } catch (error) {
                console.log(error);
                
            }
        }
        
    }

    const handleAddClassClick = async(courseId)=>{
      navigate(`/add-class/${courseId}`)
    }

  return (
    <div className='w-4/5 flex flex-col items-center justify-center'>
            <div className='w-4/5 flex flex-wrap justify-center gap-6 pt-5'>
              {
                userCourse?.length>0?
                  userCourse.map(course=>(
                    <div className='w-80 flex items-center justify-center flex-col rounded mt-2 shadow mb-5'>
                    {/* Course Image */}
                    <div>
                      <img
                        style={{ height: '180px', width: '320px' }}
                        className='rounded object-cover object-center'
                        src={`${SERVER_URL}/uploads/images/${course?.courseImg}`}
                        alt={course?.courseName || 'Course Image'}
                      />
                    </div>
                    <div className='w-full flex flex-col justify-center items-center p-5'>
                      <h1 className='text-2xl font-bold'>{course?.courseName}</h1>
                      <div className='w-full flex justify-between pt-5'>
                      <button onClick={()=>handleAddClassClick(course?._id)} className='bg-[#A138EB] px-2 py-1 rounded text-white font-bold'>Add Class</button>
                        <TEditCourse />
                        <button onClick={()=>deleteCourse(course?._id)} className='bg-[#A138EB] px-2 py-1 rounded text-white font-bold'>Delete</button>
                      </div>
                    </div>
                    
                  </div>
                  ))
                :
                  <div className='text-center mt-5'>
                    <p className='text-lg font-semibold text-gray-500'>No courses available</p>
                  </div>
              }
            </div>
        </div>
  )
}

export default TViewCourses