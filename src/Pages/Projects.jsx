import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function Projects() {

  return (

    <div className="page">

      <Navbar />

      <main className="inner-page">

        <div className="page-card glass">

          <div className="page-heading">

            <p className="small-title">
              SELECTED WORK
            </p>

            <h1>
              My <span>Projects</span>
            </h1>

            <p className="heading-description">
              A collection of projects I have created
              while learning and developing my skills.
            </p>

          </div>

          <div className="projects-list">

            <div className="project-card glass">

              <div className="project-icon">
                &lt;/&gt;
              </div>

              <div className="project-details">

                <p className="project-type">
                  WEB DEVELOPMENT
                </p>

                <h2>
                  Portfolio Website
                </h2>

                <p>
                  A modern personal portfolio website
                  built using React with a dark glassmorphism
                  interface, glowing effects, animations
                  and responsive design.
                </p>

                <div className="technology-list">

                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>

                </div>

              </div>

              <div className="project-arrow">
                ↗
              </div>

            </div>

          </div>

          <Link
            to="/contact"
            className="project-contact-btn"
          >
            Have a project idea? Let's talk →
          </Link>

        </div>

      </main>

    </div>

  );
}

export default Projects;