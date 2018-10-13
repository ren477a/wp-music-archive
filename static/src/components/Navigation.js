import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="container-fluid">
      <div className="jumbotron text-center">
        <h1 className="font-weight-bold">Music Archive.</h1>
        <p>
          Welcome to the world's largest archive for the best songs around the
          globe!
        </p>
      </div>
      <nav className="navbar navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <span className="navbar-toggler-icon" />
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                Search a Song
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register a Song
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
