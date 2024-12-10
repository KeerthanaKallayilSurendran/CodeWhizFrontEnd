import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Blog from './Pages/Blog'
import Courses from './Pages/Courses'
import Contact from './Pages/Contact'
import Dasboard from './Pages/Dasboard'
import Pnf from './Pages/Pnf'
import ForgotPassword from './Pages/ForgotPassword'
import PasswordReset from './Pages/PasswordReset'
import TAddVideoClass from './Components/Teacher/TAddVideoClass'
import SCourseClass from './Components/Student/SCourseClass'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth insideLogin={true} />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset_password/:id/:token' element={<PasswordReset />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<Dasboard />} />
        <Route path="/add-class/:courseId" element={<TAddVideoClass />} />
        <Route path="/scourses/:courseId" element={<SCourseClass />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>
    </>
  )
}

export default App
