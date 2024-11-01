import React from 'react'

function Footer() {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-10">
            <div className="row">
                <div className="col-md-4">
                    <i style={{color:'orange'}} className='fs-2 fw-bolder'><img src="https://content.jdmagicbox.com/comp/amravati/l8/9999px721.x721.190601174026.m9l8/catalogue/avp-group-of-company-amravati-midc-amravati-salt-manufacturers-5fb2g0zn75.jpg" className='me-3' alt="" width={'90px'} style={{borderRadius:'50%'}}/>AVP Security</i><hr />
                    <p>Forbel Custom Security Solutions
For the last decade, Forbel has established itself as the premier security system design, installation and integration company in the Chicago metropolitan area, having spread its service area to the whole Midwest</p>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-4">
                         <h4>Our Solutions</h4><hr />
                         <ul style={{listStyle:'none'}}>
                            <li className='mt-2'>securty System Design</li>
                            <li className='mt-2'>Video Surveillance</li>
                            <li className='mt-2'>Electronic Access Control</li>
                            <li className='mt-2'>Fire Alarms</li>
                            <li className='mt-2'>Intercoms & Door Entry</li>
                         </ul>
                        </div>
                        <div className="col-md-4">
                        <h4>Our Industries</h4><hr />
                         <ul style={{listStyle:'none'}}>
                            <li className='mt-2'>Office Security system in India</li>
                            <li className='mt-2'>Industrial / Manufacturing</li>
                            <li className='mt-2'>Warehouse</li>
                            <li className='mt-2'>Medical Facilities</li>
                            <li className='mt-2'>Multifamily Complexes</li>
                         </ul>
                        </div>
                        <div className="col-md-4">
                        <h4>Contact Us</h4><hr />
                         <ul style={{listStyle:'none'}}>
                            <li>Contact US</li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center mt-3'>Copyright © 2015-2024 AVP Security Systems Company</p>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  )
}

export default Footer
