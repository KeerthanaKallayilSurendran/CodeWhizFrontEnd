import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Blog from './Pages/Blog'
import Courses from './Pages/Courses'
import Contact from './Pages/Contact'
import Dasboard from './Pages/Dasboard'
import Pnf from './Pages/Pnf'
import Header from './Components/Header'



function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard' element={<Dasboard />} />
        <Route path='/*' element={<Pnf />} />


      </Routes>
    </>
  )
}

export default App
