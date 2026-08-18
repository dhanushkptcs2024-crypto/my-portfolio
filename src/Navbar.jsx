import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav
      className={`navbar ${
        location.pathname === "/" ? "home-navbar" : "glass"
      }`}
    >

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
