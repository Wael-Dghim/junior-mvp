import React, { useState } from "react";

import "../styles/create.css";

const CreatePortfolio = ({ user }) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState([1]);
  const [skills, setSkills] = useState([1]);
  console.log(user);
  const handleSubmit = () => {
    const newPortfolio = {
      fName,
      lName,
      bio,
      email,
      user: user.id,
      experience: [],
      skills: [],
    };

    fetch(`${import.meta.env.VITE_API_URL}/portfolios/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPortfolio),
    });
  };
  const preventDef = (e) => {
    e.preventDefault();
  };
  return (
    <form id="add" onSubmit={(e) => preventDef(e)}>
      <input
        type="text"
        placeholder="first name"
        onChange={(e) => setFName(e.target.value)}
      />
      <input
        type="text"
        placeholder="last name"
        onChange={(e) => setLName(e.target.value)}
      />
      <textarea placeholder="bio" onChange={(e) => setBio(e.target.value)} />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        {experience.map((e, i) => (
          <input type="text" placeholder="experience" />
        ))}
        <button onClick={() => setExperience([...experience, 1])}>
          Add Field
        </button>
      </div>
      <div>
        {skills.map((e, i) => (
          <input type="text" placeholder="skill" />
        ))}
        <button onClick={() => setSkills([...skills, 1])}>Add Field</button>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default CreatePortfolio;
