import { TextField } from '@mui/material'
import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { resetApi } from '../Service/allApi'
import { useNavigate, useParams } from 'react-router-dom'


const PasswordReset = () => {
    const navigate = useNavigate()
    const [newPassword, setnewPassword] = useState({
        email:"", password:"", confirmPassword:""
    })
    const {id, token} = useParams()

    const handleResetPassword = async(e)=>{
        e.preventDefault()
        console.log("Inside handle reset password");
        if(newPassword.password == newPassword.confirmPassword){
            try {
                
                const result = await resetApi(id,token, newPassword)
                console.log(result.status);
                if(result.status==200){
                    alert("Password update successfully!!!")
                    setnewPassword({email:"", password:"", confirmPassword:""})
                    navigate('/login')
                }else{
                    alert("Password not updated")
                }
            } catch (err) {
                console.log(err);
                alert("")
            }
        }else{
            alert("Password don't match")
        }
        
    }
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
                <TextField sx={{ mb: 2 }} value={newPassword.email} onChange={e=>setnewPassword({...newPassword, email:e.target.value})} id="email" type='email' label="Email" variant="outlined" required fullWidth />
                <TextField sx={{ mb: 2 }} value={newPassword.password} onChange={e=>setnewPassword({...newPassword, password:e.target.value})} id="password" type='password' label="Password" variant="outlined" required fullWidth />
                <TextField sx={{ mb: 2 }} value={newPassword.confirmPassword} onChange={e=>setnewPassword({...newPassword, confirmPassword:e.target.value})} id="confirm-password" type='password' label="Re-enter password" variant="outlined" required fullWidth />
                <button onClick={handleResetPassword}  className='px-2 bg-[#A138EB] w-44 text-white text-xl font-bold h-12 rounded mt-2'>Reset Password</button>
            </div>
        </div>
    </div>
  )
}

export default PasswordReset