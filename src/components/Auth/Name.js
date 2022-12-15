import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import transferFullName from "../../utils/transferFullName";

const Name = () => {
  const user = useSelector((state) => state.auth.user);
  // console.log("user", user);

  return (
    <li className="nav-item">
      <Link className="nav-link" to="/shop">
        <i className="fas fa-user-alt me-1 text-muted"></i>
        {transferFullName(user.name)}
        <i className="fas fa-caret-down ms-1"></i>
      </Link>
    </li>
  );
};

export default Name;
