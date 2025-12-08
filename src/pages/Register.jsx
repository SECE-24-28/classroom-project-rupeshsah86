import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterApp = () => {
  return <Register />;
};

const Register = () => {
  const [countryCode, setCountryCode] = useState("+91");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    college: "Sri Eshwar",
    passoutYear: "2024",
    department: "CSE",
    degree: "UG",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", {
      ...form,
      mobile: countryCode + form.mobile,
    });
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>
        Welcome to <span style={styles.bold}>Aptitude Guru Hem</span>
        <span style={styles.lms}> LMS</span>
      </h1>

      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.row}>
          <Input label="First Name" name="firstName" onChange={handleChange} />
          <Input label="Last Name" name="lastName" onChange={handleChange} />
        </div>

        <div style={styles.row}>
          <Select
            label="Select College"
            name="college"
            onChange={handleChange}
            value={form.college}
            options={["Sri Eshwar", "PSG", "RamaKrishna", "BMS", "SRM"]}
          />
          <Select
            label="Select Passout Year"
            name="passoutYear"
            onChange={handleChange}
            value={form.passoutYear}
            options={["2024", "2025", "2026", "2027", "2028"]}
          />
        </div>

        <div style={styles.row}>
          <Select
            label="Department"
            name="department"
            onChange={handleChange}
            value={form.department}
            options={["CSE", "ECE", "AIDS", "IT", "EEE", "CIVIL", "MECANICAL"]}
          />
          <Select
            label="UG or PG"
            name="degree"
            onChange={handleChange}
            value={form.degree}
            options={["UG", "PG"]}
          />
        </div>

        <div style={styles.row}>
          <Input label="Email" name="email" onChange={handleChange} />

          <div style={{ flex: 1 }}>
            <label>Mobile</label>
            <div style={{ display: "flex", gap: 6 }}>
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                style={{ padding: 7 }}
              >
                <option value="+977">🇳🇵 Nepal (+977)</option>
                <option value="+1">🇺🇸 USA (+1)</option>
                <option value="+44">🇬🇧 UK (+44)</option>
                <option value="+91">🇮🇳 India (+91)</option>
              </select>

              <input
                type="text"
                name="mobile"
                placeholder="Enter mobile number"
                onChange={handleChange}
                style={{ ...styles.input, flex: 1 }}
              />
            </div>
          </div>
        </div>

        <div style={styles.row}>
          <Input label="Password" name="password" type="password" />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
          />
        </div>

        <ul style={styles.rules}>
          <li>minimum 8 character</li>
          <li>one lowercase character</li>
          <li>one uppercase character</li>
          <li>one number</li>
          <li>one special character</li>
        </ul>

        <button style={styles.button}>Submit</button>

        <p>
          Already have an Account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

/* Reusable Components */
const Input = ({ label, ...props }) => (
  <div style={{ flex: 1 }}>
    <label>{label}</label>
    <input {...props} style={styles.input} />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div style={{ flex: 1 }}>
    <label>{label}</label>
    <select {...props} style={styles.input}>
      {options.map((op) => (
        <option key={op}>{op}</option>
      ))}
    </select>
  </div>
);

/* Styles */
const styles = {
  page: { padding: 30, fontFamily: "Arial" },
  heading: { textAlign: "center" },
  bold: { fontWeight: "bold" },
  lms: { color: "red" },
  form: {
    width: 800,
    margin: "30px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 6,
  },
  row: { display: "flex", gap: 20, marginBottom: 15 },
  input: {
    width: "100%",
    padding: 7,
    border: "1px solid #aaa",
  },
  rules: { fontSize: 14, color: "#555" },
  button: {
    padding: "10px 25px",
    background: "rgba(229, 16, 16, 1)",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default RegisterApp;
