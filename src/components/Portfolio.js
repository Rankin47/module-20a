

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Battlerobots",

    description: "Battle Robots",
    repo: "https://github.com/Rankin47/robot-gladiators",
  },
  {
    id: 2,
    title: "Note Taker App",
    languages: "html, css, js",
    packages: "Express.js, Generate Unique IDs",
  },
  {
    id: 3,
    title: "Basic Portfolio",
    languages: "html, css",
    packages: "none",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    languages: "html, css, js",
    packages: "none",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
