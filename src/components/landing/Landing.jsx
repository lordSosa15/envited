import React from "react";
import images from "../../constants/images";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="app__landing app__wrapper section__padding">
      <div className="app__wrapper_info">
        <h1> Imagine if </h1>
        <h1 className="gradient__text"> Snapchat</h1>
        <h1>had events.</h1>
        <h2>
          Easily host and share events with your friends across any social
          media.
        </h2>
      </div>
      <div className="app__wrapper_img">
        <img src={images.demopage} alt="demopage" />
      </div>
    </div>
  );
};

export default Landing;
