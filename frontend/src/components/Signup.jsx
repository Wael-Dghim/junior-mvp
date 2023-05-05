import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
        <motion.input
          whileHover={{ scale: 1.25 }}
          type="text"
          onChange={(e) => setFName(e.target.value)}
        />{" "}
        <br />
        <label>Last Name :</label> <br />
        <motion.input
          whileHover={{ scale: 1.25 }}
          type="text"
          onChange={(e) => setLName(e.target.value)}
        />{" "}
        <br />
        <label>Username :</label> <br />
        <motion.input
          whileHover={{ scale: 1.25 }}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <label>Email :</label> <br />
        <motion.input
          whileHover={{ scale: 1.25 }}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label>Password :</label> <br />
        <motion.input
          whileHover={{ scale: 1.25 }}
          type="password"
          onChange={(e) => setPw(e.target.value)}
        />{" "}
        <br />
        <label>Confirm Password :</label> <br />
        <motion.input
          whileHover={{ scale: 1.25 }}
          type="password"
          onChange={(e) => setConfirmPw(e.target.value)}
        />{" "}
        <br />
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ scale: 1.3 }}
          type="submit"
        >
          Sign Up
        </motion.button>
      </form>
    </div>
  );
};

export default Signup;
