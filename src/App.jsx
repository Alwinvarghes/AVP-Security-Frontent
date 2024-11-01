import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Compoents/Footer'
import Login from './Compoents/Login'
import Home from './Compoents/Home'
import Register from './Compoents/Register'
import Service from './Compoents/Service'
import About from './About'
import Review from './Compoents/Review'
import Contact from './Compoents/Contact'
import Admin from './Compoents/Admin'



function App() {
  

  return (
    <>
      
      
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/admin' element={<Admin/>}/>
        
      </Routes>
      
    </>
  )
}

export default App
