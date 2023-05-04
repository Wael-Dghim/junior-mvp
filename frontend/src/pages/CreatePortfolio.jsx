import React, { useState } from "react";

const CreatePortfolio = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPortfolio = {
      fName,
      lName,
      bio,
      email,
      experience: experience.split(" "),
      skills: skills.split(" "),
    };

    fetch(`${import.meta.env.VITE_API_URL}/portfolios/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPortfolio),
    })
      .then((res) => res.json())
      .then((res) => alert(res));
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
      <input
        type="text"
        placeholder="experiences"
        onChange={(e) => setExperience(e.target.value)}
      />
      <input
        type="text"
        placeholder="skills"
        onChange={(e) => setSkills(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default CreatePortfolio;
