import { Box, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react'
import IMG from '../../assets/imgplace.png'
import { courseAddApi } from '../../Service/allApi';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:'10px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };
  
const TeacherAddCourse = ({categoryName}) => {

  
  const [courseDetails, setCourseDetails] = useState({
    courseName:"", description:"", category:categoryName, instructorName:"", price:"", courseImg:""
  })
  const [imgFileStatue, setImgFileStatue] = useState(false)
  const [preview, setPreview] = useState("")
  useEffect(()=>{
    if(courseDetails.courseImg.type == 'image/png' || courseDetails.courseImg.type == 'image/jpg' || courseDetails.courseImg.type == 'image/jpeg'){
      setImgFileStatue(true)
      setPreview(URL.createObjectURL(courseDetails.courseImg))
    }else{
      setImgFileStatue(false)
      setPreview("")
      setCourseDetails({...courseDetails, courseImg:""})
    }
  },[courseDetails.courseImg])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false)
    setCourseDetails({
      courseName:"", description:"", category:categoryName, price:"", instructorName:"", courseImg:""
    })
  }
  const handleAddCourse = async ()=>{
    const {courseName,description,category,instructorName,price,courseImg} = courseDetails
    if(courseName && description && category && instructorName && price && courseImg){
     // alert("procedd to api")
      const reqBody = new FormData()
      reqBody.append("courseName",courseName)
      reqBody.append("description",description)
      reqBody.append("category",category)
      reqBody.append("instructorName",instructorName)
      reqBody.append("price",price)
      reqBody.append("courseImg",courseImg)
      const token = sessionStorage.getItem("token")

      if(token){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }
        // api call
        try {
          const result = await courseAddApi(reqBody,reqHeader)
          if(result.status==200){
            alert("Course addedd successfully!!!")
            handleClose()
          }else{
            alert(result.response.data)
          }
        } catch (err) {
          console.log(err);
          
        }
        
      }

    }else{
      alert("Please fill the form completely!!!")
    }
  }
  

  return (
    <div>
        <button onClick={handleOpen}  className='header-bg text-[#A138EB] text-xl px-4 py-2 rounded shadow font-bold'>Add Courses <i className="fa-solid fa-plus"></i></button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className='text-2xl font-bold py-4'>Add Course</h1>
          <input value={courseDetails.courseName} onChange={e=>setCourseDetails({...courseDetails, courseName:e.target.value})} className='rounded-md border border-zinc-700 p-2 mb-2' type="text" placeholder='Course Name' />
          <input value={courseDetails.description} onChange={e=>setCourseDetails({...courseDetails, description:e.target.value})} className='rounded-md border border-zinc-700 p-2 mb-2' type="text" placeholder='Course Description' />
          <input value={courseDetails.category} className='rounded-md border border-zinc-700 p-2 mb-2' type="text" placeholder='Course Category' />
          <input value={courseDetails.instructorName} onChange={e=>setCourseDetails({...courseDetails, instructorName:e.target.value})} className='rounded-md border border-zinc-700 p-2 mb-2' type="text" placeholder='Instructor' />
          <input value={courseDetails.price} onChange={e=>setCourseDetails({...courseDetails, price:e.target.value})} className='rounded-md border border-zinc-700 p-2 mb-2' type="text" placeholder='Price' />
          <div className='flex justify-center items-center flex-col'>
            <img src={preview?preview:IMG} alt="" className='w-28 py-4' />
            <input onChange={e=>setCourseDetails({...courseDetails, courseImg:e.target.files[0]})} type="file" className="text-sm pt-5 text-stone-500 file:mr-5 file:py-1 file:px-3 file:border-[1px] file:text-md file:font-semibold file:bg-stone-50 file:text-stone-700 hover:file:cursor-pointer" name="" id="" />
            {
              !imgFileStatue &&
              <p className='text-red-900 font-bold pt-5'>Upload Only the following file types (jpeg, jpg, png) here!!!</p>
            }
          </div>
          <div className='pt-5'>
          <button onClick={handleClose} className='text-md px-3 py-1 rounded m-2 bg-red-700 text-white font-bold'>Cancel</button>
          <button onClick={handleAddCourse} className='text-md px-3 py-1 rounded m-2 bg-green-800 text-white font-bold'>Submit</button>
          </div>

        </Box>
      </Modal>
    </div>
  )
}

export default TeacherAddCourse