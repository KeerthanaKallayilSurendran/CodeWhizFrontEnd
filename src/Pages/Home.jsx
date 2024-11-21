import React, { useState } from 'react'
import Header from '../Components/Header'
import BANNERIMG from '../assets/bannerimg.png'
import WEB from '../assets/Categories/web.png'
import DATA from '../assets/Categories/data.png'
import AI from '../assets/Categories/ai.png'
import UI from '../assets/Categories/uiux.png'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import Mission from '../assets/mission.png'
import IMG1 from '../assets/instructors/profile1.jpg'
import IMG2 from '../assets/instructors/profile2.jpg'
import IMG3 from '../assets/instructors/profile3.jpg'
import IMG4 from '../assets/instructors/profile4.jpg'

const Home = () => {
  const [counterOn, setCounterOn] = useState(false)
  return (
    <>
      <Header />
      {/* Banner Section */}
      <div className='pt-24 banner flex justify-evenly items-center'>
        <h1 className='text-white font-bold text-5xl text-center'>Code Your Future, <br /> One Line at a Time!</h1>
        <img style={{ height: "500px " }} src={BANNERIMG} alt="" />
      </div>

      {/* Categories */}
      <div className='flex justify-center pt-10 flex-col items-center mb-5'>
        <h1 className='text-4xl font-bold text-[#A138EB]'>Explore Our Categories</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          <div className=' rounded shadow-md flex flex-col items-center w-72 h-60 mt-5'>
            <div className='w-24 h-24 rounded-full bg-[#a038eb69] p-2 my-7'><img src={WEB} alt="" /></div>
            <h1 className='text-xl font-bold text-center'>Web Developement</h1>
            <p className='text-lg font-bold text-gray-500'>4 Courses</p>
          </div>
          <div className=' rounded shadow-md flex flex-col items-center w-72 h-60 mt-5'>
            <div className='w-24 h-24 rounded-full bg-[#a038eb69] p-2 my-7'><img src={DATA} alt="" /></div>
            <h1 className='text-xl font-bold text-center'>Data Science</h1>
            <p className='text-lg font-bold text-gray-500'>2 Courses</p>
          </div>
          <div className=' rounded shadow-md flex flex-col items-center w-72 h-60 mt-5'>
            <div className='w-24 h-24 rounded-full bg-[#a038eb69] p-2 my-7'><img src={AI} alt="" /></div>
            <h1 className='text-xl font-bold text-center'>Artificial Intelligence</h1>
            <p className='text-lg font-bold text-gray-500'>2 Courses</p>
          </div>
          <div className=' rounded shadow-md flex flex-col items-center w-72 h-60 mt-5'>
            <div className='w-24 h-24 rounded-full bg-[#a038eb69] p-2 my-7'><img src={UI} alt="" /></div>
            <h1 className='text-xl font-bold text-center'>UI/UX</h1>
            <p className='text-lg font-bold text-gray-500'>2 Courses</p>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className='w-full flex justify-evenly items-center px-16'>
        <div className='w-2/4'>
          <img width={"800px"} src={Mission} alt="" />
        </div>
        <div className='w-2/4'>
          <p className='text-2xl leading-10 text-justify pe-5 mb-5'>At <b>CodeWhiz</b>, we empower learners and creators to master the art of technology and design. Whether you're diving into web development, exploring the transformative world of artificial intelligence, uncovering insights in data science, or crafting beautiful and intuitive UI/UX designs, we’re here to guide you every step of the way.</p>
          <p className='text-2xl leading-10 text-justify pe-5'>Our <b>mission</b> is to provide a platform where curious minds meet innovative learning. With industry-expert instructors, hands-on projects, and a community of like-minded learners, CodeWhiz offers an engaging, practical, and cutting-edge approach to mastering today’s most sought-after skills.</p>
        </div>
      </div>

      {/* Instructors */}
      <div className='flex justify-center pt-10 flex-col items-center mb-5'>
        <h1 className='text-4xl font-bold text-[#A138EB] mb-5'>Our Instructors</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
          <div className='flex justify-center flex-col items-center'>
            <img className='w-40 h-52 mb-2 rounded-full object-cover object-center' src={IMG1} alt="" />
            <h1 className='text-xl font-bold '>Ellis Clever</h1>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <img className='w-40 h-52 mb-2 rounded-full object-cover object-center' src={IMG2} alt="" />
            <h1 className='text-xl font-bold '>William Archer</h1>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <img className='w-40 h-52 mb-2 rounded-full object-cover object-center' src={IMG3} alt="" />
            <h1 className='text-xl font-bold '>Emmett Jack</h1>
          </div>
          <div className='flex justify-center flex-col items-center'>
            <img className='w-40 h-52 mb-2 rounded-full object-cover object-center' src={IMG4} alt="" />
            <h1 className='text-xl font-bold '>Sawyer</h1>
          </div>
        </div>
      </div>

      {/* Counter */}
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className='w-full h-64 bg-black text-white font-bold flex justify-evenly items-center'>
          {
            counterOn &&
            <div className='flex flex-col items-center'>
              <h1 className='text-8xl'><CountUp start={0} end={500} duration={2} delay={0} />+</h1>
              <p className='text-lg text-gray-600 '>Students Enrolled</p>
            </div>
          }
          {
            counterOn &&
            <div className='flex flex-col items-center'>
              <h1 className='text-8xl'><CountUp start={0} end={50} duration={2} delay={0} />+</h1>
              <p className='text-lg text-gray-600 '>Courses</p>
            </div>
          }
          {
            counterOn &&
            <div className='flex flex-col items-center'>
              <h1 className='text-8xl'><CountUp start={0} end={20} duration={2} delay={0} />+</h1>
              <p className='text-2xl text-gray-600 '>Instructors</p>
            </div>
          }
        </div>
      </ScrollTrigger>


      {/* Review */}
      <div className='flex justify-center pt-10 flex-col items-center mb-5'>
        <h1 className='text-4xl font-bold text-[#A138EB] mb-5'>Student Reviews</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          <div className='w-80 h-64 shadow rounded flex flex-col justify-center items-center p-5'>
            <h1 className='text-xl font-bold text-[#A138EB] '>Priya S</h1>
            <p className='text-gray-400 font-bold text-lg'>Frontend Developer</p>
            <p className='text-justify'>CodeWhiz has completely transformed the way I learn. The courses are easy to follow, yet incredibly insightful. The hands-on projects really helped me understand web development in depth!</p>
            <div className="d-flex justify-content-center">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-regular fa-star text-yellow-500"></i>
            </div>
          </div>
          <div className='w-80 h-64 shadow rounded flex flex-col justify-center items-center p-5'>
            <h1 className='text-xl font-bold text-[#A138EB] '>Rahul D</h1>
            <p className='text-gray-400 font-bold text-lg'>Software Engineer</p>
            <p className='text-justify'>I’ve tried other platforms, but CodeWhiz stands out for its community. Everyone—from the mentors to fellow students—is supportive and encouraging. It’s the best platform for beginners and pros alike</p>
            <div className="d-flex justify-content-center">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-regular fa-star text-yellow-500"></i>
            </div>
          </div>
          <div className='w-80 h-64 shadow rounded flex flex-col justify-center items-center p-5'>
            <h1 className='text-xl font-bold text-[#A138EB] '>James R</h1>
            <p className='text-gray-400 font-bold text-lg'>Data Scientist</p>
            <p className='text-justify'>I wanted to break into AI but didn’t know where to start. The structured courses and real-world examples at CodeWhiz made it not just possible but enjoyable!</p>
            <div className="d-flex justify-content-center">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-regular fa-star text-yellow-500"></i>
            </div>
          </div>
          <div className='w-80 h-64 shadow rounded flex flex-col justify-center items-center p-5'>
            <h1 className='text-xl font-bold text-[#A138EB] '>Amira K</h1>
            <p className='text-gray-400 font-bold text-lg'>UI/UX Designer</p>
            <p className='text-justify'>Learning at CodeWhiz felt like a personal journey. The instructors are so approachable, and the interactive design lessons really brought out my creative side.</p>
            <div className="d-flex justify-content-center">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
    </>
  )
}

export default Home