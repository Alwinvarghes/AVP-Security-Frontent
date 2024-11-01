import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer';

function Review() {
  
  return (
    <>
       <Navbar collapseOnSelect expand="lg" className="bg-outline review about p-3">
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
      <h1 className='mt-5' style={{fontWeight:'700',fontSize:'30px',color:'orange'}}>CUSTOMER REVIEWS</h1>
      <p className='mt-4' style={{fontSize:'20px'}}>The reviews of our happy clients are the best proof we are one of the best security solutions and alarm companies in India. We value our clients and provide excellent services to ensure the security of their business. We appreciate your feedback on your experience with AVP Alarms and look forward to working with you.</p>
       </div>
      
      </div>
      <div className="col-md-5"></div>
     </div>
      
    </Navbar>

    <div className="row mt-5 p-5">
    <div className="col-md-1"></div>
        <div className="col-md-3">
           <div className='mb-5'>
           <hr />
            <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/60796ac0ca46a36f997e8276_stars.svg" alt="" />
            <h5>Sam H.</h5>
           </div><hr />
           <div className='mb-4'>
           
            <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/60796ac0ca46a36f997e8276_stars.svg" alt="" />
            <h5>Randy L.</h5>
           </div><hr />
           
           <div className='mt-3 mb-5'>
           <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/60796ac0ca46a36f997e8276_stars.svg" alt="" />
            <h5>Wendy T.</h5>
           </div><hr />

           <div className=''>
           <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/60796ac0ca46a36f997e8276_stars.svg" alt="" />
            <h5>Nick L.</h5>
           </div><hr />
           
        </div>
        <div className="col-md-7"> 
           <div>
           <hr />
           <p>I had a really easy experience working with Forbel. I don’t always understand the technology side of things, but the team at Forbel made all of my business security solutions clear, so my Chicago office is secure. They are the best near me!</p>
           </div><hr />

           <div>
           <p>We have been struggling with our video surveillance system at our office in Chicago for years, but Forbel got it all worked out. Their team took the time to explain our options and quickly upgraded our system to a better option - awesome!</p>
           </div><hr />
           <div>
           <p>We have been struggling with our video surveillance system at our office in Chicago for years, but Forbel got it all worked out. Their team took the time to explain our options and quickly upgraded our system to a better option - awesome!</p><hr />
           </div>
           <div>
           <p>We have been struggling with our video surveillance system at our office in Chicago for years, but Forbel got it all worked out. Their team took the time to explain our options and quickly upgraded our system to a better option - awesome!</p>
           </div><hr />


            </div>
        <div className="col-md-1"></div>
    </div>
    <Footer/>
    </>
  )
}

export default Review
