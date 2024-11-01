import React from "react";
import "./Skills.css";
import Heading from "../Common/Heading";
import { technologies } from "../../utils/data";
// import {
//   Bootstrap,
//   Css,
//   Git,
//   Github,
//   Html,
//   Js,
//   ReactIcon,
//   Sass,
//   Tailwind,
//   Vscode,
//   Php,
//   Mysql,
//   Express,
//   Firebase,
//   Node,
//   MongoDB,
//   Redux,
//   Typescript,
//   Wordpress,
//   Core,
//   Photoshop,
// } from "../../../public/index.js";

const Skills = () => {
  return (
    <div className="skills padding">
      <Heading title="The Skills, Tools and Technologies I'm Really Good At." />
      <div className="maincontent skills_card">
        {technologies.map((tech) => (
          <div className="flex-col items-center justify-center">
            <img
              src={tech.icon}
              alt={tech.title}
              title={tech.title}
              className="skillIcon"
            />
            <span className="skillTitle">{tech.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
