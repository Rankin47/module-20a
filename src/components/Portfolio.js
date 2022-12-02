//Reference the Project.js to pull each JS file.

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
    id: 1,
    title: "TechTopics",
    languages: "html, handlebars, js",
    packages:
      "bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, heroku, mysql2, sequelize",
    image: "/img/techtopics.png",
    description:
      "Allows you to edit and post blogs. You can also leave comments on your own blog or the blogs of others.",
    repo: "https://github.com/EmilyNecciai/tech-topics",
    live: "https://floating-thicket-72381.herokuapp.com/",
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
