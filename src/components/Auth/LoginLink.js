import React from "react";
import { Link } from "react-router-dom";

const LoginLink = ({ onLogout }) => {
  return (
    <li className="nav-item" onClick={onLogout}>
      <Link className="nav-link ms-0" to="/login">
        ( Logout )
      </Link>
    </li>
  );
};

export default LoginLink;
