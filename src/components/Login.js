import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleLoggedin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if(input.email === user.email && input.password === user.password) {
      navigate("/confirm")
    }else{
      alert("Invalid email or password")
    }
  }
  return (
    <div>
      <form onSubmit={handleLoggedin}>
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
        <button type="submit">Login</button>
        <p>
          New User ? <a href="/register">Regsiter here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
