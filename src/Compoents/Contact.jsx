import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { contactApi } from '../service/allApi';
import { Link } from 'react-router-dom';

function Contact() {


  //token
  const[token,settoken] = useState("")
  //state for contact
  const[contacts,setcontact] = useState({
    name:"",
    email:"",
    mobileno:"",
    state:"",
    pincode:"",
    address:"",
    comment:""
  })
  console.log(contacts);


//token edukan useeffect use
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      settoken(sessionStorage.getItem("token"))
    }
  },[])





  
const handleContact =async(e)=>{
  e.preventDefault()
  const{name,email,mobileno,state,pincode,address,comment} = contacts
  if(!name || !email || !mobileno || !state || !pincode || !address || !comment){
    alert('please fill the form')
  }else{
//request header
if(token){
  const reqHeader ={
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}` //bearer - no other credential/document is required to verify the request holder
  }
  const result = await contactApi(contacts,reqHeader)
  console.log(result);
  if(result.status == 200){
    alert('Contact list successull')
    setcontact({
      name:"",
      email:"",
      mobileno:"",
      state:"",
      pincode:"",
      address:"",
      comment:""
    })
  }
  }
}
}

//cancel 
const handleClose = ()=>{
  setcontact({
    name:"",
    email:"",
    mobileno:"",
    state:"",
    pincode:"",
    address:"",
    comment:""
  })
}




  return (
    <>
    <div className='contact'>
    <div className="row">
    <div className="col-md-1"></div>
      <div className="col-md-10 mt-5 mb-5">
        <div className="row">
          <div className="col-md-8">
          <form className=' contact_form shadow p-4 w-100'>
        <h1 className='text-center mb-4' style={{color:'#074f81'}}>Contact Us</h1>
       <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control value={contacts.name} type="text" onChange={(e)=>setcontact({...contacts,name:e.target.value})} placeholder="name@gmail.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="E-mail" className="mb-3">
        <Form.Control value={contacts.email} type="text" onChange={(e)=>setcontact({...contacts,email:e.target.value})} placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Mobile No" className="mb-3">
        <Form.Control value={contacts.mobileno} type="text" onChange={(e)=>setcontact({...contacts,mobileno:e.target.value})} placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="*State" className="mb-3">
        <Form.Control value={contacts.state} type="text" onChange={(e)=>setcontact({...contacts,state:e.target.value})} placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Pin code" className="mb-3">
        <Form.Control value={contacts.pincode} type="text" onChange={(e)=>setcontact({...contacts,pincode:e.target.value})} placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Address" className="mb-3">
        <Form.Control value={contacts.address} as="textarea" onChange={(e)=>setcontact({...contacts,address:e.target.value})} placeholder="Leave a comment here" style={{ height: '100px' }}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
        <Form.Control value={contacts.comment} as="textarea" onChange={(e)=>setcontact({...contacts,comment:e.target.value})} placeholder="Leave a comment here" />
      </FloatingLabel>
      <div className='d-flex justify-content-between'>
        <Link to={'/'}><button onClick={handleClose} className='btn btn-danger'>cancel</button></Link>
        <button onClick={handleContact} className='btn btn-success'>Submit</button>
      </div>
       </form>
          </div>
          
          <div className="col-md-4">
       
          </div>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
    </div>
    
      
    </>
  )
}

export default Contact
