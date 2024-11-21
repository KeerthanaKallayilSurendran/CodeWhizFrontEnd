import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { forgotApi } from '../Service/allApi'

const ForgotPassword = () => {
    const [resetEmail, setResetEmail] = useState({
        email:""
    })


    const handleResetPassword = async(e) =>{
        e.preventDefault()
        console.log("Inside reset password");
        
        if(resetEmail){
            try {
                const result = await forgotApi(resetEmail)
                if(result.status==200){
                    alert("Password reset link send to your email!!")
                    setResetEmail("")
                }else{
                    alert(result.response.data)
                }
            } catch (err) {
                console.log(err);
            }
        }else{
            console.log("Please fill the form Completly!!");
            
        }
    }
    // console.log(resetEmail)
  return (
    <div>
         <div className='w-full fixed p-5 bg-[#A138BE] shadow-xl h-24 flex justify-between items-center'>
        <div>
          <img className='h-16' src={Logo} alt="" />
        </div>
      </div>
      <div className='flex justify-center items-center w-full h-svh'>
        <div className='auth-form p-5 rounded-lg drop-shadow-2xl shadow-slate-600 flex justify-center items-center flex-col'>
          <h1 className='text-center mb-5 text-3xl text-black font-bold'>Forgot Password</h1>
          <TextField sx={{ mb: 2 }} value={resetEmail.email} onChange={e=>setResetEmail({...setResetEmail, email:e.target.value})} id="email" type='email' label="E-mail" variant="outlined" required fullWidth />
          <button onClick={handleResetPassword}  className='px-2 bg-[#A138EB] w-44 text-white text-xl font-bold h-12 rounded mt-2'>Reset Password</button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword