

import { useState } from "react";

const SellBookModal = ({ show, onClose }) => {  
  const [form, setForm] = useState({
    title: "",
    author: "",
    course: "",
    description: "",
    condition: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file" && files && files[0]) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("author", form.author);
    formData.append("course", form.course);
    formData.append("description", form.description);
    formData.append("condition", form.condition);
    formData.append("price", form.price);
    if (form.image) {
      formData.append("image", form.image);
    }

    try {
      const res = await fetch("http://localhost:3000/api/listings", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: formData,
      });

      const data = await res.json();
      console.log(data, "response");

      if (res.ok) {
       
        setForm({
          title: "",
          author: "",
          course: "",
          description: "",
          condition: "",
          price: "",
          image: null,
        });
        onClose(); 
      } else {
        alert(" Error: " + data.message);
      }
    } catch (error) {
      console.error(error);
      
    }
  };

  
  if (!show) return null;

  return (
   
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose} 
    >
      
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "500px",
          width: "90%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()} 
      >
        
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#666",
          }}
        >
          ✖
        </button>

        <h2 style={{ marginBottom: "20px" }}>Sell Book</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Title"
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
          <input
            placeholder="Author"
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
          <input
            placeholder="Course"
            type="text"
            name="course"
            value={form.course}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
          <textarea
            placeholder="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              minHeight: "80px",
            }}
          />
          <input
            placeholder="Condition (e.g., New, Good, Fair)"
            name="condition"
            type="text"
            value={form.condition}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
          <input
            placeholder="Price (₹)"
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellBookModal;









// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2OGRiMjIxNDZiODNhZjZkMjJmZTEzNjgiLCJpYXQiOjE3NjE1NzQxMzYsImV4cCI6MTc2MjE3ODkzNn0.daD1kSbXOYf3-QYoZAz-_zCfmxJ7pvFKL0Gm7LFC-9Y