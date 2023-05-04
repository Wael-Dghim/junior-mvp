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

      fetch(`${import.meta.env.API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }).then(() => navigate("/home"));
    }
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label>First Name :</label>
        <input type="text" onChange={(e) => setFName(e.target.value)} />
        <label>Last Name :</label>
        <input type="text" onChange={(e) => setLName(e.target.value)} />
        <label>Username :</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label>Email :</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password :</label>
        <input type="password" onChange={(e) => setPw(e.target.value)} />
        <label>Confirm Password :</label>
        <input type="password" onChange={(e) => setConfirmPw(e.target.value)} />
        <input type="submit" value={""} />
      </form>
    </div>
  );
};

export default Signup;
