import { FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { loginApi, registerApi } from '../Service/allApi';

function Auth({ insideRegister }) {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username:"", userType:"", email:"", password:"",
  })

  const handleChange = (e) => {
    setUserDetails({...userDetails, userType: e.target.value});

  };
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // register 
  const handleRegister = async(e) =>{
    e.preventDefault()
    console.log("Inside handle Register");
    if(userDetails.username && userDetails.userType && userDetails.email && userDetails.password){
      // alert("Api call")
      try {
        const result = await registerApi(userDetails)
        if(result.status==200){
          alert(`Welcome ${userDetails.username}, Please Login to Enroll Your Course`)
          navigate('/login')
          setUserDetails({username:"", userType:"", email:"", password:""})
        }else{
          if(result.response.status===406){
            alert(result.response.data)
            setUserDetails({username:"", userType:"", email:"", password:""})
          }

        }
      } catch (error) {
        console.log(error);
        
      }
      
    }else{
      alert("Please fill the form completly!!!")
    }
  }
  // console.log(userDetails);
  
  const handleLogin = async(e)=>{
    e.preventDefault()
    console.log("Inside handle login");
    if(userDetails.email && userDetails.password){
        try {
          const result = await loginApi(userDetails)
          if(result.status === 200){
            sessionStorage.setItem("user", JSON.stringify(result.data.user))
            sessionStorage.setItem("token", result.data.token)
            setUserDetails({username:"", userType:"", email:"", password:"",})
            navigate('/')
          }
        } catch (err) {
          console.log(err);
        }
    }else{
      alert("Please fill the form completely!!!")
    }
  }

  return (
    <>
      <div className='w-full fixed p-5 bg-[#A138BE] shadow-xl h-24 flex justify-between items-center'>
        <div>
          <img className='h-16' src={Logo} alt="" />
        </div>
      </div>
      <div className='flex justify-center items-center w-full h-svh'>
        <div className='auth-form p-5 rounded-lg drop-shadow-2xl shadow-slate-600 flex justify-center items-center flex-col'>
          <h1 className='text-center mb-5 text-3xl text-black font-bold'>Sign{insideRegister ? "Up" : "In"} to Your Account</h1>
          {
            insideRegister &&
            <>
              <TextField value={userDetails.username} onChange={e=>setUserDetails({...userDetails, username: e.target.value})} sx={{ mb: 2 }} id="fullname" label="FullName" variant="outlined" required fullWidth />
              <FormControl sx={{mb:2}} fullWidth>
              <InputLabel id="demo-simple-select-label">Select User Type</InputLabel>
                <Select
                  labelId="userType"
                  id="userType"
                  value={userDetails.userType}
                  label="Select User Type"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value={"Student"}>Student</MenuItem>
                  <MenuItem value={"Instructor"}>Instructor</MenuItem>
                </Select>
              </FormControl>
            </>
          }
          <TextField sx={{ mb: 2 }} id="email" value={userDetails.email} onChange={e=>setUserDetails({...userDetails, email:e.target.value})} type='email' label="E-mail" variant="outlined" required fullWidth />
          <TextField 
            id="password" 
            type={showPassword ? 'text' : 'password'}
            label="Password" 
            value={userDetails.password}
            onChange={e=>setUserDetails({...userDetails, password:e.target.value})}
            variant="outlined" 
            fullWidth 
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePassword}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {
            insideRegister ?
              <>
                <button onClick={handleRegister}  className='px-2 bg-[#A138EB] w-44 text-white text-xl font-bold h-12 rounded mt-2'>Register</button>
                <p className='mt-2'>Already on codewhiz? <Link className='text-[#A138EB] font-bold' to={'/login'}>Login</Link> </p>
              </>
              :
              <>
                <button onClick={handleLogin} className='px-2 bg-[#A138EB] w-44 text-white text-xl font-bold h-12 rounded mt-2'>Login</button>
                <Link to={'/forgot-password'}><p className='mt-2'>Forgot Password</p></Link>
                <p className='mt-2'>New to codewhiz? <Link className='text-[#A138EB] font-bold' to={'/register'}>Register</Link></p>
              </>
          }
        </div>
      </div>
    </>
  )
}

export default Auth