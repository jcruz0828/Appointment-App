import React, { useState } from "react";
import "../../styles/login.css";
import {
  isValidEmail,
  isValidPassword,
} from "../../helper-functions/vailidateUserInfo";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail(formData.email) && isValidPassword(formData.password)) {
      console.log(formData);
      setErrorMessage("");
      // API CALL
    } else {
      if (!isValidEmail(formData.email)) {
        setErrorMessage("Please Enter A Valid Email");
      } else {
        setErrorMessage("Incorrect Email or Password");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <button type="submit">Login</button>
        <a href="/register" className="reg">
          Don't have an account?
        </a>
      </form>
      <div>
        <p className="Error"></p>
      </div>
      <p className="errorMessage">{errorMessage}</p>
    </div>
  );
};
