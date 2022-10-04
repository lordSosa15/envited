import React from "react";
import images from "../../constants/images";
import "./Header.css";

const header = () => {
  return (
    <div className="app__phone-info">
      <br />
      {/* <div>
      9:41
    </div> */}
      <div className="app__phone-statusbar">
        <img src={images.mobileSignal} alt="" />
        <img src={images.wifi} alt="" />
        <img src={images.battery} alt="" />
      </div>
    </div>
  );
};

export default header;
