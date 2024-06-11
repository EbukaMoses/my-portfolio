import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="heading" data-aos="fade-right">
      <h1 className="h2">➠ {title}</h1>
    </div>
  );
};

export default Heading;
