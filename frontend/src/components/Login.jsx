import React from "react";

const Login = () => {
  return (
    <div className="form-container">
      <form className="form">
        <label>Username or Email :</label>
        <input type="text" />
        <label>Password :</label>
        <input type="text" />
        <input type="submit" value={""} />
      </form>
    </div>
  );
};

export default Login;
