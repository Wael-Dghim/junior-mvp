import React, { useState } from "react";

const Login = () => {
  const [creds, setCreds] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ creds, password: pw }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label>Username or Email :</label>
        <input type="text" onChange={(e) => setCreds(e.target.value)} />
        <label>Password :</label>
        <input type="text" onChange={(e) => setPw(e.target.value)} />
        <input type="submit" value={""} />
      </form>
    </div>
  );
};

export default Login;
