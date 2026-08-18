import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function Home() {

  return (

    <div className="page">

      <Navbar />

      <main className="home-page">

        <div className="hero glass">

          <div className="hero-content">

            <p className="small-title">
              CREATIVE DEVELOPER
            </p>

            <h1>
              Hi, I'm <span>Dhanush</span>
            </h1>

            <h2>
              React Developer | Computer Science Student
            </h2>

            <p className="hero-description">
              I create modern and interactive websites using
              React, JavaScript, HTML and CSS. I enjoy learning
              new technologies and turning ideas into useful
              digital experiences.
            </p>

            <div className="hero-buttons">

              <Link
                to="/projects"
                className="btn primary-btn"
              >
                View Projects
                <span>→</span>
              </Link>

              <Link
                to="/contact"
                className="btn secondary-btn"
              >
                Contact Me
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </main>

    </div>

  );
}

export default Home;