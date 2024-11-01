import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import { newUserApi } from '../service/allApi'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'




function Register() {

//store data in state
const [user,setuser] = useState({
    username:"",
    email:"",
    password:""
})
console.log(user);

const navigate = useNavigate()

//function to register new user
const handleRegister = async(e)=>{
    e.preventDefault()//-data loss 
    const{username,email,password} = user
    if(!username || !email || !password){
        alert('Please fill the form')
    }else{
        const result = await newUserApi(user)
        console.log(result);
        if(result.status == 200){
          alert("successfull")
          setuser({
            username:"",
            email:"",
            password:""
          })
          navigate('/login')
        }else{
            alert(result.response.data)
        }
        
    }
}

  return (
<>
   
<div className='login d-flex justify-content-center align-items-center'>
      <div className='wrapper'>
       <form>
        <h1>Join Family</h1>
        <div className='input-box mt-5'>
          <input value={user.username} type="text"  onChange={(e)=>setuser({...user,username:e.target.value})} className='form-control' placeholder='Username' name="uname" required/>
          <FontAwesomeIcon className='icon' icon={faUser} />
          </div>
          <div className='input-box mt-4 mb-2'>
          <input type="text" value={user.email} onChange={(e)=>setuser({...user,email:e.target.value})} className='form-control' placeholder='E-mail' name="ename"/>
          <FontAwesomeIcon className='icon' icon={faEnvelope} />
          </div>
          <div className='input-box mt-4 mb-2'>
          <input type="text" value={user.password} onChange={(e)=>setuser({...user,password:e.target.value})} className='form-control' placeholder='password' name="pswd" password/>
          <FontAwesomeIcon className='icon' icon={faLock} />
          </div>
          <div className='remember-forgot'>
          <label><input type="checkbox"/>Remember me</label>
          </div>
          <button  onClick={handleRegister} type='submit' className='button mt-3'>Register</button>
          <div className='register'>
            <p>Already have an account?<Link className="register-link" to={'/login'}>Login</Link></p>
          </div>
       </form>
      </div>
      </div>

      </>

  )
}

export default Register
