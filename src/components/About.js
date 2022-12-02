// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Sam Rankin"/>
      <p className="content is-italic mt-4">
        Hello, my name is Sam
      </p>
      <p className="content">
        Placeholder description
      </p>
    </div>
  );
}

export default About;
