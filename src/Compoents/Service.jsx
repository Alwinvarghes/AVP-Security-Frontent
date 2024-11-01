import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer';



function Service() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-outline services p-3">
      <Container>
      <Link to={'/'} style={{textDecoration:'none'}}><Navbar.Brand ><h3><img src="https://content.jdmagicbox.com/comp/amravati/l8/9999px721.x721.190601174026.m9l8/catalogue/avp-group-of-company-amravati-midc-amravati-salt-manufacturers-5fb2g0zn75.jpg" className='me-3' alt="" width={'100px'} style={{borderRadius:'50%'}}/></h3></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            
          <Nav style={{marginLeft:"8rem"}}>
            <Nav.Link href="/about" className='ms-5 fs-4 text-light'>About</Nav.Link>
            <Nav.Link href="#service"  className='ms-5 fs-4 text-light'>Solutions</Nav.Link>
            <Nav.Link href="#service"  className='ms-5 fs-4 text-light'>Services</Nav.Link>
            <Nav.Link href="/review"  className='ms-5 fs-4 text-light'>Clients</Nav.Link>
            <Nav.Link href="#pricing"  className='ms-5 fs-4 text-light'>Contact Us</Nav.Link>
            
          </Nav>
          </Navbar.Collapse>
      </Container>
     
     <div className="row">
      <div className="col-md-2"></div>

      <div className="col-md-5 mt-5">
      <div className='first_textcontent text-light mt-5'>
      <h1 className='mt-5' style={{fontWeight:'700',fontSize:'30px'}}>SERVICES WE PROVIDE WITHIN OUR TURN-KEY SECURITY SOLUTIONS</h1>
      <p className='mt-4' style={{fontSize:'20px'}}>If you are searching for the best security systems installation provider in India, AVP Alarms is the right company to ensure the safety of your business.</p>
       </div>
      
      </div>
      <div className="col-md-5"></div>
     </div>
      
    </Navbar>
      <div className="row service p-5">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
          <div>
                  <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/60c1d179e78c5bca5c187826_e4c_Forbel%20Structured%20Cabling%20Heronew211111%20(1).jpg" alt="" width={'100%'} height={'250px'}  />
                  <h4 className='mt-3'><u className='text-danger'> Structured cabling</u></h4>
                  <p>Keep your company's servers,computer,and other IP network devices running at the highest speed with help from AVP structured cabling install and maintain a future-proof fiber,copper and wireless network infrastructure.</p>
                </div>
                <div>
                  <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/60c1d072f386763ad54b7ade_566_Forbel%20Commercial%20Audio%20Video%20Heronew23%20(1).jpg" alt="" width={'100%'} height={'250px'} />
                  <h4 className='mt-3'><u className='text-danger'>Commerical Audio/Video</u></h4>
                  <p>We will help to keep your business communications and your home entertainment system updated with the home entertainment systems updated with the latest in audio and video technology and integrate with other system for a true smart-buliding experience.</p>
                </div>
               
           
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/64c23ce97dda086383c819be_a7cff58cbbe6884459fe645656bf4cbe-p-500.webp" alt="" width={'100%'} />
                  <h4 className='mt-5'><u className='text-danger'>Installation</u></h4>
                  <p>Trust in AVP's efficient, professional installation service. We install your security system meticulously, minimizing disruption to your business operations.</p>
                </div>
                <div>
                  <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/64c23da472c965807aa5b470_1e812b63cd43fbfc6a1182e78b8899f8-p-500.webp" alt="" width={'100%'} height={'250px'} />
                  <h4 className='mt-5'><u className='text-danger'>Commissioning</u></h4>
                  <p>Upon system installation, we commission the systems, confirming they are operational and meet all the design specifications..</p>
                </div>
              </div>
              <div className="col-md-6">
              <div>
                  <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/64c23e96f9188ca9cd7e12ff_bfff44855c6595a4951898e278c967e3-p-500.webp" alt="" width={'100%'} height={'240px'} />
                  <h4 className='mt-5'><u className='text-danger'>Upgrade / Retrofitting</u></h4>
                  <p>Stay up-to-date with evolving security technologies through our upgrade and retrofitting service, enhancing your existing systems to meet modern security demands..</p>
                </div>
                <div>
                  <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/64c23cb3f28c42e30c5d30be_d4f38412d3e200cfdf52db7fe6124c0b-p-500.webp" alt="" width={'100%'} height={'250px'}/>
                  <h4 className='mt-3'><u className='text-danger'>Design & Engineering</u></h4>
                  <p>Our expert team skillfully designs and engineers bespoke security systems, ensuring they match your specifications and meet industry standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Service
