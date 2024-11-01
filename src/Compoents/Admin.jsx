import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faHouseChimneyWindow,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { deleteDetailsApi, getAllDetailsApi, loginUserApi } from '../service/allApi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Admin() {

//for donor list to admin page
const[ userDetails,setuserDetails ] = useState([])

const [selectedUser, setSelectedUser] = useState(null);



//modal
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = (item) => {
  setSelectedUser(item);
  setShow(true);
}

//delete details
const handleDelete = async(item)=>{

  const token = sessionStorage.getItem("token")
   const reqHeader ={
  "Content-Type":"application/json",
  "Authorization":`Bearer ${token}`
  }
  const result = await deleteDetailsApi(item,reqHeader)
  console.log(result);
  userAllDetails() 
}



//to get all  details api
const  userAllDetails = async()=>{

    if(sessionStorage.getItem("token")){
        const token = sessionStorage.getItem("token")

        const reqHeader ={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
        }
    
    const result = await getAllDetailsApi(reqHeader)
    console.log(result);
    setuserDetails(result.data)

}
}
console.log(userDetails);



useEffect(()=>{

  userAllDetails() 

},[])

   
  
  return (
    <>
   <div className='d-flex adminpage ' style={{ backgroundColor: 'white', width: '100%', height: '107vh', backgroundImage: 'url(https://images5.alphacoders.com/379/379348.jpg)', backgroundSize: 'cover' }}>
     
     <header>

<div className="logosec">
 <div className="logo">AVP Security</div>
 <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
className="icn menuicn" 
     id="menuicn" 
     alt="menu-icon"/>
</div>

<div >
 <h1 style={{color:'#073642',fontWeight:'bold',fontSize:'175%'}}>Welcome Admin !</h1>
 
</div>

<div className="message">
 <div className="circle"></div>
 <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png" 
className="icn" 
      alt="" />
 <div className="dp">
   <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
className="dpicn" 
         alt="dp" />
   </div>
</div>

</header>

<div className="main-container">
<div className="navcontainer">
 <nav className="nav">
     <div className="nav-upper-options">
         <div className="nav-option option1">
         <div className="logo">DASHBOARD</div>
         </div>

         <div className="option2 nav-option  flex-column" style={{justifyContent:'space-between'}}>
         <Link  style={{textDecoration:'none'}} to={"/"}>  <h6 style={{color:"#073642",fontSize:'21px',marginBottom:'rem',marginLeft:'-4rem'}} className='mt-4'> <FontAwesomeIcon icon={faHouseChimneyWindow} style={{marginRight:'1rem'}} />Home page</h6></Link>
          
         </div>

</div>
 </nav>
</div>

<div className='containers'>
<div className='mt-5 ' style={{
        height: "80vh",
        width: '1000px',
        borderRadius: "1rem",
        backgroundColor: 'rgba(255, 255, 255, 0.6)', // Light transparent white
        backdropFilter: 'blur(10px)', // Blur effect
        WebkitBackdropFilter: 'blur(10px)', // For Safari
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', // Optional: Shadow for better visibility
        }} >
        <div className='header'>
            <h4 className='text-light mt-3' ></h4>
            <div style={{ fontWeight: 'unset', fontSize: '200%' }} className='text-light'></div>
            <ol style={{color:"#073642",fontWeight:'',fontSize:"155%"}} className='text-center logo '>User Details List</ol>
            <table className='table shadow'>
              <thead>
                <tr>
              
                          <th className="p-4 bg-secondary text-light">#</th>
                          <th className="p-4 bg-secondary text-light">Coustomer Name</th>
                          <th className="p-4 bg-secondary text-light">Contact Number</th>
                          <th className="p-4 bg-secondary text-light">Details</th>
                          <th className="p-4 bg-secondary text-light">Action</th>
                        
                </tr>
              </thead>
              <tbody>
                {userDetails?.length>0?
                userDetails?.map((item,index)=>(
                  <tr>
                  <td className="p-4">{index+1}</td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.mobileno}</td>
                  <td><button  onClick={() => handleShow(item)} className='btn btn-primary'>More</button></td>
                  <td><button  onClick={() => handleDelete(item)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button></td>
                </tr>))
                :<p className='text-danger fs-5'>No details Added Yet</p>
                }
                
              </tbody>
            </table>
            </div>
  </div>
</div>
</div>
</div>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        {selectedUser && (
      <div className='d-flex p-3 flex-column shadow'>
        <p>Name: {selectedUser.name}</p>
        <p>E-mail: {selectedUser.email}</p>
        <p>Mobile No: {selectedUser.mobileno}</p>
        <p>State: {selectedUser.state}</p>
        <p>Pin code: {selectedUser.pincode}</p>
        <p>Address: {selectedUser.address}</p>
        <p>Comments: {selectedUser.comment}</p>
      </div>
    )}
       </Modal.Body>
       <Modal.Footer className='justify-content-between'>
          
       <Button variant="success w-100" onClick={handleClose}>
            ok
          </Button>
    
        </Modal.Footer>
      </Modal>








   


    
    </>
  )
}

export default Admin
