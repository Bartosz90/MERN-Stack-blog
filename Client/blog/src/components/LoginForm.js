import React from "react";
import "../styles/admin.sass";

const LoginForm = ({ login, password, handleInputs, handleAdminLog }) => {
  return (
    <form onSubmit={handleAdminLog}>
      <input
        type="text"
        placeholder="login"
        value={login}
        name="login"
        onChange={handleInputs}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        name="password"
        onChange={handleInputs}
      />
      <input type="submit" />
    </form>
  );
};

export default LoginForm;
