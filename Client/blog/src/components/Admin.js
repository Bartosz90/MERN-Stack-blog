import React from "react";
import "../styles/admin.sass";
import LoginForm from "./LoginForm";
import AdminPanel from "./AdminPanel.js";

const Admin = ({ adminLoggedIn, handleInputs, handleAdminLog }) => {
  return (
    <>
      {adminLoggedIn === false && (
        <LoginForm
          handleInputs={handleInputs}
          handleAdminLog={handleAdminLog}
        />
      )}

      {adminLoggedIn === true && <AdminPanel />}
    </>
  );
};

export default Admin;
