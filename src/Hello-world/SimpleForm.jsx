// import { useState } from "react";
// import "./SimpleForm.css";

// function SimpleForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Name: ${name}, Email: ${email}`);
//     setName("");
//     setEmail("");
//   };

//   return (
//     <div className="form-container">
//       <h2>Simple React Form</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter Your Name"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Your Email"
//             required
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default SimpleForm;
