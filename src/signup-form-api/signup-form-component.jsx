import React from "react";
import axios from "axios";

const SignupFormComponent = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting...");

      const pushDetails = await axios.post(
        "http://localhost:21000/api/v1/User/userSignup",
        {
          firstName: e.target.firstname.value,
          lastName: e.target.lastname.value,
          email: e.target.email.value,
          mobileNumber: e.target.mobile.value,
          password: e.target.password.value,
        }
      );

      if (pushDetails.data.success === true) {
        alert("User registered successfully!");
      } else {
        alert("Something went wrong!");
      }
    } catch (e) {
      alert("Backend not running or request failed.");
      console.log("Error:", e.message);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Signup Form</h2>

      <form onSubmit={onSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" required />

        <br /><br />

        <label htmlFor="lastname">Last Name</label>
        <input type="text" id="lastname" />

        <br /><br />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />

        <br /><br />

        <label htmlFor="mobile">Mobile Number</label>
        <input type="text" id="mobile" required />

        <br /><br />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupFormComponent;
