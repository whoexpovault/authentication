import React from 'react'
import { useNavigate } from 'react-router-dom';

const Confirm = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user")
    navigate("/login")
  }
  return (
    <div>
      <h1>Logged IN</h1>
      <button onClick={handleLogout} className="btn btn-primary mt-3">Logout</button>
    </div>
  )
}

export default Confirm
