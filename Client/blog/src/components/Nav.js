import React from "react";
import "../styles/nav.sass";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/">Main</NavLink>
      <NavLink to="admin">Admin</NavLink>
    </nav>
  );
};

export default Nav;
