import React from "react";
import Navbar from "../Navbar";

const skills = [
  {
    name: "HTML",
    symbol: "</>",
  },
  {
    name: "CSS",
    symbol: "{}",
  },
  {
    name: "JavaScript",
    symbol: "JS",
  },
  {
    name: "React",
    symbol: "⚛",
  },
  {
    name: "Python",
    symbol: "PY",
  },
  {
    name: "Java",
    symbol: "J",
  },
  {
    name: "SQL",
    symbol: "DB",
  },
];

function Skills() {
  return (
    <div className="page">
      <Navbar />

      <main className="inner-page">
        <div className="page-card glass">

          <div className="page-heading">

            <h1>
              My <span>Skills</span>
            </h1>

            <p className="heading-description">
              Technologies and programming languages
              that I am learning and working with.
            </p>

          </div>

          <div className="skills-grid">

            {skills.map((skill) => (
              <div
                className="skill-card glass"
                key={skill.name}
              >

                <div className="skill-symbol">
                  {skill.symbol}
                </div>

                <h3>
                  {skill.name}
                </h3>

                <div className="skill-line"></div>

              </div>
            ))}

          </div>

        </div>
      </main>
    </div>
  );
}

export default Skills;