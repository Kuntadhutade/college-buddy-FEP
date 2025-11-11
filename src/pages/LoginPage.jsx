import React, { useState } from "react";
import RegisterImg from "../assets/Register.png";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import facebook from "../assets/facebook.png";
import "./LoginPage.css";


const LoginPage = () => {
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

    if (!form.email ||  !form.password) {
      setMessage("enter email and password");
      return;
    }
    setMessage("");
    console.log("Register form:", form);
    
  };

return (
    <div className="register-page">
      <div className="register-card">
        
        <div className="left-panel">
          <img src={RegisterImg} alt="hero" className="register-img" />
        </div>

        
        <div className="right-panel">
          <h2>Login</h2>
          <p className="muted">Forgot your Password ?</p>

          
          

         
          
          <form onSubmit={handleSubmit} className="reg-form">
           
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
              EMAIL LOGIN →
            </button>
          </form>


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
    

    <p style={{ fontSize: "16px", marginTop: 10 }}>
           By clicking 'Log In' you agree to our website Terms & Conditions
        </p>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;