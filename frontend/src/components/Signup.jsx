import React from "react";

const Signup = () => {
  return (
    <div className="form-container">
      <form className="form">
        <label>First Name :</label>
        <input type="text" />
        <label>Lasr Name :</label>
        <input type="text" />
        <label>Username or Email :</label>
        <input type="text" />
        <label>Password :</label>
        <input type="password" />
        <label>Confirm Password :</label>
        <input type="password" />
        <input type="submit" value={""} />
      </form>
    </div>
  );
};

export default Signup;
