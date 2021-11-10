import React from "react";
import { StyledNav, Line } from "./Nav.styles";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router";

const Nav = () => {
  const { pathname } = useLocation();
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
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/" ? "75%" : "" }}
          />
        </li>
        <li>
          <NavLink
            to="our-work"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            Our Work
          </NavLink>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/our-work" ? "75%" : "" }}
          />
        </li>
        <li>
          <NavLink
            to="contact"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            Contact Us
          </NavLink>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/contact" ? "75%" : "" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
