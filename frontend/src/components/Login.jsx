import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    <div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label whileHover={{ scale: 1.3 }}>
          Username or Email :
          <br />
          <motion.input
            whileHover={{ scale: 1.25 }}
            type="text"
            onChange={(e) => setCreds(e.target.value)}
          />
        </label>
        <br />
        <label whileHover={{ scale: 1.3 }}>
          Password :
          <br />
          <motion.input
            whileHover={{ scale: 1.25 }}
            type="password"
            onChange={(e) => setPw(e.target.value)}
          />
        </label>
        <br />
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ scale: 1.3 }}
          type="submit"
        >
          Login
        </motion.button>
      </form>
    </div>
  );
};

export default Login;
