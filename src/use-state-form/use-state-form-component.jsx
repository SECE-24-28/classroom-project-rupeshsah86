
// import React, { useState } from "react";

// const UsestateformComponent = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [dob, setDob] = useState("");
//   const [gender, setGender] = useState("");

//   const fun1 = (e) => {
//     const { name, value } = e.target;

//     if (name === "name") setName(value);
//     else if (name === "email") setEmail(value);
//     else if (name === "password") setPassword(value);
//     else if (name === "dob") setDob(value);
//     else if (name === "gender") setGender(value);
//   };

//   const submitthings = () => {
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Password:", password);
//     console.log("DOB:", dob);
//     console.log("Gender:", gender);
//   };

//   return (
//     <div>
//       <h1>Use State Form Component</h1>

//       <form>
//         <label>Name</label>
//         <input type="text" name="name" onChange={fun1} />
//         <br />

//         <label>Email</label>
//         <input type="email" name="email" onChange={fun1} />
//         <br />

//         <label>Password</label>
//         <input type="password" name="password" onChange={fun1} />
//         <br />

//         <label>Date of Birth</label>
//         <input type="date" name="dob" onChange={fun1} />
//         <br />

//         <label>Gender</label>
//         <input type="radio" name="gender" value="Male" onChange={fun1} /> Male
//         <input type="radio" name="gender" value="Female" onChange={fun1} /> Female
//         <input type="radio" name="gender" value="Other" onChange={fun1} /> Other
//         <br />

//         {/* ✅ NO preventDefault needed */}
//          <button type="button" onClick={submitthings}> 
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UsestateformComponent;

import React, { useState } from "react";
const UsestateformComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  



  const fun1 = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    }else if(e.target.name === "password"){
      setPassword(e.target.value)
    }
  };
  const submitthings = () => {
    console.log("The name is :", name);
    console.log("The email is", email);
    console.log("The password is", password);
  };
  return (
    <div>
      <h1>Use State Form Component</h1>
      <form action={submitthings}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={fun1} />
        <br/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={fun1} />
        <br/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={fun1} />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UsestateformComponent;
