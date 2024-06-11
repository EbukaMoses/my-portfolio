import React from "react";
import "./Education.css";
import Heading from "../Common/Heading";
import { education } from "../../utils/data";

const Education = () => {
  return (
    <div className="eduction padding">
      <Heading title="Here is a Qiuck Summary of My Educational background." />
      <div className="maincontent">
        {education.map((edu) => (
          <div className="card mb flex">
            <div className="company">
              <h1 className="h3">{edu.uni}</h1>
              <p className="date">{edu.date}</p>
            </div>
            <div className="desc flex-col">
              <h3 className="h3">{edu.course}</h3>
              <p>{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
