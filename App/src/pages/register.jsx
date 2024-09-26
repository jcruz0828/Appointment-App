import React, { useState } from 'react';
import { isValidPassword,isValidEmail,checkPasswordStrength } from '../../utils/helper-functions/vailidateUserInfo';
export const Register = () => { 
  const [formData,setFormData] = useState(
    {firstName: "",
     lastName:"",
     email:"",
     password:"",
     confirmPassword:"",
    }
    );
  const [errorMessage,setErrorMessage] = useState("");
  const [passwordErrorMessage,setPasswordErrorMessage] = useState([]);

     const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(e.target)
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(!formData.firstName){
        setErrorMessage("Please enter first name");
        return
      }
      else if(!formData.lastName){
        setErrorMessage("Please enter last name");
        return
      }
      else if(!isValidEmail(formData.email)){
        setErrorMessage("Please enter valid email");
        return
      }
      else if(!isValidPassword(formData.password) ||!isValidPassword(formData.confirmPassword) ){
        return setPasswordErrorMessage(checkPasswordStrength(formData.password,formData.confirmPassword));
      }
    // API CALL
      setErrorMessage("");
      setPasswordErrorMessage([]);
    }

     return(
   <div>
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
     <div className='errorMessage'>
        {errorMessage || (
          <>
            {passwordErrorMessage.map((message, index) => (
              <p className='eMsg'  key={index}>{message}</p>
            ))}
          </>
        )}
      </div>
    </div>
     );


}