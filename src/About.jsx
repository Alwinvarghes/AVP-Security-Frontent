import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { faClock, faMoneyBillTrendUp,faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountUp from 'react-countup';
import Footer from './Compoents/Footer';
function About() {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" className="bg-outline about p-3">
      <Container>
      <Link to={'/'} style={{textDecoration:'none'}}><Navbar.Brand ><h3><img src="https://content.jdmagicbox.com/comp/amravati/l8/9999px721.x721.190601174026.m9l8/catalogue/avp-group-of-company-amravati-midc-amravati-salt-manufacturers-5fb2g0zn75.jpg" className='me-3' alt="" width={'100px'} style={{borderRadius:'50%'}}/></h3></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            
          <Nav style={{marginLeft:"8rem"}}>
            <Nav.Link href="/about" className='ms-5 fs-4 text-light'>About</Nav.Link>
            <Nav.Link href="/service"  className='ms-5 fs-4 text-light'>Solutions</Nav.Link>
            <Nav.Link href="/service"  className='ms-5 fs-4 text-light'>Services</Nav.Link>
            <Nav.Link href="/review"  className='ms-5 fs-4 text-light'>Clients</Nav.Link>
            <Nav.Link href="#pricing"  className='ms-5 fs-4 text-light'>Contact Us</Nav.Link>
            
          </Nav>
          </Navbar.Collapse>
      </Container>
     
     <div className="row">
      <div className="col-md-2"></div>

      <div className="col-md-5 mt-5">
      <div className='first_textcontent text-light mt-5'>
      <h1 className='mt-5' style={{fontWeight:'700',fontSize:'30px'}}>ABOUT  AVP GROUP</h1>
      <p className='mt-4' style={{fontSize:'20px'}}>For the last decade, AVP has established itself as the premier low voltage and custom security system integrator in the India metropolitan area..</p>
       </div>
      
      </div>
      <div className="col-md-5"></div>
     </div>
      
    </Navbar>

    <div className="row mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-5">
       <h2>WE ARE AVP Group</h2>
       <p>Our company is dedicated to finding the right security or IT technology solution that would work for you and your business. With our team’s collective years of security and IT industry wide experience, we are certain that we can address your needs in a flexible manner.</p>
        </div>
        <div className="col-md-5">
            <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/609b9921514ab0232058658e_About_We%20are%20forbel1.jpg" alt="" width={'600px'} />
        </div>
        <div className="col-md-1"></div>
    </div>

    <div className="row coutup mt-5">
      <div className="col-md-12">
        <div className="row">
        <div className="col-md-3">
          <h3 style={{fontWeight:'300'}} className='text-center'><CountUp style={{fontSize:'70px'}} end={42180} duration={4}></CountUp>+ <br /><p className='mt-3' style={{fontSize:'20px'}}>Security Devices Installed</p></h3>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
        <h3 style={{fontWeight:'300'}} className='text-center'><CountUp style={{fontSize:'70px'}} end={1630000} duration={4}></CountUp>+ <br /><p className='mt-3' style={{fontSize:'20px'}}>Security Devices Installed</p></h3>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
        <h3 style={{fontWeight:'300'}} className='text-center'><CountUp style={{fontSize:'70px'}} end={1235} duration={4}></CountUp>+ <br /><p className='mt-3' style={{fontSize:'20px'}}>Security Devices Installed</p></h3>
        </div>
        </div>
      </div>
      
    </div>
 
    <div className="row mt-5 p-5" style={{backgroundColor:'white'}}>
    <h2 className='mt-5 mb-5 text-warning'>WHY CHOOSE US FOR COMMERCIAL SECURITY SYSTEMS INSTALLATION</h2>
            <div className="col-md-1"></div>
            <div className="col-md-3 shadow p-3">
            <h3><FontAwesomeIcon icon={faClock} className='me-3'/>Scalable</h3>
            <p>We invest our time in your needs, whether your business is big or small or the solution you’re seeking is long-term or temporary. Your new system will grow with your company and adapt to your changing needs.</p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 shadow p-3">
            <h3> <FontAwesomeIcon icon={faThumbsUp} className='me-3'/>Dependable</h3>
            <p>There’s no feeling like knowing your building and/or business information are completely safe and secure. With AVP security, we make that happen with our reliable burglar alarms that sync with mobile apps.</p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 shadow p-3">
            <h3><FontAwesomeIcon icon={faMoneyBillTrendUp} className='me-3'/>Cost-Effective</h3>
            <p>We know that you might have a tight budget to work with, but we can provide a security system for you at a reasonable cost. We cater to each security solution to meet all your business’s needs, including staying within budget while keeping a fast response time.</p>
            </div>
            </div>

<Footer/>
      
    </>
  )
}

export default About
