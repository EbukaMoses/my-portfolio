import React from "react";
import "./Xperience.css";
import Heading from "../Common/Heading";
import { experience } from "../../utils/data";

const Xperience = () => {
  return (
    <div className="xperience padding">
      <Heading title="Here is a Qiuck Summary of My Most Recent Experience." />
      <div className="maincontent">
        {experience.map((exp) => (
          <div className="card flex mb" key={exp.company}>
            <div className="company">
              <h1 className="h3">{exp.company}</h1>
              <p className="date">{exp.date}</p>
            </div>
            <div className="desc flex-col">
              <h3 className="h3">{exp.position}</h3>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Xperience;
