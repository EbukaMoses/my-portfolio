import { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Portfolio.css";
import { pic } from "../../../../public";
import Button from "../../Common/Button";
import About from "../../About/About";
import Xperience from "../../Xperience/Xperience";
import Skills from "../../Skills/Skills";
import Projects from "./../../Projects/Projects";
import Education from "../../Education/Education";
import Blog from "../../Blog/Blog";
import Footer from "../../Common/Footer";
import NavTab from "../../Common/NavTab";
import Header from "./../../Common/Header";

const Portfolio = () => {
  const [view, setView] = useState("0");
  const [active, setActive] = useState(false);

  const project = (props) => {
    switch (props) {
      case "0":
        return <About />;
      case "1":
        return <Xperience />;
      case "2":
        return <Skills />;
      case "3":
        return <Projects />;
      case "4":
        return <Education />;
      case "5":
        return <Blog />;

      default:
        return <About />;
    }
  };

  return (
    <>
      <Header />
      <section className="flex justify-center">
        <div className=" portfolio">
          {/* left section starts here  */}
          <div className="leftside flex-col">
            {/* profile pic  */}
            <div className="img">
              <img src={pic} alt="Ebuka Moses Okoye" />
            </div>

            <h1 className="h1 name">Ebuka Moses 👋🏾</h1>
            <a href="/images/Ebuka_Moses_cv.pdf" className="cv">
              Hire Me | Download CV
            </a>
            {/* <Button title="Hire Me | Download CV" /> */}
            <div className="details flex-col">
              {/* <h6 className="h4">Lagos, Nigeria</h6> */}
              <h6 className="h4">
                <a href="mailto:Okoyemoses83@gmail.com">
                  Okoyemoses83@gmail.com
                </a>
              </h6>
              <div className="socialIcons flex justify-center ">
                <a href="https://x.com/bukan_moses" target="_blank">
                  <FaSquareXTwitter className="fa" />
                </a>
                <a href="https://instagram.com/bukan_moses" target="_blank">
                  <FaInstagramSquare className="fa" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ebuka-moses-a417b614b/"
                  target="_blank"
                >
                  <FaLinkedin className="fa" />
                </a>
                <a href="https://github.com/ebukamoses" target="_blank">
                  <FaGithubSquare className="fa" />
                </a>
              </div>
            </div>
          </div>
          {/* right section starts here  */}
          <div className="rightside">
            <div className="rightside-content flex-col  justify-center">
              <div className="nav">
                <NavTab
                  title="About"
                  active={active}
                  onClick={() => {
                    setView("0");
                    setActive(true);
                  }}
                />
                <NavTab title="Xperience" onClick={() => setView("1")} />
                <NavTab title="Skills" onClick={() => setView("2")} />
                <NavTab title="Projects" onClick={() => setView("3")} />
                <NavTab title="Education" onClick={() => setView("4")} />
                <NavTab title="Blog" onClick={() => setView("5")} />
              </div>

              <div className="rightside-body">
                {project(view)}

                <Footer />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
