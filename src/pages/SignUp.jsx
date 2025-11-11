import React, { useState } from "react";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
    year: "",
  });

  const [message, setMessage] = useState(""); 

 
  const handleSignup = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Signup successful: " + data.message);
      } else {
        setMessage("❌ Error: " + data.message);
      }
      console.log("Server Response:", data);
    } catch (err) {
      console.error("Error:", err);
      setMessage("❌ Server error, please try again later.");
    }
  };

  return (
    <div>
      <h2>SignUp Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleSignup}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleSignup}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleSignup}
        />
        <input
          name="college"
          placeholder="College"
          value={form.college}
          onChange={handleSignup}
        />
        <input
          name="year"
          placeholder="Year"
          value={form.year}
          onChange={handleSignup}
        />

        <button type="submit">Submit</button>
      </form>

      
      {message && <p>{message}</p>}
    </div>
  );
}

export default SignUp;
