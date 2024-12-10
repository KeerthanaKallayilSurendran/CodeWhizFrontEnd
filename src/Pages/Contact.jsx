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
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31432.778979753897!2d76.33003834228552!3d10.008815363554852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1733836953613!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                    ></iframe>

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
                                        <i className="fa-solid fa-envelope text-white text-9xl"></i>
                                    </div>
                                </div>
                                <div className='w-full '>
                                    <p className='text-xl text-gray-600'>E-mail</p>
                                    <h1 className='text-3xl font-bold'>codewhiz399@gmail.com</h1>
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