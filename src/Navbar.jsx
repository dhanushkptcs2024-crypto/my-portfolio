import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // Glow is enabled only on Home page
  const isHome = location.pathname === "/";

  return (
    <nav className={`navbar glass ${isHome ? "home-navbar" : ""}`}>

      <div className="navbar-content">

        {/* LOGO */}
        <Link to="/" className="logo">
          DHANUSH
        </Link>

        {/* NAVIGATION */}
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

      </div>

    </nav>
  );
}

export default Navbar;
