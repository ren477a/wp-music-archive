import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <footer>
      <nav>
        <NavLink className="nav-brand" to="/about">
          About Us |&nbsp;2018&copy; MusicArchive.com
        </NavLink>
      </nav>
    </footer>
  );
};
export default Navigation;
