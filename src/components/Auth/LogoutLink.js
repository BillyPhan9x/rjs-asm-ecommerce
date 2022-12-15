import React from "react";
import { NavLink } from "react-router-dom";

const LogoutLink = () => {
  return (
    <li className="nav-item me-1">
      <NavLink
        to="/login"
        className={(navClass) => (navClass.isActive ? "nav__active" : "")}
      >
        <i className="fas fa-user-alt me-1 text-muted"></i>Login
      </NavLink>
    </li>
  );
};

export default LogoutLink;
