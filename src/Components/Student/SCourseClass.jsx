import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { sCourseVideoClassViewApi } from '../../Service/allApi';
import { Box, Modal } from '@mui/material';
import courseImg from '../../assets/course.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    height:"60vh",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:'10px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };
  

const SCourseClass = () => {
    const {courseId} = useParams()
    console.log(courseId);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true)
      
    };
    const handleClose = () => setOpen(false)
    
  const [courseVideoClass, setCourseVideoClass] = useState([])
  useEffect(()=>{
    getCourseVideoClass()
  },[])
    const getCourseVideoClass = async() =>{
        const token = sessionStorage.getItem("token")
        
        if(token){
          const reqHeader = {
             "Authorization": `Bearer ${token}`
          }
          try {
            const result = await sCourseVideoClassViewApi(courseId, reqHeader)
            if(result.status==200){
              setCourseVideoClass(result.data)
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
  return (
    <div className='w-full flex flex-col justify-center items-center p-5'>
      <div className='header-bg w-4/5 rounded-2xl h-64 flex justify-evenly items-center'>
          <h1 className='text-5xl font-bold text-[#A138BE]'>Courses</h1>
          <img width={"250px"} src={courseImg} alt="" />
      </div>
        <div className='w-4/5 flex flex-wrap justify-center gap-6 pt-5'>
       {
        courseVideoClass?.length>0?
          courseVideoClass.map(video=>(
            <div className='w-80 flex items-center justify-center flex-col rounded mt-2 shadow mb-5'>
            <div>
              <img
                onClick={handleOpen}
                style={{ height: '180px', width: '320px' }}
                className='rounded object-cover object-center'
                src={video?.thumbnailUrl}
                alt=''
              />
            </div>
            <h1>{video?.classTitle}</h1>
            <div className='w-full flex flex-col justify-center items-center p-5'>
                <button onClick={()=>deleteVideo(video?._id)} className='bg-[#A138EB] px-2 py-1 rounded text-white font-bold'>Delete</button>
            </div>

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
            <iframe width="100%" height="90%" src={`${video?.videoLink}?autoplay=1`} title="caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              <div className='pt-5'>
              <button onClick={handleClose} className='text-md px-3 py-1 rounded m-2 bg-red-700 text-white font-bold'>Cancel</button>
              </div>

            </Box>
          </Modal>
            
          </div>
          ))
          :
          <div className='text-center mt-5'>
          <p className='text-2xl text-red-700 font-semibold'>Classes not uploaded yet!!!</p>
        </div>
       }
        
      </div>
    </div>
  )
}

export default SCourseClass