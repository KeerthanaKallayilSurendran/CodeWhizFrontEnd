import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link, Navigate } from 'react-router-dom'

function Auth({ insideRegister }) {
  return (
    <div className='flex justify-center items-center w-full h-svh'>
      <div className='auth-form p-5 rounded-lg drop-shadow-2xl shadow-slate-600 flex justify-center flex-col'>
        <h1 className='text-center mb-5 text-3xl text-[#1976d2] font-bold'>Sign{insideRegister ? "Up" : "In"} to Your Account</h1>
        {
          insideRegister &&
          <TextField sx={{ mb: 2 }} id="fullname" label="FullName" variant="outlined" fullWidth />
        }
        <TextField sx={{ mb: 2 }} id="email" label="E-mail" variant="outlined" fullWidth />
        <TextField id="password" label="Password" variant="outlined" fullWidth />
        {
          !insideRegister &&
          <p className='mb-3'>Forgot Password</p>
        }
        {
          insideRegister ?
            <Button sx={{ mt: 2 }} variant="contained">Register</Button>
            :
            <Button variant="contained">Login</Button>
        }
        <div className='text-center mt-3 text-lg'>
          {
            insideRegister ?
              <p>Already on codewhiz? <Link className='text-[#1976d2] font-bold' to={'/login'}>Login</Link> </p>
              :
              <p>New to codewhiz? <Link className='text-[#1976d2] font-bold' to={'/register'}>Register</Link></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Auth