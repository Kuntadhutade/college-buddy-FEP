





import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const modal = ({ show, onClose }) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    course: "",
    description: "",
    condition: "",
    price: "",
    image: "",
  });

  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  // 📌 Input change handler
  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file" && files && files[0]) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // 📌 Submit handler (API call with token)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("⚠️ Please login again. Token not found.");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("author", form.author);
    formData.append("course", form.course);
    formData.append("description", form.description);
    formData.append("condition", form.condition);
    formData.append("price", form.price);
    formData.append("image", form.image);

    try {
      const res = await fetch("http://localhost:3000/api/listings", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Book listing added successfully!");
        setForm({
          title: "",
          author: "",
          course: "",
          description: "",
          condition: "",
          price: "",
          image: "",
        });
        setTimeout(() => onClose(), 1000);
      } else {
        setMessage("❌ Failed: " + (data.message || "Please try again"));
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Server error. Please try again later.");
    }
  };

  if (!show) return null;

  return (
    <div className="modal d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Sell Book</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                className="form-control mb-2"
                placeholder="Book Title"
                value={form.title}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="author"
                className="form-control mb-2"
                placeholder="Author Name"
                value={form.author}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="course"
                className="form-control mb-2"
                placeholder="Course"
                value={form.course}
                onChange={handleChange}
              />
              <textarea
                name="description"
                className="form-control mb-2"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
              />
              <input
                type="text"
                name="condition"
                className="form-control mb-2"
                placeholder="Condition"
                value={form.condition}
                onChange={handleChange}
              />
              <input
                type="number"
                name="price"
                className="form-control mb-2"
                placeholder="Price"
                value={form.price}
                onChange={handleChange}
              />

              <input
                type="file"
                name="image"
                className="form-control mb-3"
                ref={fileInputRef}
                onChange={handleChange}
              />

              {message && (
                <div
                  className={`alert ${
                    message.includes("✅") ? "alert-success" : "alert-danger"
                  } py-2`}
                >
                  {message}
                </div>
              )}

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modal;
