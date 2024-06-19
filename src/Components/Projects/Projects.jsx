import React, { useState } from "react";
import "./Projects.css";
import Heading from "../Common/Heading";
import { FaGithubSquare } from "react-icons/fa";
import { pic } from "../../../public";
import { project } from "../../utils/data";
import { FaLink, FaEye } from "react-icons/fa";

const Projects = () => {
  const [popup, setPopup] = useState(false);
  const [img, setImg] = useState(false);
  const toggleModal = (e) => {
    setPopup(!popup);
    setImg(!popup);
  };
  return (
    <div className="project padding">
      <Heading title="Some of the Noteworthy Projects I have Built." />
      <div className="maincontent projectCard">
        <div className="grid">
          {project.map((proj) => (
            <div className="items" key={proj.title}>
              <div className="img">
                <img src={proj.img} alt="" />
                <i className="fas fa-image" onClick={toggleModal}></i>
              </div>
              <div className="title">
                <h3>{proj.title}</h3>
              </div>
              <div className="technologies flex items-center">
                {proj.lang.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>

              <div className="flex justify- live-btn">
                <a
                  href={proj.live}
                  className="flex justify-center items-center"
                  target="_blank"
                >
                  View &nbsp;
                  <FaEye />
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  className="flex justify-center items-center"
                >
                  Github &nbsp;
                  <FaLink />
                  {/* <FaGithubSquare className="fa" /> */}
                </a>
              </div>
            </div>
          ))}

          {popup && (
            <div className="popup">
              <div className="hide">
                <div className="popup-content">
                  <button onClick={toggleModal}>Close</button>
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
