import React from "react";
import Heading from "../Common/Heading";

const About = () => {
  return (
    <div className="about padding">
      <Heading title="Hey, I am Ebuka Moses 🧑‍💻 " />
      <div className="maincontent">
        <p className="text-justify">
          I am a dedicated and experienced React frontend developer with years
          of expertise in building dynamic and responsive web applications. My
          proficiency in consuming APIs and managing state with Redux has
          enabled me to create seamless user experiences and efficient,
          maintainable codebases. I have a strong track record of collaborating
          with cross-functional teams to deliver high-quality projects on time.
          My passion for front-end development drives me to stay updated with
          the latest technologies and best practices, ensuring that my skills
          remain sharp and relevant. I am committed to leveraging my experience
          to contribute effectively to any development team.
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
