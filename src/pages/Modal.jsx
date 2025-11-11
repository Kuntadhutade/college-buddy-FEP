// import { useState } from "react";

// const Modal = () => {
//   const [form, setForm] = useState({
//     title: "",
//     author: "",
//     course: "",
//     description: "",
//     condition: "",
//     price: "",
//     image: null,
//   });

  
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setForm({ ...form, [name]: files[0] }); 
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

 
//   const handleSubmit = async (e) => {
//     e.preventDefault();

    
//     const formData = new FormData();
//     formData.append("title", form.title);
//     formData.append("author", form.author);
//     formData.append("course", form.course);
//     formData.append("description", form.description);
//     formData.append("condition", form.condition);
//     formData.append("price", form.price);
//     formData.append("image", form.image); 

//     try {
//       const res = await fetch("http://localhost:3000/api/listings", {
//         method: "POST",
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
       
//         },
//         body: formData,
//       });

//       const data = await res.json();
//       console.log("Response:", data);
//     } catch (err) {
//       console.error("Error uploading:", err);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input placeholder="Title" name="title" type="text" onChange={handleChange} />
//         <input placeholder="Author" name="author" type="text" onChange={handleChange} />
//         <input placeholder="Course" name="course" type="text" onChange={handleChange} />
//         <input placeholder="Description" name="description" type="text" onChange={handleChange} />
//         <input placeholder="Condition" name="condition" type="text" onChange={handleChange} />
//         <input placeholder="Price" name="price" type="text" onChange={handleChange} />
//         <input type="file" name="image" accept="image/*" onChange={handleChange} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Modal;







import { useState } from "react";

const Modal = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    course: "",
    description: "",
    condition: "",
    price: "",
    image: "",
  });
  const handleChange = (e) => {
    console.log(e, "event");
    const {name, value, files} = e.target;
    const reader = new FileReader();
    console.log(reader, "reader")
    // console.log(reader.readAsArrayBuffer(file))

   if(files & files[0]){
    const reader = new FileReader();
   
    reader.onload = () => {
      fileContentDisplay.textContent = reader.result;
      setForm({
        ...form, [name]: value ? value : reader.result
    })
    };
   }else {
    setForm({
        ...form, [name]: value ? value : files[0]
    })
}

    
    
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = await fetch("http://localhost:3000/api/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
  }
    console.log(form, "form");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="title" type="text" name="title" onChange={handleChange} />
        <input placeholder="author" type="text" name="author" onChange={handleChange} />
        <input placeholder="course" type="text" name="course" onChange={handleChange} />
        <input
          placeholder="description"
          name="description"
          onChange={handleChange}
          type="text"
        />
        <input
          placeholder="condition"
          name="condition"
          type="text"
          onChange={handleChange}
        />
        <input placeholder="price" type="text" name="price" onChange={handleChange} />
        <input placeholder="image" type="file" name="image" onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Modal;
