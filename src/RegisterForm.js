  //const navigate=useNavigate();
  import React, { useState } from 'react';


import { NavLink, Navigate, useNavigate } from 'react-router-dom';


  function RegisterForm(){

  const [showPopup, setShowPopup] = useState(false);
const navigate = useNavigate();

   const [employee, setEmployee] = useState({
    name: '', email: '', mobileno: '', address: '', nomineeName: '', relationWithNominee: '', typeofInsurance: '', tenure: '', price: ''
   });
   console.log(employee);
  const baseUrl = "http://localhost:8080/add"
  
  
  

  
 
  

  const createUser = async () => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    });
    navigate('/Home')
    const data = await response.json();
    console.log(data)
  
  //  if (response.ok) {
  //    setShowPopup(true); // Show the popup after successful submission
   }
  // }
   


   

   const handleChange = (e) => {

    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
      
    })

  }
  const handleSubmit = () => {
{/* <NavLink to={'/Home'}></NavLink> */}
{/* <NavLink to={'/Dummy'}></NavLink> */}
 //navigate('/Dummy')
   }

   return(
    <div>
    <form style={{ textAlign: "center" }} >
    <h1 >Registration Form</h1>
    <table style={{ marginLeft: '30%' }}>
      <tr><th><label>Name:</label></th> <th><input name='name' type='text' size={20} placeholder='Name' onChange={handleChange} /></th></tr>
      <tr><th><label>Age:</label></th> <th><input name='name' type='text' size={20} placeholder='Age' onChange={handleChange} /></th></tr>
      <tr><th><label>Email:</label></th> <th><input name='email' type='email' placeholder='email' onChange={handleChange} /><br /> </th></tr>
      <tr><th><label>Mobile no:</label></th><th><input name='mobileno' type='number' placeholder='Mobile number' onChange={handleChange} /><br /></th></tr>
      <tr><th><label>Address:</label></th><th><input name='address' type='text' placeholder="Address" onChange={handleChange} /><br /></th></tr>
      <tr><th><label>Nominee name :</label></th><th><input name='nomineeName' type='text' size={20} placeholder='Nominee Name' onChange={handleChange} /><br /></th></tr>
      <tr><th><label>Relation With Nominee:</label></th>
        <th> <select name='relationWithNominee' onChange={handleChange}>
          <option>Mother</option>
          <option>Father</option>
          <option>Wife</option>
          <option>Husband</option>
          <option>Son</option>
          <option>Daughter</option>
        </select><br /></th></tr>
      <tr><th><label>Type of Insurance:</label></th><th>
        <select name='typeofInsurance'onChange={handleChange}>
          <option>Life</option>
          <option>Health</option>
          <option>Vechicle</option>
        </select><br /></th></tr>

      <tr><th><label>Tenure:</label></th><th>
        <select name= 'tenure'onChange={handleChange}>
          <option>1 </option>
          <option>3 </option>
          <option>5 </option>
          <option>10 </option>
        </select><br /></th></tr>
      <tr><th><label>price:</label></th><th><input  name='price' onChange={handleChange} placeholder="price" /><br /></th></tr>
    </table>
    <input type='button' onClick={createUser}
      value='submit' />
      
      
  
{/* <button  onClick={handleSubmit} value='submit'>dummy sub</button> */}
    </form>
  
{/* <ReactModal isOpen={showPopup}>
  <h2>Success!</h2>
  
  <p>Your form has been submitted successfully.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
  </ReactModal> */}
  

</div>


);
}
export default RegisterForm;