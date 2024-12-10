import React, { useEffect, useState } from 'react'
import SIMG from '../../assets/student.png'
import { getAllStudentApi } from '../../Service/allApi'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const TeacherStudents = () => {
  useEffect(()=>{
    getAllStudents()
  },[])
const [allStudentDetails, setAllStudentDetails] = useState([])
  const getAllStudents = async() =>{
    console.log("Inside ge all students")
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
         "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getAllStudentApi(reqHeader)
        if(result.status==200){
          setAllStudentDetails(result.data)
        }else{
          setAllStudentDetails([])
        }
      } catch (error) {
        console.log(error);
        
      }
    }
  }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='header-bg w-4/5 rounded-2xl h-64 flex justify-evenly items-center'>
            <h1 className='text-5xl font-bold text-[#A138BE]'>Student</h1>
            <img height={"25px"} width={"120px"} src={SIMG} alt="" />
        </div>
        {
          allStudentDetails?.length>0?
          <table style={{width:"40%"}} class="mt-14 table-fixed border-collapse border border-slate-400">
            <thead>
              <tr>
                <th className='border border-slate-300  px-5 py-2'>Username</th>
                <th className='border border-slate-300 px-5 py-2'>Email</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {allStudentDetails.map((student)=>(
                <tr key={student._id}>
                <td className='border border-slate-300 px-5 py-2'>{student.username}</td>
                <td className='border border-slate-300 px-5 py-2'>{student.email}</td>
              </tr>
              ))}
            </tbody>
          </table>
          :
          <div className='text-red-600 font-bold text-2xl'>
            No students Joined Yet
          </div>
        }

    </div>
  )
}

export default TeacherStudents