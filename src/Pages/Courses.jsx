import React from 'react'
import Header from '../Components/Header'
import CourseImg from '../assets/course.png'
import CImg from '../assets/cimg.jpg'
const Courses = () => {
    return (
        <>
            <Header />
            <div className='w-full flex flex-col items-center pt-28'>
                <div className='header-bg w-4/5 rounded-2xl h-64 flex justify-evenly items-center'>
                    <h1 className='text-5xl font-bold text-[#A138BE]'>Courses</h1>
                    <img width={"250px"} src={CourseImg} alt="" />
                </div>
                <div className='grid w-4/5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-10'>
                    <div className='w-96 flex items-start flex-col rounded mt-2 shadow '>
                        <div><img className='rounded' src={CImg} alt="" /></div>
                        <div className='p-2'>
                            <h1 className='text-2xl font-bold py-2'>MERN Stack Developement</h1>
                            <p className='text-xl font-semibold text-gray-600 py-2'>12 Lessons</p>
                            <div className='flex justify-between items-center py-2'>
                                <p className='text-xl font-bold'>$46</p> 
                                <button className='px-3 py-2 bg-[#A138BE] text-white font-bold rounded-md'>Enroll Now</button>
                            </div>
                        </div>
                       
                    </div>
                    <div className='w-96 flex items-start flex-col rounded mt-2 shadow '>
                        <div><img className='rounded' src={CImg} alt="" /></div>
                        <div className='p-2'>
                            <h1 className='text-2xl font-bold py-2'>MERN Stack Developement</h1>
                            <p className='text-xl font-semibold text-gray-600 py-2'>12 Lessons</p>
                            <div className='flex justify-between items-center py-2'>
                                <p className='text-xl font-bold'>$46</p> 
                                <button className='px-3 py-2 bg-[#A138BE] text-white font-bold rounded-md'>Enroll Now</button>
                            </div>
                        </div>
                       
                    </div>
                    <div className='w-96 flex items-start flex-col rounded mt-2 shadow '>
                        <div><img className='rounded' src={CImg} alt="" /></div>
                        <div className='p-2'>
                            <h1 className='text-2xl font-bold py-2'>MERN Stack Developement</h1>
                            <p className='text-xl font-semibold text-gray-600 py-2'>12 Lessons</p>
                            <div className='flex justify-between items-center py-2'>
                                <p className='text-xl font-bold'>$46</p> 
                                <button className='px-3 py-2 bg-[#A138BE] text-white font-bold rounded-md'>Enroll Now</button>
                            </div>
                        </div>
                       
                    </div>
                    <div className='w-96 flex items-start flex-col rounded mt-2 shadow '>
                        <div><img className='rounded' src={CImg} alt="" /></div>
                        <div className='p-2'>
                            <h1 className='text-2xl font-bold py-2'>MERN Stack Developement</h1>
                            <p className='text-xl font-semibold text-gray-600 py-2'>12 Lessons</p>
                            <div className='flex justify-between items-center py-2'>
                                <p className='text-xl font-bold'>$46</p> 
                                <button className='px-3 py-2 bg-[#A138BE] text-white font-bold rounded-md'>Enroll Now</button>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses