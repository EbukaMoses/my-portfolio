import React from "react";
import Heading from "../Common/Heading";

const About = () => {
  return (
    <div className="about padding">
      <Heading title="Hey, I am Ebuka Moses 🧑‍💻 " />
      <div className="maincontent">
        <p className="text-justify">
          Results-driven Front-End Developer with expertise in crafting dynamic,
          user-centric web applications. Skilled in React, JavaScript, and CSS,
          I specialize in building responsive interfaces that offer seamless
          experiences across devices. My background includes integrating RESTful
          APIs, managing state with Redux, and employing best practices for
          performance optimization and security. I’m adept at collaborating in
          cross-functional teams, translating complex requirements into
          functional code, and delivering high-quality, maintainable solutions.
          Passionate about continuous learning and keeping up with emerging
          frontend trends to drive innovation and add value to every project I
          undertake.
          {/* I am a dedicated and experienced React frontend developer with years
          of expertise in building dynamic and responsive web applications. My
          proficiency in consuming APIs and managing state with Redux has
          enabled me to create seamless user experiences and efficient,
          maintainable codebases. I have a strong track record of collaborating
          with cross-functional teams to deliver high-quality projects on time.
          My passion for front-end development drives me to stay updated with
          the latest technologies and best practices, ensuring that my skills
          remain sharp and relevant. I am committed to leveraging my experience
          to contribute effectively to any development team. */}
        </p>
        <br />
        <p className="text-justify">
          Currently, I'm expanding my expertise by learning backend development
          with Node.js and Express, aiming to become a versatile full-stack
          developer. My passion for continuous learning and my robust skill set
          make me an invaluable asset to any development team.
        </p>
      </div>
    </div>
  );
};

export default About;
