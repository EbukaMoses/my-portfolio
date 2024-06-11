import React from "react";
import Heading from "../Common/Heading";
import { post } from "../../utils/data";

const Blog = () => {
  return (
    <div className="blog padding">
      <Heading title="My Thoughts on Technology & Business, Welcome to Subscribe." />
      <div className="maincontent">
        <center className="mb">
          ---------------------------Coming Soon---------------------------
        </center>
        {/* {post.map((post) => (
          <a href="#" key={post.title}>
            <div className="card mb flex">
              <div className="company">
                <img src={post.img} alt="" />
              </div>
              <div className="desc flex-col">
                <h3 className="h3">{post.title}</h3>
                <p>{post.content}</p>
                <br />
               
              </div>
            </div>
          </a>
        ))} */}
      </div>
    </div>
  );
};

export default Blog;
