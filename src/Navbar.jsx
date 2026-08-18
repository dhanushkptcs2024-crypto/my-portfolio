import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar home-navbar">

      {/* Moving glowing border */}
      <svg
        className="navbar-border"
        viewBox="0 0 1000 70"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>

          {/* Border colors */}
          <linearGradient
            id="borderGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="50%" stopColor="#008cff" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>

          {/* Glow */}
          <filter
            id="borderGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="3"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

        </defs>


        {/* Permanent very faint border */}
        <rect
          className="navbar-border-base"
          x="1"
          y="1"
          width="998"
          height="68"
          rx="18"
          ry="18"
        />


        {/* Moving glowing part */}
        <rect
          className="navbar-border-moving"
          x="1"
          y="1"
          width="998"
          height="68"
          rx="18"
          ry="18"
          pathLength="1000"
        />

      </svg>


      {/* Logo */}
      <Link to="/" className="logo">
        DHANUSH
      </Link>


      {/* Navigation */}
      <div className="nav-links">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
        >
          Home
        </NavLink>


        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
        >
          About
        </NavLink>


        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
        >
          Skills
        </NavLink>


        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
        >
          Projects
        </NavLink>


        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
        >
          Contact
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;
