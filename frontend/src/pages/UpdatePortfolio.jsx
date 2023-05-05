import React, { useState } from "react";

import "../styles/create.css";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePortfolio = ({ user }) => {
  const [fName, setFName] = useState(user.fName);
  const [lName, setLName] = useState(user.lName);
  const [bio, setBio] = useState("");
  const [src, setSrc] = useState("");
  const [email, setEmail] = useState(user.email);
  const [experience, setExperience] = useState([1]);
  const [skills, setSkills] = useState([1]);

  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = () => {
    const exp = [];
    const skill = [];
    for (
      let i = 0;
      i < document.getElementsByClassName("exp")[0].children.length - 1;
      i++
    ) {
      exp.push(document.getElementsByClassName("exp")[0].children[i].value);
    }
    for (
      let i = 0;
      i < document.getElementsByClassName("skill")[0].children.length - 1;
      i++
    ) {
      skill.push(document.getElementsByClassName("skill")[0].children[i].value);
    }
    const updatedPortfolio = {
      fName,
      lName,
      bio,
      src,
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
    }).then(() => navigate("/home"));
  };

  return (
    <form className="add" onSubmit={(e) => e.preventDefault()}>
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
      <div className="exp">
        {experience.map((e, i) => (
          <input key={i} type="text" placeholder="experience" />
        ))}
        <button onClick={() => setExperience([...experience, 1])}>
          Add Field
        </button>
      </div>
      <div className="skill">
        {skills.map((e, i) => (
          <input key={i} type="text" placeholder="skill" />
        ))}
        <button onClick={() => setSkills([...skills, 1])}>Add Field</button>
      </div>
      <input
        type="text"
        placeholder="Image Url"
        onChange={(e) => setSrc(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default UpdatePortfolio;
