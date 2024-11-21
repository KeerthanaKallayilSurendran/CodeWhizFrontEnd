import React from 'react'
import Header from '../Components/Header'
import ContactImg from '../assets/contact.png'
import { TextField } from '@mui/material'

const Contact = () => {
    return (
        <>
            <Header />
            <div className='w-full flex flex-col items-center pt-28'>
                <div className='header-bg w-4/5 rounded-2xl h-64 flex justify-evenly items-center'>
                    <h1 className='text-5xl font-bold text-[#A138BE]'>Contact Us</h1>
                    <img width={"250px"} src={ContactImg} alt="" />
                </div>
                <div className='grid xl:grid-cols-2 md:grid-cols-1 gap-5 w-4/5'>
                    <div className='w-full rounded-lg shadow p-5 mt-5'>
                        <h1 className='text-4xl font-bold mb-2'>Contact Us</h1>
                        <p className='text-xl text-gray-600'>Get in Touch with us</p>
                        <TextField sx={{ mb: 3 }} fullWidth id="firstname" label="FirstName" variant="standard" />
                        <TextField sx={{ mb: 3 }} fullWidth id="lastname" label="LastName" variant="standard" />
                        <TextField sx={{ mb: 3 }} fullWidth id="address" label="Address" variant="standard" />
                        <TextField sx={{ mb: 3 }} fullWidth id="phonenumber" label="Phone Number" variant="standard" />
                        <TextField sx={{ mb: 3 }} fullWidth multiline rows={4} id="message" label="Message" variant="standard" />
                        <button className='w-full bg-[#A138BE] text-white py-3 rounded-lg font-bold'>Send Message</button>

                    </div>
                    <div className='w-full p-5 mt-5 flex flex-col'>
                        <div style={{ height: "300px" }} className="w-full rounded-lg bg-[#A138bE]  relative">
                            <div style={{ height: "300px" }} className="bg-white absolute px-10 top-2 left-0 right-0 rounded-xl shadow flex justify-evenly items-center">
                                <div className='w-full'>
                                    <div className='w-44 h-44 rounded-full shadow bg-[#cb48f0] flex justify-center items-center'>
                                        <i className="fa-solid fa-headset text-white text-9xl"></i>
                                    </div>
                                </div>
                                <div className='w-full '>
                                    <p className='text-xl text-gray-600'>Phone Number</p>
                                    <h1 className='text-3xl font-bold'>(+91) 9946865521</h1>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: "300px" }} className="w-full rounded-lg bg-[#F4BEE9] mt-5  relative">
                            <div style={{ height: "300px" }} className="bg-white absolute px-10 top-2 left-0 right-0 rounded-xl shadow flex justify-evenly items-center">
                                <div className='w-full'>
                                    <div className='w-44 h-44 rounded-full shadow bg-[#cb48f0] flex justify-center items-center'>
                                        <i className="fa-solid fa-headset text-white text-9xl"></i>
                                    </div>
                                </div>
                                <div className='w-full '>
                                    <p className='text-xl text-gray-600'>Phone Number</p>
                                    <h1 className='text-3xl font-bold'>(+91) 9946865521</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Contact