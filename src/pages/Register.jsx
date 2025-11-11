import React, { useState } from "react";
import "./Register.css";

import RegisterImg from "../assets/Register.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import facebook from "../assets/facebook.png";

const Register = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
    keep: false,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.email || !form.password) {
      setMessage(" (Name, Email, Password).");
      return;
    }
    setMessage("");
    console.log("Register payload:", form);
   
  };

  return (
    <div className="register-page">
      <div className="register-card">
        
        <div className="left-panel">
          <img src={RegisterImg} alt="hero" className="register-img" />
        </div>

        
        <div className="right-panel">
          <h2>Register</h2>
          <p className="muted">Sign up with</p>

          
          <div className="social-row">
            <button className="social google">
              <img src={google} alt="Google" className="icon" />
             
            </button>
            <button className="social apple">
              <img src={apple} alt="Apple" className="icon" />
              
            </button>
            <button className="social fb">
              <img src={facebook} alt="Facebook" className="icon" />
             
            </button>
          </div>

          <div className="or">OR</div>

          
          <form onSubmit={handleSubmit} className="reg-form">
            <label>Your Name</label>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              type="text"
            />
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              type="text"
            />

           
            <label>Login Details</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
            />
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              type="password"
            />

            <div className="checkbox-row">
              <label>
                <input
                  name="agree"
                  type="checkbox"
                  checked={form.agree}
                  onChange={handleChange}
                />{" "}
                By clicking 'Register' you agree to Terms & Conditions
              </label>
            </div>

            <div className="checkbox-row">
              <label>
                <input
                  name="keep"
                  type="checkbox"
                  checked={form.keep}
                  onChange={handleChange}
                />{" "}
                Keep me logged in
              </label>
            </div>

            {message && <div className="form-error">{message}</div>}

            <button type="submit" className="register-btn">
              REGISTER →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
