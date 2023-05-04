import React, { useState } from "react";

import "../styles/create.css";
import { useParams } from "react-router-dom";

const UpdatePortfolio = ({ user }) => {
  const [fName, setFName] = useState(user.fName);
  const [lName, setLName] = useState(user.lName);
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState(user.email);
  const [experience, setExperience] = useState([1]);
  const [skills, setSkills] = useState([1]);
  const { id } = useParams();
  console.log(id);
  const handleSubmit = () => {
    const exp = [];
    const skill = [];
    for (
      let i = 0;
      i < document.getElementById("exp").children.length - 1;
      i++
    ) {
      exp.push(document.getElementById("exp").children[i].value);
    }
    for (
      let i = 0;
      i < document.getElementById("skill").children.length - 1;
      i++
    ) {
      skill.push(document.getElementById("skill").children[i].value);
    }
    const updatedPortfolio = {
      fName,
      lName,
      bio,
      email,
      experiences: exp,
      skills: skill,
    };

    fetch(`${import.meta.env.VITE_API_URL}/portfolios/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPortfolio),
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
        defaultValue={user.fName}
        onChange={(e) => setFName(e.target.value)}
      />
      <input
        type="text"
        placeholder="last name"
        defaultValue={user.lName}
        onChange={(e) => setLName(e.target.value)}
      />
      <textarea placeholder="bio" onChange={(e) => setBio(e.target.value)} />
      <input
        type="text"
        placeholder="email"
        defaultValue={user.email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div id="exp">
        {experience.map((e, i) => (
          <input key={i} type="text" placeholder="experience" />
        ))}
        <button onClick={() => setExperience([...experience, 1])}>
          Add Field
        </button>
      </div>
      <div id="skill">
        {skills.map((e, i) => (
          <input key={i} type="text" placeholder="skill" />
        ))}
        <button onClick={() => setSkills([...skills, 1])}>Add Field</button>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default UpdatePortfolio;
