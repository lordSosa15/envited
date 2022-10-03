import React from "react";
import images from "../../constants/images";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="app__header">
      <div classname="app__header-img">
        <img src={images.demopage} alt="demopage" />
      </div>
    </div>
  );
};

export default Landing;
