import React from "react";
import { StyledNav } from "./Nav.styles";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/" className="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="our-work"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            Our Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
