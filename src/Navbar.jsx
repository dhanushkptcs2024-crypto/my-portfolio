import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Animated border */}
      <span className="navbar-light"></span>

      {/* Glass background */}
      <div className="navbar-glass"></div>

      {/* Navbar content */}
      <Link to="/" className="logo">
        DHANUSH
      </Link>

      <div className="nav-links">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Skills
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;
