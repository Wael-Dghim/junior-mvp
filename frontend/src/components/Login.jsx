import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [creds, setCreds] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ creds, password: pw }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => setUser(data))
      .then(() => {
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label>Username or Email :</label>
        <br />
        <input type="text" onChange={(e) => setCreds(e.target.value)} />
        <br />
        <label>Password :</label>
        <br />
        <input type="text" onChange={(e) => setPw(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
