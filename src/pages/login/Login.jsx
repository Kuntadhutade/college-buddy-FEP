
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";


// const Login = () => {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       setMessage("Please enter both email and password.");
//       return;
//     }

//     setMessage("");
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:3000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage(" Login successful!");
//         localStorage.setItem("token", data.token);

        
//         setTimeout(() => {
//           navigate("/dashboard");
//         }, 1500);
//       } else {
//         setMessage(data.message || "Invalid email or password!");
//       }
//     } catch (err) {
//       setMessage("Server error. Please try again later.");
//       console.error(err);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="login-page d-flex align-items-center justify-content-center vh-100 bg-light">
//       <div className="card shadow p-4" style={{ width: "400px" }}>
//         <h2 className="text-center mb-3 text-primary">Login</h2>
//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="mb-3">
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               placeholder="Enter Email"
//               value={form.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="mb-3">
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               placeholder="Enter Password"
//               value={form.password}
//               onChange={handleChange}
//             />
//           </div>

//           {message && (
//             <div
//               className={`alert ${
//                 message.includes("success") ? "alert-success" : "alert-danger"
//               } py-2`}
//             >
//               {message}
//             </div>
//           )}

//           <button
//             type="submit"
//             className="btn btn-primary w-100"
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setMessage(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Login;
