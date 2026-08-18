import React from "react";
import Navbar from "../Navbar";

function About() {

  return (

    <div className="page">

      <Navbar />

      <main className="inner-page">

        <div className="page-card glass">

          <div className="page-heading">

            <p className="small-title">
              GET TO KNOW ME
            </p>

            <h1>
              About <span>Me</span>
            </h1>

          </div>

          <div className="about-content">

            <div className="about-left">

              <h2>
                Learning.
              </h2>

              <h2>
                Creating.
              </h2>

              <h2 className="cyan-text">
                Growing.
              </h2>

            </div>

            <div className="about-right">

              <p>
                I am Dhanush, a Computer Science student
                interested in web development and modern
                technologies.
              </p>

              <p>
                I enjoy creating websites and learning
                programming through practical projects.
              </p>

              <p>
                I am continuously improving my technical
                skills and exploring new technologies to
                build better digital experiences.
              </p>

              <p>
                My current interests include React,
                JavaScript, frontend development and
                creating modern user interfaces.
              </p>

            </div>

          </div>

          <div className="about-boxes">

            <div className="info-box glass">
              <h3>Education</h3>
              <p>Computer Science Student</p>
            </div>

            <div className="info-box glass">
              <h3>Focus</h3>
              <p>Web Development</p>
            </div>

            <div className="info-box glass">
              <h3>Goal</h3>
              <p>Build Modern Websites</p>
            </div>

          </div>

        </div>

      </main>

    </div>

  );
}

export default About;