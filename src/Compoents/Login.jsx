import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { loginUserApi } from '../service/allApi'


function Login() {

    const[login,setlogin] = useState({
        email:"",
        password:""
    })
    console.log(login);


    const navigate = useNavigate()
    //login handle
    
    const handlelogin = async(e)=>{
        e.preventDefault()
        const{email,password} = login
        if(!email || !password){
            alert('Please fill the form')
        }else{
          const result = await loginUserApi(login)  
          console.log(result);
          if(result.status == 200){
            //adding data to sessionstorage
            sessionStorage.setItem('AlreadyUser',JSON.stringify(result.data.AlreadyUser))
            sessionStorage.setItem('token',result.data.token)
            alert('Login successfully')
            setlogin({
                email:"",
                password:""
            })
            navigate('/')
          }else if(result.status == 201){
            sessionStorage.setItem('AlreadyUser',JSON.stringify(result.data.AlreadyUser))
            sessionStorage.setItem('token',result.data.token)
            alert('Login successfully')
            setlogin({
                email:"",
                password:""
            })
            navigate('/admin')
          }
        }
    }

  return (

    <>
 <div className='login d-flex justify-content-center align-items-center'>
      <div className='wrapper'>
       <form>
        <h1>Welcome User</h1>
        <div className='input-box mt-5'>
          <input onChange={(e)=>setlogin({...login,email:e.target.value})} type="text"  value={login.email} className='form-control' name="ename" placeholder='E-mail' required/>
          <FontAwesomeIcon className='icon' icon={faEnvelope} />
          </div>
          <div className='input-box mt-4 mb-2'>
          <input onChange={(e)=>setlogin({...login,password:e.target.value})} type="text" value={login.password} className='form-control' name="pswd" placeholder='password' required/>
          <FontAwesomeIcon className='icon' icon={faLock} />
          </div>
          <div className='remember-forgot'>
          <label><input type="checkbox"/>Remember me</label>
          </div>
          <button onClick={handlelogin} type='submit' className='button mt-2'>Login</button>
          <div className='register'>
            <p>Don't have an account?<Link className="register-link" to={'/register'}>Register</Link></p>
          </div>
       </form>
      </div>
      </div>

    </>
  )
}

export default Login
