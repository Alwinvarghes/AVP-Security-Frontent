import { faPowerOff, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';


function Header() {

const [username,setusername] = useState("")
const[islogin,setislogin] = useState(false)
const[isadmin,setisadmin] = useState(false)



  //page load avumbo using useEffect
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setislogin(true)
      const User = (JSON.parse(sessionStorage.getItem("AlreadyUser")))
      setusername(User.username)
      if (User.username === 'admin') {
        setisadmin(true); // Set isAdmin to true if the user is admin
      }
     
    }
  
   
    
  },[])


  //navigate
  const navigate = useNavigate()
  //logout
const handleLogout = ()=>{
  sessionStorage.removeItem("AlreadyUser")
  sessionStorage.removeItem("token")
  setislogin(false)
  setisadmin(false)
  navigate('/')
}


//login only access page and content
const handleLogin = ()=>{
  if(sessionStorage.getItem("token")){
    if (username === 'admin') {
      navigate('/admin'); // Navigate to admin page if user is admin
    } else {
      navigate('/contact'); // Navigate to contact page otherwise
    }
  } else {
    alert('Please Login');
  
  }
}





  return (
   <>
   
   <Navbar collapseOnSelect expand="lg" className="bg-outline navbar p-3">
      <Container>
      <Link to={'/'} style={{textDecoration:'none'}}><Navbar.Brand ><h3><img src="https://content.jdmagicbox.com/comp/amravati/l8/9999px721.x721.190601174026.m9l8/catalogue/avp-group-of-company-amravati-midc-amravati-salt-manufacturers-5fb2g0zn75.jpg" className='me-3' alt="" width={'100px'} style={{borderRadius:'50%'}}/></h3></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            
          <Nav style={{marginLeft:"8rem"}}>
            <Nav.Link href="/about" className='ms-5 fs-4 text-light'>About</Nav.Link>
            <Nav.Link href="#solution"  className='ms-5 fs-4 text-light'>Solutions</Nav.Link>
            <Nav.Link href="#service"  className='ms-5 fs-4 text-light'>Services</Nav.Link>
            <Nav.Link href="/review"  className='ms-5 fs-4 text-light'>Clients</Nav.Link>
            {isadmin?
                <Nav.Link  href="/admin"  className='ms-5 fs-4 text-light'>Admin</Nav.Link>
              :
             
              
              <Nav.Link onClick={handleLogin} href=""  className='ms-5 fs-4 text-light'>Contact Us</Nav.Link>
            }
            
          </Nav>

          <Nav className='ms-auto'>
          {islogin? <button onClick={handleLogout} className='btn btn-outline-danger'><FontAwesomeIcon icon={faPowerOff} className='me-2' />LogOut</button>
          :<Link to={'/register'} style={{textDecoration:'none'}}><button className='btn btn-outline-success'><FontAwesomeIcon icon={faRightToBracket} className='me-2' />Login</button></Link>
        }
          </Nav>
        </Navbar.Collapse>
      </Container>
     
     <div className="row">
      <div className="col-md-2"></div>

      <div className="col-md-5 mt-5">
      <div className='first_textcontent text-light mt-5'>
       {islogin?<h2 className='text-light'>Welcome<span className='text-danger ms-3' style={{textTransform:'uppercase'}}>{username}</span></h2>:null}
      <h1 className='mt-5' style={{fontWeight:'700',fontSize:'55px'}}>Commercial Security <br /> Solutions</h1>
      <p style={{fontSize:'22px'}}>We plan, design, install, and integrate physical security systems for businesses, buildings, and beyond

Local & licensed security contractor
Free site survey (with remote options available) & consulting
Fair prices and honest work
Procurement and project management
Hundreds of satisfied clients and completed projects.</p>
       </div>
       <Link to={'/about'}><button className='btn btn-warning'>More Details</button></Link>
      </div>
      <div className="col-md-5"></div>
     </div>
      
    </Navbar>



  
   </>
  )
}

export default Header
