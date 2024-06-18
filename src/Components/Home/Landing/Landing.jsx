import React from "react";
import { Hero } from "/public";
import "./Landing.css";
import Button from "../../Common/Button";
import { Bootstrap } from "../../../../public";

const Landing = () => {
  const Redirect = () => {
    sessionStorage.setItem("redirect", "true");
    window.location.reload();
  };

  return (
    <section className="landing">
      <div className="overlay"></div>
      <video src={Hero} autoPlay loop muted type="video/mp4"></video>

      <div className="landing_content">
        <p>I'M EBUKA MOSES, A</p>
        <div className="position text-animate flex-col items-center">
          <h1>FRONT-END</h1>
          <h1>DEVELOPER</h1>
        </div>
        <div className="button">
          <Button
            title="View My portfolio"
            containerStyles="portfolioBtn"
            type="submit"
            onClick={Redirect}
          />
        </div>
        {/* <div className="landing_blog flex items-end">
          <img src={Bootstrap} alt="" className="landinfImg" />
          <div className="landing_blog_text">
            <h3>Here We Are</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, ducimus? Delectus, atque necessitatibus culpa iusto
              provident, magnam itaque totam.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Landing;
