import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fName && lName && username && email && pw === confirmPw) {
      const newUser = {
        fName,
        lName,
        username,
        email,
        password: pw,
      };

      fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }).then(() => navigate("/home"));
    }
  };
  return (
    <div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label>First Name :</label> <br />
        <input type="text" onChange={(e) => setFName(e.target.value)} /> <br />
        <label>Last Name :</label> <br />
        <input type="text" onChange={(e) => setLName(e.target.value)} /> <br />
        <label>Username :</label> <br />
        <input type="text" onChange={(e) => setUsername(e.target.value)} />{" "}
        <br />
        <label>Email :</label> <br />
        <input type="email" onChange={(e) => setEmail(e.target.value)} /> <br />
        <label>Password :</label> <br />
        <input type="password" onChange={(e) => setPw(e.target.value)} /> <br />
        <label>Confirm Password :</label> <br />
        <input
          type="password"
          onChange={(e) => setConfirmPw(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
