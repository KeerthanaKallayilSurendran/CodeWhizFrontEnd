import React, { useEffect, useState } from 'react'
import { getStudentAllCourseApi } from '../../Service/allApi'
import CourseImg from '../../assets/course.png'
import SERVER_URL from '../../Service/serverUrl'
import { useNavigate } from 'react-router-dom'


const SCourses = () => {
    const [studentAllCourses, setStudentAllCourses] = useState([])
    useEffect(()=>{
        getStudentAllCourse()
    },[])
    const navigate = useNavigate()
    const getStudentAllCourse = async() =>{
        console.log("Inside get student all category");
        const token = sessionStorage.getItem("token")
        const user=JSON.parse(sessionStorage.getItem("user"))
        const userId = user._id
        
          if(token){
            const reqHeader = {
               "Authorization": `Bearer ${token}`
            }
            try {
              const result = await getStudentAllCourseApi(userId, reqHeader)
              if(result.status==200){
                setStudentAllCourses(result.data)
              }
            } catch (error) {
              console.log(error);
            }
          }
        
      }
      // console.log(studentAllCourses);
      const handleViewClick = (courseId) => {
        // Navigate to the course detail page
        navigate(`/scourses/${courseId}`);
      };
      
  return (
    <div>
        <div className='w-full flex flex-col items-center pt-28'>
                <div className='header-bg w-4/5 rounded-2xl h-64 flex justify-evenly items-center'>
                    <h1 className='text-5xl font-bold text-[#A138BE]'>Courses</h1>
                    <img width={"250px"} src={CourseImg} alt="" />
                </div>
                <div className='grid w-4/5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-10'>
                    {
                        studentAllCourses?.length>0?
                        studentAllCourses.map(course=>(
                            <div key={course?._id} className='w-96 flex items-start flex-col rounded mt-2 shadow '>
                                <div><img width={"200px"} className='rounded' src={`${SERVER_URL}/uploads/images/${course?.courseImg}`} alt="" /></div>
                                <div className='w-full p-2'>
                                    <h1 className='text-2xl font-bold py-2 px-5'>{course?.courseName}</h1>
                                    <p className='text-xl font-semibold text-gray-600 py-2 px-5'>{course?.description}</p>
                                    <div className='w-full flex justify-between items-center py-2 px-5'>
                                        <button onClick={() => handleViewClick(course?._id)}  className='px-3 py-2 bg-[#A138BE] text-white font-bold rounded-md'>View</button>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <div className='flex justify-center items-center' style={{height:"50vh", width:"70vw"}}>
                            <p className='text-red-600 font-bold text-2xl'>*No Courses Available</p>
                        </div>
                    }
                </div>
            </div>
    </div>
  )
}

export default SCourses