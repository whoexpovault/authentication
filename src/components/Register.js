import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input))
    navigate("/login")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter name</label>
        <input
          name="name"
          value={input.name}
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
          type="name"
          placeholder="name"
        />{" "}
        <br />
        <label>Enter Email</label>
        <input
          name="email"
          value={input.email}
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
          type="email"
          placeholder="email"
        />{" "}
        <br />
        <label>Enter Password</label>
        <input
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.value,
            })
          }
          type="password"
          placeholder="password"
        />{" "}
        <br />
        <button type="submit">Register</button>
        <p>
          Already Registered ? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
