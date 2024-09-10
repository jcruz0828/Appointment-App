import React, { useState } from 'react';
import '../styles/login.css';

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., API call
  };
  const reg = (e)=>{
    e.preventDefault();
    // implement pop up to let user know to contact admin
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>OrganizeIT Login</h3>
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
      <a href="/signup" className="reg">Don't have an account?</a>
    </form>
  );
};