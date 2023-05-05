import React, { useState } from "react";

import "../styles/create.css";
import { useNavigate } from "react-router-dom";

const CreatePortfolio = ({ user }) => {
  const [fName, setFName] = useState(user.fName);
  const [lName, setLName] = useState(user.lName);
  const [src, setSrc] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState(user.email);
  const [experience, setExperience] = useState([1]);
  const [skills, setSkills] = useState([1]);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const exp = [];
    const skill = [];
    for (
      let i = 0;
      i < document.getElementsByClassName("exp")[0].children.length - 1;
      i++
    ) {
      if (document.getElementsByClassName("exp")[0].children[i].value !== "") {
        exp.push(document.getElementsByClassName("exp")[0].children[i].value);
      }
    }
    for (
      let i = 0;
      i < document.getElementsByClassName("skill")[0].children.length - 1;
      i++
    ) {
      if (
        document.getElementsByClassName("skill")[0].children[i].value !== ""
      ) {
        skill.push(
          document.getElementsByClassName("skill")[0].children[i].value
        );
      }
    }
    const newPortfolio = {
      fName,
      lName,
      bio,
      email,
      src,
      user: user.id,
      experiences: exp,
      skills: skill,
    };

    fetch(`${import.meta.env.VITE_API_URL}/portfolios/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPortfolio),
    }).then(() => navigate("/home"));
  };

  return (
    <form className="add" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Your first name"
        defaultValue={user.fName}
        onChange={(e) => setFName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your last name"
        defaultValue={user.lName}
        onChange={(e) => setLName(e.target.value)}
      />
      <textarea placeholder="bio" onChange={(e) => setBio(e.target.value)} />
      <input
        type="text"
        placeholder="Email"
        defaultValue={user.email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="exp">
        {experience.map((e, i) => (
          <input key={i} type="text" placeholder="Experience" />
        ))}
        <button onClick={() => setExperience([...experience, 1])}>
          Add Field
        </button>
      </div>
      <div className="skill">
        {skills.map((e, i) => (
          <>
            <input key={i} type="text" placeholder="Skill" />
          </>
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

export default CreatePortfolio;
