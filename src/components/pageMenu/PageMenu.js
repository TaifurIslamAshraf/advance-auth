import React from "react";
import { NavLink } from "react-router-dom";

const PageMenu = () => {
  return (
    <div>
      <nav className="--btn-google --mb --p">
        <ul className="home-links">
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/changePassword">Change Password</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageMenu;
