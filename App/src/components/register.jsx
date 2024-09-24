import React, { useState } from 'react';
export const Register = () => { 
  const [formData,setFormData] = useState(
    {firstName: "",
     lastName:"",
     email:"",
     password:"",
     confirmPassword:"",
     business:""});

     const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(e.target)
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
    const handleSubmit = (e)=>{
      e.preventDefault;
      //api call
    }

     return(
     <form onSubmit={handleSubmit}>
      <h3>
        organizeIT sign up
      </h3>
      <div>
        
        <label htmlFor="firstName">First Name:</label>
        <input type = "text" id="firstName" name = "firstName" onChange = {handleChange} value = {formData.firstName}>
        </input>
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type = "text" id="lastName" name = "lastName" onChange = {handleChange} value = {formData.lastName}>
        </input>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type = "email" id="email" name = "email" onChange = {handleChange} value = {formData.email}>
        </input>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type = "password" id="password" name = "password" onChange = {handleChange} value = {formData.password}>
        </input>
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type = "password" id="confirmPassword" name = "confirmPassword" onChange = {handleChange} value = {formData.confirmPassword}>
        </input>
      </div>
      <button type="submit">Sign Up</button>
     </form>
     );


}