import React, { useState } from 'react'
import Header from './Header'
import CountUp from 'react-countup';
import { faClock, faMoneyBillTrendUp,faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';


function Home() {

const navigate = useNavigate()
  const handleLogin = ()=>{
    if(sessionStorage.getItem("token")){
      navigate('/service')
    }else{
      alert('Please login')
    }
  }
  
  return (
    <>
     <Header/>
        
    <div className="row coutup">
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

    <div className="row mt-3 p-5">
      <div className="col-md-12">
        <div className="row">
       <div className="col-md-4">
            <h2><span style={{color:'orange'}}>WE ARE PROVIDERS</span> OF TOP Indian SECURITY SYSTEM SOLUTIONS</h2>
            <p className='fs-5'>AVP security, your trusted  partner in commercial security, prides itself on expertise in creating customized security systems from scratch. Leveraging planning, design, and installation skills, we deliver all-inclusive, turn-key security solutions for businesses. Discover more about AVP's commitment to business security.</p>
            <div className='mt-5'>
            <button onClick={handleLogin} className='btn btn-outline-warning'>Learn More</button>
          </div>
          </div>
          <div className="col-md-8">
            <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/64fe0ef7931f040faf51d73b_Why-choose-us-new-retinaOMG.webp" alt="" width={'100%'} height={'500px'}/>
          </div>
          
        </div>
      </div>
    </div>

    <section id='solution'>
    <div className="row solutions p-5">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <h6>OUR SOLUTIONS</h6>
            <h2>KEEPING YOU SAFE <br/>AND SECURE</h2>
            <p className='mt-4'>When it comes to the safety of your business, it's important to find a team that you can trust. Whether you're solely looking at security cameras or you need a new business security system, here's how our team at Forbel can cater to your unique commercial security needs.</p>
            <div className='mt-5'>
            <button onClick={handleLogin}  className='btn btn-outline-warning'>View All</button>
          </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img src="https://cdn.prod.website-files.com/606184adb7296d59f51c3323/60cb21aa6e4f01310d4fd34b_682f_video%20surveillance%20preview%20new%20(1).jpg" alt="" width={'100%'} />
                  <h4 className='mt-3'>Video surveillence</h4>
                  <p>Improve the Protection of your assets and the safety of your staff and tenants with our wide range of video surveillence system designed to monitor your office,commercial,and industrial property 24/7.</p>
                </div>
                <div>
                  <img src="https://cdn.prod.website-files.com/606184adb7296d59f51c3323/60cb213f0d4d054f1067b3f0_eedf_intercoms-and-door-entry121%20(1)%20(1).jpg" alt="" width={'100%'} height={'250px'} />
                  <h4 className='mt-3'>Intercoms & Door Entry</h4>
                  <p>Screen and identity visitors entering your commercial property and keep unwanted strangers away with customizable cloudmanaged video Intercoms & door entry solutions from AVP.If needed,you can review access reports and video footage.</p>
                </div>
              </div>
              <div className="col-md-6">
              <div>
                  <img src="https://cdn.prod.website-files.com/606184adb7296d59f51c3323/60d48ae1eb16cb35de7e90cc_Autocall%20Notification%20Appliance.jpg" alt="" width={'100%'} height={'250px'} />
                  <h4 className='mt-3'>Fire Alarms</h4>
                  <p>In addition to instrusion detection,we can also assist with fire safety protocols at your business.We offer fire alarm solutions that consist of smoke detectors and fire alarms that integrate with your other security systems.</p>
                </div>
                <div>
                  <img src="https://cdn.prod.website-files.com/606184adb7296d59f51c3323/60be21cbb195d160d2311ebf_Forbel%20Electronic%20Access%20Control%20Heronew%20(1)%20(1).jpg" alt="" width={'100%'} height={'250px'}/>
                  <h4 className='mt-3'>Electronic Access Control</h4>
                  <p>Control who is entering and leaving your commercial building at any given time with our integrated biometric and smart-card access control systems.These are designed to keep your assets safe and allow your building to operate ina a more secure and efficient way</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    
    <section id='service'>
    <div className="row service p-5">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <h2>SERVICES WE PROVIDE WITHIN OUR TURN-KEY SECURITY SOLUTIONS</h2>
            <p className='mt-4'>Our security integrators serve apartment buildings, educational, religious, and medical facilities, auto dealerships, Discover the comprehensive services and customized solutions we provide within our turn-key security solutions at AVP. From initial site surveys to project management, we cover every aspect of your commercial security needs.and distribution facilities, cannabis dispensaries and growings, commercial offices, and warehouses, industrial and manufacturing facilities, hospitality groups, and retail and industrial properties. Each security camera system is tailored to the company's needs.</p>
            <div className='mt-5'>
           <button onClick={handleLogin} className='btn btn-outline-danger'>View All</button>
          </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/64c23ce97dda086383c819be_a7cff58cbbe6884459fe645656bf4cbe-p-500.webp" alt="" width={'100%'} />
                  <h4 className='mt-3'><u className='text-danger'>Installation</u></h4>
                  <p>Trust in AVP's efficient, professional installation service. We install your security system meticulously, minimizing disruption to your business operations.</p>
                </div>
                <div>
                  <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/64c23da472c965807aa5b470_1e812b63cd43fbfc6a1182e78b8899f8-p-500.webp" alt="" width={'100%'} height={'250px'} />
                  <h4 className='mt-3'><u className='text-danger'>Commissioning</u></h4>
                  <p>Upon system installation, we commission the systems, confirming they are operational and meet all the design specifications..</p>
                </div>
              </div>
              <div className="col-md-6">
              <div>
                  <img src="https://cdn.prod.website-files.com/60616f7c150ebe93eeed1b60/64c23e96f9188ca9cd7e12ff_bfff44855c6595a4951898e278c967e3-p-500.webp" alt="" width={'100%'} height={'240px'} />
                  <h4 className='mt-3'><u className='text-danger'>Upgrade / Retrofitting</u></h4>
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
        <div className="row mt-5">
            
            <div className="col-md-3 shadow">
            <h3><FontAwesomeIcon icon={faClock} className='me-3'/>Scalable</h3>
            <p>We invest our time in your needs, whether your business is big or small or the solution you’re seeking is long-term or temporary. Your new system will grow with your company and adapt to your changing needs.</p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 shadow">
            <h3> <FontAwesomeIcon icon={faThumbsUp} className='me-3'/>Dependable</h3>
            <p>There’s no feeling like knowing your building and/or business information are completely safe and secure. With AVP security, we make that happen with our reliable burglar alarms that sync with mobile apps.</p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3 shadow">
            <h3><FontAwesomeIcon icon={faMoneyBillTrendUp} className='me-3'/>Cost-Effective</h3>
            <p>We know that you might have a tight budget to work with, but we can provide a security system for you at a reasonable cost. We cater to each security solution to meet all your business’s needs, including staying within budget while keeping a fast response time.</p>
            </div>
            
           
            
        </div>
      </div>
    </div>
    </section>
    <Footer/>
    </>
  )
}

export default Home
